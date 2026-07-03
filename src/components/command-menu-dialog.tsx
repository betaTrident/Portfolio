"use client";

import { Folder, Hash, Layers, Terminal } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import type { CommandProject } from "@/components/command-menu-provider";
import { pageNavItems, sectionNavItems } from "@/components/layout/nav-items";
import {
  Command,
  CommandDialog as CommandDialogPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

type CommandMenuDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projects: CommandProject[];
};

function sectionTarget(id: string, isHome: boolean) {
  return isHome ? `#${id}` : `/#${id}`;
}

export function CommandMenuDialog({
  open,
  onOpenChange,
  projects,
}: CommandMenuDialogProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  function navigateTo(href: string) {
    onOpenChange(false);

    if (href.startsWith("#")) {
      const target = document.getElementById(href.slice(1));
      target?.scrollIntoView({ block: "start", behavior: "smooth" });
      window.history.replaceState(null, "", href);
      return;
    }

    router.push(href);
  }

  return (
    <CommandDialogPrimitive
      open={open}
      onOpenChange={onOpenChange}
      title="Command palette"
      description="Navigate sections, pages, and case studies."
      className="sm:max-w-xl"
    >
      <Command className="rounded-xl border border-border/60">
        <CommandInput placeholder="Jump to a section, page, or project..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {sectionNavItems.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.number} ${item.label}`}
                onSelect={() => navigateTo(sectionTarget(item.id, isHome))}
              >
                <Hash className="size-4 text-muted-foreground" />
                <span>
                  {item.number} / {item.label}
                </span>
                <CommandShortcut>section</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Pages">
            {pageNavItems.map((item) => (
              <CommandItem
                key={item.href}
                value={item.label}
                onSelect={() => navigateTo(item.href)}
              >
                <Layers className="size-4 text-muted-foreground" />
                <span>{item.label}</span>
                <CommandShortcut>{item.href}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                value={`${project.title} ${project.category}`}
                onSelect={() => navigateTo(`/projects/${project.slug}`)}
              >
                <Folder className="size-4 text-muted-foreground" />
                <span>{project.title}</span>
                <CommandShortcut>{project.category}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Contact">
            <CommandItem
              value="email contact"
              onSelect={() => navigateTo(sectionTarget("contact", isHome))}
            >
              <Terminal className="size-4 text-muted-foreground" />
              <span>contact</span>
              <CommandShortcut>mailto</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialogPrimitive>
  );
}
