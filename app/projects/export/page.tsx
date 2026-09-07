import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Braces,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Download,
  FileText,
  Pencil,
  Rocket,
  Sparkles,
} from 'lucide-react';

import { PlanAIExportActions } from '@/components/planai-export-actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Export Coding Prompt - PlanAI',
  description:
    'Export, copy, or continue editing the PlanAI AI coding prompt.',
};

const finalPrompt = `# AI Study Planner - AI Coding Prompt

Build the MVP for AI Study Planner as a SaaS web application.

## Product context
- Primary user: students who need structured study planning.
- Core value: turn learning goals into a clear weekly roadmap and action plan.
- Product style: PlanAI-style workspace with a living PRD and development-ready output.

## Tech stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase Auth
- Supabase PostgreSQL

## MVP scope
- Authenticated project workspace
- Describe idea intake
- AI interview question flow
- AI analysis summary
- Generated product plan
- Living PRD
- Feature breakdown
- MVP scope and roadmap
- Development tasks
- Exportable AI coding prompt

## Development tasks
1. Set up authenticated project workspace.
2. Create project and product plan data model.
3. Build idea intake and AI interview flow.
4. Generate living PRD from product context.
5. Create MVP, roadmap, and task breakdown.
6. Generate AI coding prompt and export actions.

## Guardrails
Do not include advanced collaboration, billing, complex analytics, or marketplace features in the MVP. Keep the first version focused on the journey from raw idea to development-ready plan.`;

const exportOptions = [
  {
    icon: ClipboardCheck,
    title: 'Copy',
    body: 'Send the prompt straight into an AI coding tool.',
  },
  {
    icon: Download,
    title: 'Export',
    body: 'Download the prompt as a Markdown file for handoff or archive.',
  },
  {
    icon: Pencil,
    title: 'Continue editing',
    body: 'Return to the prompt builder and refine scope before using it.',
  },
];

export default function ExportPromptPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f7] text-foreground">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-lg border border-border bg-[#10211f] p-5 text-white lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-300 text-teal-950">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold">PlanAI</p>
              <p className="text-xs text-teal-100/70">Export Prompt</p>
            </div>
          </Link>

          <div className="mt-8 rounded-md bg-white/10 p-4">
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5 text-teal-300" aria-hidden="true" />
              <p className="text-sm font-semibold text-teal-100">
                Development Ready
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-teal-50/78">
              The project has a PRD, MVP scope, roadmap, tasks, and AI coding
              prompt ready for handoff.
            </p>
          </div>

          <Button
            variant="outline"
            className="mt-4 w-full rounded-md border-white/15 bg-white/10 text-white hover:bg-white/15"
            render={<Link href="/projects/workspace" />}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Project Workspace
          </Button>
        </aside>

        <section className="min-w-0">
          <header className="mb-6 flex flex-col justify-between gap-4 rounded-lg border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div>
              <Link
                href="/projects/coding-prompt"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                AI Coding Prompt
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Export / Copy / Continue Editing
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                Use the final PlanAI output as a development handoff, copy it
                into an AI coding tool, or return to editing before shipping it.
              </p>
            </div>
            <Badge className="h-7 bg-teal-700 px-3 text-sm text-white">
              Final output
            </Badge>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <section className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-[#112320] text-teal-200">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Final AI coding prompt</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Generated from project context, PRD, MVP scope, roadmap, and
                    selected development tasks.
                  </p>
                </div>
              </div>

              <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-md border border-[#112320]/12 bg-[#112320] p-5 text-sm leading-7 text-teal-50/88">
                {finalPrompt}
              </pre>

              <div className="mt-6 border-t border-border pt-6">
                <PlanAIExportActions promptText={finalPrompt} />
              </div>
            </section>

            <aside className="grid gap-4">
              {exportOptions.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-lg border border-border bg-white p-5 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {body}
                  </p>
                </article>
              ))}

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    Included context
                  </h2>
                </div>
                <ul className="mt-4 grid gap-3">
                  {['PRD', 'Features', 'MVP scope', 'Roadmap', 'Development tasks'].map(
                    (item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-amber-950/78">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber-700" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </section>

              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Braces className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Next action</h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Paste the copied prompt into your AI coding workflow and start
                  from the authenticated project workspace.
                </p>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
