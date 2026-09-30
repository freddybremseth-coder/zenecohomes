import React from "react";
import Link from "next/link";
import { withArticleAttribution } from "@/lib/article-attribution";

function inlineMarkdown(text: string, attributionSlug?: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1];
      const rawHref = link[2];
      const href = withArticleAttribution(rawHref, attributionSlug, Boolean(attributionSlug));
      if (href.startsWith("/")) {
        return (
          <Link key={index} href={href} className="font-medium text-cyan-700 underline decoration-cyan-200 underline-offset-4 hover:text-cyan-900">
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-cyan-700 underline decoration-cyan-200 underline-offset-4 hover:text-cyan-900"
        >
          {label}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function tableCells(line: string) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map(cell => cell.trim());
}

function isTableDivider(line: string) {
  const cells = tableCells(line);
  return cells.length > 0 && cells.every(cell => /^:?-{3,}:?$/.test(cell));
}

export default function MarkdownArticle({
  markdown,
  attributionSlug,
}: {
  markdown: string;
  attributionSlug?: string;
}) {
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    const items = listItems;
    listItems = [];
    blocks.push(
      <ul key={"list-" + blocks.length} className="my-6 list-disc space-y-2 pl-6 text-base leading-8 text-slate-600">
        {items.map((item, index) => (
          <li key={index}>{inlineMarkdown(item, attributionSlug)}</li>
        ))}
      </ul>,
    );
  };

  const lines = markdown.split(/\r?\n/);
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      flushList();
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      listItems.push(line.replace(/^[-*]\s+/, ""));
      index += 1;
      continue;
    }

    flushList();

    if (
      line.startsWith("|") &&
      index + 1 < lines.length &&
      isTableDivider(lines[index + 1].trim())
    ) {
      const headers = tableCells(line);
      const rows: string[][] = [];
      index += 2;

      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(tableCells(lines[index].trim()));
        index += 1;
      }

      blocks.push(
        <div key={"table-" + blocks.length} className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                {headers.map((header, cellIndex) => (
                  <th key={cellIndex} className="border-b border-slate-200 px-4 py-3 font-semibold">
                    {inlineMarkdown(header, attributionSlug)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="whitespace-nowrap px-4 py-3 align-top">
                      {inlineMarkdown(cell, attributionSlug)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={blocks.length}
          className="my-7 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-slate-700"
        >
          {inlineMarkdown(line.slice(2), attributionSlug)}
        </blockquote>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={blocks.length} className="mt-10 text-2xl font-semibold text-slate-900">
          {inlineMarkdown(line.slice(4), attributionSlug)}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={blocks.length} className="mt-12 text-3xl font-semibold text-slate-900">
          {inlineMarkdown(line.slice(3), attributionSlug)}
        </h2>,
      );
    } else if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={blocks.length} className="mt-10 text-4xl font-semibold text-slate-900">
          {inlineMarkdown(line.slice(2), attributionSlug)}
        </h1>,
      );
    } else {
      blocks.push(
        <p key={blocks.length} className="my-5 text-base leading-8 text-slate-600">
          {inlineMarkdown(line, attributionSlug)}
        </p>,
      );
    }
    index += 1;
  }

  flushList();

  return <div>{blocks}</div>;
}
