import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  FileText,
  Layers3,
  ListChecks,
  Pencil,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'AI Coding Prompt - PlanAI',
  description:
    'PlanAI AI coding prompt builder that turns development tasks into an exportable implementation prompt.',
};

const promptBlocks = [
  {
    title: 'Product context',
    icon: FileText,
    body: 'Build AI Study Planner, a SaaS web application for students who need a structured study roadmap and AI-assisted weekly learning plan.',
  },
  {
    title: 'MVP scope',
    icon: Target,
    body: 'Include authenticated project workspace, idea intake, AI interview, generated PRD, feature breakdown, MVP scope, roadmap, development tasks, and prompt export.',
  },
  {
    title: 'Tech stack',
    icon: Database,
    body: 'Use Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase Auth, and Supabase PostgreSQL.',
  },
  {
    title: 'Development output',
    icon: ListChecks,
    body: 'Implement the selected P0 and P1 tasks first, keep the flow buildable, and avoid advanced collaboration, billing, and analytics in the MVP.',
  },
];

const includedTasks = [
  'Set up authenticated project workspace',
  'Create project and product plan data model',
  'Build idea intake and AI interview flow',
  'Generate living PRD from product context',
  'Create MVP, roadmap, and task breakdown',
  'Generate AI coding prompt and export actions',
];

const fullPrompt = `Build the MVP for AI Study Planner as a SaaS web application.

Product context:
- Primary user: students who need structured study planning.
- Core value: turn learning goals into a clear weekly roadmap and action plan.
- Product style: PlanAI-style workspace with a living PRD and development-ready output.

Tech stack:
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase Auth
- Supabase PostgreSQL

MVP scope:
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

Development tasks:
1. Set up authenticated project workspace.
2. Create project and product plan data model.
3. Build idea intake and AI interview flow.
4. Generate living PRD from product context.
5. Create MVP, roadmap, and task breakdown.
6. Generate AI coding prompt and export actions.

Do not include advanced collaboration, billing, complex analytics, or marketplace features in the MVP. Keep the first version focused on the journey from raw idea to development-ready plan.`;

export const dynamic = 'force-static';

export default function CodingPromptPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f7] text-foreground">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-lg border border-border bg-[#10211f] p-5 text-white lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <Link href="../dashboard" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-300 text-teal-950">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold">PlanAI</p>
              <p className="text-xs text-teal-100/70">AI Coding Prompt</p>
            </div>
          </Link>

          <div className="mt-8 rounded-md bg-white/10 p-4">
            <div className="flex items-center gap-3">
              <Braces className="h-5 w-5 text-teal-300" aria-hidden="true" />
              <p className="text-sm font-semibold text-teal-100">
                Prompt includes
              </p>
            </div>
            <ul className="mt-4 grid gap-3">
              {['Product context', 'MVP scope', 'Tech stack', 'Development tasks'].map(
                (item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-teal-50/78">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="mb-6 flex flex-col justify-between gap-4 rounded-lg border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div>
              <Link
                href="tasks"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Development Tasks
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                AI Coding Prompt
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                PlanAI transforms the selected development tasks into a focused
                prompt that can brief an AI coding tool.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-md"
              render={<Link href="export" />}
            >
              Export / Copy
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <section className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <Tabs defaultValue="builder" className="gap-6">
                <TabsList className="grid h-auto w-full grid-cols-3 rounded-md bg-muted p-1">
                  <TabsTrigger value="builder" className="rounded-sm py-2 text-sm">
                    Builder
                  </TabsTrigger>
                  <TabsTrigger value="tasks" className="rounded-sm py-2 text-sm">
                    Tasks
                  </TabsTrigger>
                  <TabsTrigger value="prompt" className="rounded-sm py-2 text-sm">
                    Prompt
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="builder">
                  <div className="grid gap-4 md:grid-cols-2">
                    {promptBlocks.map(({ title, icon: Icon, body }) => (
                      <article
                        key={title}
                        className="rounded-md border border-border bg-background p-4"
                      >
                        <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                        <h2 className="mt-3 text-base font-semibold">{title}</h2>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {body}
                        </p>
                      </article>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tasks">
                  <ol className="grid gap-3">
                    {includedTasks.map((task, index) => (
                      <li
                        key={task}
                        className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-border bg-background p-4"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#112320] text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="self-center text-sm font-semibold">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ol>
                </TabsContent>

                <TabsContent value="prompt">
                  <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap rounded-md border border-[#112320]/12 bg-[#112320] p-5 text-sm leading-7 text-teal-50/88">
                    {fullPrompt}
                  </pre>
                </TabsContent>
              </Tabs>
            </section>

            <aside className="grid gap-4">
              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Pencil className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Continue editing</h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Tune the final wording before export. This keeps the prompt
                  useful for the exact AI coding tool you want to use.
                </p>
                <Textarea
                  defaultValue={fullPrompt}
                  className="mt-4 min-h-72 rounded-md bg-white p-4 text-sm leading-6"
                />
              </section>

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    MVP guardrail
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-amber-950/78">
                  Keep the prompt focused on the core PlanAI journey and avoid
                  later-stage features until the development-ready flow works.
                </p>
              </section>

              <Button
                size="lg"
                className="h-12 rounded-md"
                render={<Link href="export" />}
              >
                Review export options
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
