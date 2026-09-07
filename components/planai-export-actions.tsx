'use client';

import Link from 'next/link';
import { Check, Copy, Download, Pencil } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function PlanAIExportActions({ promptText }: { promptText: string }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function exportMarkdown() {
    const blob = new Blob([promptText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'planai-ai-study-planner-coding-prompt.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Button
        type="button"
        size="lg"
        className="h-12 rounded-md"
        onClick={copyPrompt}
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? 'Copied' : 'Copy prompt'}
      </Button>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="h-12 rounded-md bg-white"
        onClick={exportMarkdown}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Export Markdown
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="h-12 rounded-md bg-white"
        render={<Link href="coding-prompt" />}
      >
        <Pencil className="h-4 w-4" aria-hidden="true" />
        Continue editing
      </Button>
    </div>
  );
}
