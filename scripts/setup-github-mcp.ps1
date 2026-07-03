param(
    [string]$Token
)

$ErrorActionPreference = "Stop"

function Get-PlainTextFromSecureString {
    param(
        [Parameter(Mandatory = $true)]
        [Security.SecureString]$SecureString
    )

    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecureString)
    try {
        return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
    }
    finally {
        if ($bstr -ne [IntPtr]::Zero) {
            [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
        }
    }
}

function Get-RequiredToken {
    param(
        [string]$ProvidedToken
    )

    if ($ProvidedToken) {
        return $ProvidedToken.Trim()
    }

    $secureToken = Read-Host "Enter your GitHub fine-grained token" -AsSecureString
    return (Get-PlainTextFromSecureString -SecureString $secureToken).Trim()
}

function Set-ObjectProperty {
    param(
        [Parameter(Mandatory = $true)]
        [object]$Object,
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [Parameter(Mandatory = $true)]
        [object]$Value
    )

    $property = $Object.PSObject.Properties[$Name]
    if ($property) {
        $property.Value = $Value
    }
    else {
        $Object | Add-Member -NotePropertyName $Name -NotePropertyValue $Value
    }
}

function Get-OrCreateJsonObject {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        return [pscustomobject]@{}
    }

    $raw = Get-Content -LiteralPath $Path -Raw
    if ([string]::IsNullOrWhiteSpace($raw)) {
        return [pscustomobject]@{}
    }

    return $raw | ConvertFrom-Json
}

function Save-JsonObject {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [Parameter(Mandatory = $true)]
        [object]$JsonObject
    )

    $directory = Split-Path -Parent $Path
    if (-not (Test-Path -LiteralPath $directory)) {
        New-Item -ItemType Directory -Path $directory | Out-Null
    }

    $json = $JsonObject | ConvertTo-Json -Depth 10
    Set-Content -LiteralPath $Path -Value $json
}

function Update-McpServerConfig {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Path,
        [Parameter(Mandatory = $true)]
        [object]$ServerConfig
    )

    $config = Get-OrCreateJsonObject -Path $Path

    if (-not $config.PSObject.Properties["mcpServers"]) {
        $config | Add-Member -NotePropertyName "mcpServers" -NotePropertyValue ([pscustomobject]@{})
    }

    Set-ObjectProperty -Object $config.mcpServers -Name "github" -Value $ServerConfig
    Save-JsonObject -Path $Path -JsonObject $config
}

function Set-UserEnvironmentVariable {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name,
        [Parameter(Mandatory = $true)]
        [string]$Value
    )

    [Environment]::SetEnvironmentVariable($Name, $Value, "User")
}

$tokenValue = Get-RequiredToken -ProvidedToken $Token

if ([string]::IsNullOrWhiteSpace($tokenValue)) {
    throw "No GitHub token was provided."
}

if ($tokenValue -notmatch "^(github_pat_|ghp_)") {
    Write-Warning "The token does not look like a standard GitHub PAT. Continuing anyway."
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$cursorConfigPath = Join-Path $repoRoot ".cursor\mcp.json"
$antigravityProjectConfigPath = Join-Path $repoRoot ".agents\mcp_config.json"
$antigravityGlobalConfigPath = Join-Path $HOME ".gemini\antigravity\mcp_config.json"

$cursorServerConfig = [pscustomobject]@{
    url     = "https://api.githubcopilot.com/mcp/"
    headers = [pscustomobject]@{
        Authorization = "Bearer $tokenValue"
    }
}

$antigravityServerConfig = [pscustomobject]@{
    serverUrl = "https://api.githubcopilot.com/mcp/"
    headers   = [pscustomobject]@{
        Authorization = "Bearer $tokenValue"
    }
}

foreach ($envName in @(
    "GH_TOKEN",
    "GITHUB_TOKEN",
    "GITHUB_PERSONAL_ACCESS_TOKEN",
    "CURSOR_GITHUB_TOKEN",
    "COPILOT_GITHUB_TOKEN"
)) {
    Set-UserEnvironmentVariable -Name $envName -Value $tokenValue
}

Update-McpServerConfig -Path $cursorConfigPath -ServerConfig $cursorServerConfig
Update-McpServerConfig -Path $antigravityProjectConfigPath -ServerConfig $antigravityServerConfig
Update-McpServerConfig -Path $antigravityGlobalConfigPath -ServerConfig $antigravityServerConfig

Write-Host "Configured GitHub MCP for:"
Write-Host "  Cursor project config: $cursorConfigPath"
Write-Host "  Antigravity project config: $antigravityProjectConfigPath"
Write-Host "  Antigravity global config: $antigravityGlobalConfigPath"
Write-Host ""
Write-Host "Stored user-level environment variables:"
Write-Host "  GH_TOKEN"
Write-Host "  GITHUB_TOKEN"
Write-Host "  GITHUB_PERSONAL_ACCESS_TOKEN"
Write-Host "  CURSOR_GITHUB_TOKEN"
Write-Host "  COPILOT_GITHUB_TOKEN"
Write-Host ""
Write-Host "Restart Cursor and Antigravity completely so they pick up the new configuration."
