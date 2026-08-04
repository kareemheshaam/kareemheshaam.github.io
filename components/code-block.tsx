import { cn } from "@/lib/utils";

const keywordPattern = /^(?:as|async|await|break|class|const|continue|def|else|export|false|for|from|function|if|import|in|is|let|new|null|return|true|try|while|yield)$/;
const tokenPattern = /(#[^\n]*$|\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:as|async|await|break|class|const|continue|def|else|export|false|for|from|function|if|import|in|is|let|new|null|return|true|try|while|yield)\b|\b\d+(?:\.\d+)?\b)/g;

function highlightLine(line: string) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  tokenPattern.lastIndex = 0;

  while ((match = tokenPattern.exec(line)) !== null) {
    if (match.index > cursor) nodes.push(line.slice(cursor, match.index));
    const token = match[0];
    const className = token.startsWith("#") || token.startsWith("//")
      ? "code-comment"
      : token.startsWith('"') || token.startsWith("'")
        ? "code-string"
        : /^\d/.test(token)
          ? "code-number"
          : keywordPattern.test(token)
            ? "code-keyword"
            : undefined;
    nodes.push(<span key={`${match.index}-${token}`} className={className}>{token}</span>);
    cursor = match.index + token.length;
  }
  if (cursor < line.length) nodes.push(line.slice(cursor));
  return nodes;
}

export function CodeBlock({ code, filename, language, className }: { code: string; filename: string; language: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl", className)}>
      <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[10px] text-slate-500">{filename}</span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600">{language}</span>
      </div>
      <div className="overflow-x-auto p-5 sm:p-6">
        <pre className="min-w-max font-mono text-[12px] leading-6 text-slate-300 sm:text-[13px]">
          <code>
            {code.split("\n").map((line, index) => (
              <span key={index} className="block">
                <span className="mr-5 inline-block w-5 select-none text-right text-slate-700" aria-hidden="true">{index + 1}</span>
                {highlightLine(line)}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
