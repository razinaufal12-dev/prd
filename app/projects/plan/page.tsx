import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  Flag,
  Layers3,
  ListChecks,
  Map,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Generate Product Plan - PlanAI',
  description:
    'Generated PlanAI product plan with PRD, features, MVP, roadmap, tasks, and AI coding prompt.',
};

const steps = [
  { label: 'Describe idea', done: true },
  { label: 'AI Interview', done: true },
  { label: 'AI Analysis', done: true },
  { label: 'Product Plan', active: true },
  { label: 'Project Workspace' },
];

const planOutputs = [
  { label: 'PRD', icon: FileText, status: 'Generated' },
  { label: 'Features', icon: Layers3, status: 'Generated' },
  { label: 'User Stories', icon: Users, status: 'Generated' },
  { label: 'MVP Scope', icon: Target, status: 'Generated' },
  { label: 'Roadmap', icon: Map, status: 'Generated' },
  { label: 'Tasks', icon: ListChecks, status: 'Generated' },
  { label: 'Coding Prompt', icon: Code2, status: 'Ready' },
];

const features = [
  'Idea intake with structured project context',
  'AI interview for product clarification',
  'Living PRD generated from answers',
  'Development-ready task breakdown',
];

const roadmap = [
  { phase: 'MVP', focus: 'Idea intake, AI interview, PRD, MVP, roadmap, tasks, coding prompt' },
  { phase: 'V1', focus: 'Project history, editable PRD, exportable coding prompts' },
  { phase: 'Vision', focus: 'AI Product Development Operating System' },
];

const taskList = [
  'Create authenticated project records',
  'Store AI interview answers as product context',
  'Generate PRD sections from structured context',
  'Create roadmap, tasks, and final AI coding prompt',
];

export default function ProductPlanPage() {
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
              <p className="text-xs text-teal-100/70">Generated Plan</p>
            </div>
          </Link>

          <ol className="mt-8 grid gap-2">
            {steps.map((step, index) => (
              <li
                key={step.label}
                className={`grid grid-cols-[auto_1fr] gap-3 rounded-md p-3 ${
                  step.active
                    ? 'bg-white text-[#10211f]'
                    : step.done
                      ? 'bg-white/10 text-white'
                      : 'text-teal-50/70'
                }`}
              >
                <span
                  className={`grid h-7 w-7 place-items-center rounded-md text-xs font-bold ${
                    step.active ? 'bg-teal-300 text-teal-950' : 'bg-white/10'
                  }`}
                >
                  {step.done ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                </span>
                <span className="self-center text-sm font-semibold">{step.label}</span>
              </li>
            ))}
          </ol>
        </aside>

        <section className="min-w-0">
          <header className="mb-6 flex flex-col justify-between gap-4 rounded-lg border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div>
              <Link
                href="/projects/analysis"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                AI Analysis
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Generate Product Plan
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                PlanAI turns the analyzed context into the complete development
                planning package.
              </p>
            </div>
            <Badge className="h-7 bg-teal-700 px-3 text-sm text-white">
              Step 4
            </Badge>
          </header>

          <section className="mb-6 grid gap-3 md:grid-cols-3 xl:grid-cols-7">
            {planOutputs.map(({ label, icon: Icon, status }) => (
              <article
                key={label}
                className="rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <span className="rounded-full bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-800">
                    {status}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold">{label}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <article className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <Tabs defaultValue="prd" className="gap-6">
                <TabsList className="grid h-auto w-full grid-cols-2 rounded-md bg-muted p-1 md:grid-cols-4">
                  <TabsTrigger value="prd" className="rounded-sm py-2 text-sm">
                    PRD
                  </TabsTrigger>
                  <TabsTrigger value="features" className="rounded-sm py-2 text-sm">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="roadmap" className="rounded-sm py-2 text-sm">
                    Roadmap
                  </TabsTrigger>
                  <TabsTrigger value="prompt" className="rounded-sm py-2 text-sm">
                    Prompt
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="prd">
                  <div className="grid gap-5">
                    <div>
                      <Badge variant="outline" className="bg-background">
                        Living PRD
                      </Badge>
                      <h2 className="mt-3 text-2xl font-semibold">
                        AI Study Planner
                      </h2>
                      <p className="mt-2 leading-7 text-muted-foreground">
                        A SaaS application that helps students create structured
                        study plans, get weekly learning guidance, and stay on
                        track with AI-assisted planning.
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        ['Target user', 'Students who need structured study routines.'],
                        ['Core problem', 'Planning study goals is scattered and inconsistent.'],
                        ['Value prop', 'Turn learning goals into a clear weekly plan.'],
                        ['Success signal', 'A user completes a usable first study roadmap.'],
                      ].map(([title, body]) => (
                        <div key={title} className="rounded-md border border-border bg-background p-4">
                          <h3 className="text-sm font-semibold">{title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <ul className="grid gap-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex gap-3 rounded-md border border-border bg-background p-4 text-sm leading-6">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="roadmap">
                  <div className="grid gap-3">
                    {roadmap.map((item) => (
                      <article key={item.phase} className="rounded-md border border-border bg-background p-4">
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-teal-700" aria-hidden="true" />
                          <h3 className="text-base font-semibold">{item.phase}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.focus}
                        </p>
                      </article>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="prompt">
                  <div className="rounded-md border border-[#112320]/12 bg-[#112320] p-5 text-white">
                    <div className="flex items-center gap-3">
                      <Braces className="h-5 w-5 text-teal-300" aria-hidden="true" />
                      <h2 className="text-xl font-semibold">AI coding prompt</h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-teal-50/82">
                      Build the MVP for AI Study Planner using Next.js,
                      TypeScript, Tailwind CSS, shadcn/ui, Supabase Auth, and
                      Supabase PostgreSQL. Start with authenticated projects,
                      idea intake, AI interview storage, generated PRD sections,
                      roadmap, development tasks, and an exportable coding prompt.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </article>

            <aside className="grid gap-4">
              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Development tasks</h2>
                </div>
                <ol className="mt-5 grid gap-3">
                  {taskList.map((task, index) => (
                    <li key={task} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6">
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-[#112320] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    Development Ready
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-amber-950/78">
                  The plan now has enough structure to become a project workspace.
                </p>
              </section>

              <Button
                size="lg"
                className="h-12 rounded-md"
                render={<Link href="/projects/workspace" />}
              >
                Open Project Workspace
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </aside>
          </section>
        </section>
      </div>
    </main>
  );
}
