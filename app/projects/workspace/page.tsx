import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Bot,
  Braces,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  Flag,
  LayoutDashboard,
  ListChecks,
  Map,
  MessageSquareText,
  MoreHorizontal,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Project Workspace - PlanAI',
  description:
    'PlanAI project workspace for managing a living PRD, MVP scope, roadmap, tasks, and AI coding prompt.',
};

const workspaceNav = [
  { label: 'Overview', icon: LayoutDashboard, active: true, href: '/projects/workspace' },
  { label: 'AI Interview', icon: MessageSquareText, href: '/projects/interview' },
  { label: 'Living PRD', icon: FileText, href: '/projects/plan' },
  { label: 'Features', icon: ClipboardList, href: '/projects/plan' },
  { label: 'MVP', icon: Target, href: '/projects/plan' },
  { label: 'Roadmap', icon: Map, href: '/projects/plan' },
  { label: 'Tasks', icon: ListChecks, href: '/projects/tasks' },
  { label: 'Coding Prompt', icon: Code2, href: '/projects/coding-prompt' },
];

const readinessItems = [
  'Idea captured',
  'AI interview complete',
  'Product analysis generated',
  'PRD drafted',
  'MVP scoped',
  'Roadmap and tasks ready',
  'Coding prompt prepared',
];

const roadmapItems = [
  { phase: 'Week 1', focus: 'Auth, project model, idea intake, and interview storage' },
  { phase: 'Week 2', focus: 'PRD generation, feature breakdown, and MVP scope view' },
  { phase: 'Week 3', focus: 'Roadmap, development task generation, and coding prompt export' },
];

