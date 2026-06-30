import { MDXRemote } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-7 prose-strong:text-foreground prose-li:text-muted-foreground">
      <MDXRemote source={source} />
    </article>
  );
}