const tasks = [
  { title: 'Create Supabase Auth flow', area: 'Auth', status: 'Ready' },
  { title: 'Create projects and product_plans tables', area: 'Data', status: 'Ready' },
  { title: 'Persist AI interview answers', area: 'Interview', status: 'Ready' },
  { title: 'Render generated PRD sections', area: 'PRD', status: 'Ready' },
  { title: 'Generate task list and coding prompt', area: 'AI output', status: 'Next' },
];

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-[#f4f8f7] text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-border bg-[#10211f] text-white lg:flex lg:flex-col">
          <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-300 text-teal-950">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold">PlanAI</p>
              <p className="text-xs text-teal-100/70">Project Workspace</p>
            </div>
          </div>

          <nav className="grid gap-1 px-3 py-5" aria-label="Project navigation">
            {workspaceNav.map(({ label, icon: Icon, active, href }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-white text-[#10211f]'
                    : 'text-teal-50/74 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 p-4">
            <Button
              variant="outline"
              className="w-full rounded-md border-white/15 bg-white/10 text-white hover:bg-white/15"
              render={<Link href="/dashboard" />}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Dashboard
            </Button>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-20 flex min-h-20 items-center justify-between gap-4 border-b border-border bg-white/88 px-5 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <Link
                href="/projects/plan"
                className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Product Plan
              </Link>
              <h1 className="truncate text-2xl font-semibold tracking-normal">
                AI Study Planner
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="hidden h-7 bg-teal-700 px-3 text-sm text-white sm:inline-flex">
                Development Ready
              </Badge>
              <Button variant="outline" size="icon-lg" className="rounded-md bg-white" aria-label="More actions">
                <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button className="rounded-md" render={<Link href="/projects/tasks" />}>
                <ListChecks className="h-4 w-4" aria-hidden="true" />
                Create Development Tasks
              </Button>
            </div>
          </header>

          <div className="grid gap-6 p-5 sm:p-8">
            <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
              <article className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <Badge variant="outline" className="bg-teal-50 text-teal-800">
                      SaaS Web Application
                    </Badge>
                    <h2 className="mt-4 text-3xl font-semibold tracking-normal">
                      Development-ready product context
                    </h2>
                    <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                      A complete PlanAI workspace for turning the idea into a
                      living PRD, feature plan, MVP scope, roadmap, development
                      tasks, and AI coding prompt.
                    </p>
                  </div>
                  <div className="min-w-56 rounded-md border border-teal-700/15 bg-teal-50 p-4">
                    <Progress value={100}>
                      <ProgressLabel>Plan readiness</ProgressLabel>
                      <ProgressValue>100%</ProgressValue>
                    </Progress>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {readinessItems.map((item) => (
                    <li key={item} className="flex gap-3 rounded-md border border-border bg-background p-4 text-sm leading-6">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-border bg-[#112320] p-5 text-white shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-teal-100/75">
                      AI build context
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">Ready for coding</h2>
                  </div>
                  <Braces className="h-8 w-8 text-teal-300" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-teal-50/82">
                  Use the prompt below to brief an AI coding tool with the product
                  goal, stack, MVP scope, and development tasks.
                </p>
                <div className="mt-5 rounded-md bg-white/10 p-4 text-sm leading-7 text-teal-50/82">
                  Build a PlanAI-style MVP with authenticated projects, idea
                  intake, AI interview answers, generated PRD, roadmap, tasks,
                  and coding prompt export.
                </div>
              </article>
            </section>

            <section className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <Tabs defaultValue="prd" className="gap-6">
                <TabsList className="grid h-auto w-full grid-cols-2 rounded-md bg-muted p-1 md:grid-cols-5">
                  <TabsTrigger value="prd" className="rounded-sm py-2 text-sm">
                    PRD
                  </TabsTrigger>
                  <TabsTrigger value="features" className="rounded-sm py-2 text-sm">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="roadmap" className="rounded-sm py-2 text-sm">
                    Roadmap
                  </TabsTrigger>
                  <TabsTrigger value="tasks" className="rounded-sm py-2 text-sm">
                    Tasks
                  </TabsTrigger>
                  <TabsTrigger value="prompt" className="rounded-sm py-2 text-sm">
                    Prompt
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="prd">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      ['Problem', 'Students need a repeatable way to turn study goals into focused weekly plans.'],
                      ['Target user', 'Students who need structure, reminders, and AI-assisted planning.'],
                      ['Value proposition', 'Turn learning goals into a clear study roadmap and action plan.'],
                      ['Differentiator', 'Development-oriented output that stays close to the build workflow.'],
                    ].map(([title, body]) => (
                      <article key={title} className="rounded-md border border-border bg-background p-4">
                        <h3 className="text-base font-semibold">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {body}
                        </p>
                      </article>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      'Project creation and idea intake',
                      'AI interview question flow',
                      'Generated living PRD',
                      'MVP and roadmap planning',
                      'Development task generation',
                      'AI coding prompt export',
                    ].map((feature) => (
                      <p key={feature} className="flex gap-3 rounded-md border border-border bg-background p-4 text-sm leading-6">
                        <ClipboardList className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                        {feature}
                      </p>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="roadmap">
                  <div className="grid gap-3">
                    {roadmapItems.map((item) => (
                      <article key={item.phase} className="grid gap-3 rounded-md border border-border bg-background p-4 md:grid-cols-[140px_1fr]">
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-teal-700" aria-hidden="true" />
                          <h3 className="font-semibold">{item.phase}</h3>
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {item.focus}
                        </p>
                      </article>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tasks">
                  <ol className="grid gap-3">
                    {tasks.map((task, index) => (
                      <li key={task.title} className="grid gap-3 rounded-md border border-border bg-background p-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#112320] text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{task.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {task.area}
                          </p>
                        </div>
                        <Badge variant="outline" className="w-fit bg-white">
                          {task.status}
                        </Badge>
                      </li>
                    ))}
                  </ol>
                </TabsContent>

                <TabsContent value="prompt">
                  <div className="rounded-md border border-[#112320]/12 bg-[#112320] p-5 text-white">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-teal-300" aria-hidden="true" />
                      <h2 className="text-xl font-semibold">Final coding prompt</h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-teal-50/82">
                      Build the PlanAI project workspace for a SaaS web
                      application using Next.js, TypeScript, Tailwind CSS,
                      shadcn/ui, Supabase Auth, and Supabase PostgreSQL. Include
                      authenticated project creation, idea intake, AI interview,
                      generated PRD sections, feature breakdown, MVP scope,
                      roadmap, development tasks, and exportable coding prompt.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {[
                { icon: FileText, label: 'Living PRD', value: 'Ready' },
                { icon: Target, label: 'MVP scope', value: 'Locked' },
                { icon: Bot, label: 'AI prompt', value: 'Exportable' },
              ].map(({ icon: Icon, label, value }) => (
                <article key={label} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                    <Badge variant="outline" className="bg-background">
                      {value}
                    </Badge>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{label}</h2>
                </article>
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
