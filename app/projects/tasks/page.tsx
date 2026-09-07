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
  KeyRound,
  LayoutDashboard,
  ListChecks,
  MessageSquareText,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Create Development Tasks - PlanAI',
  description:
    'Create development tasks from a PlanAI product plan before generating an AI coding prompt.',
};

const tasks = [
  {
    title: 'Set up authenticated project workspace',
    area: 'Auth',
    priority: 'P0',
    icon: KeyRound,
    criteria: 'User can sign up, login, and open a protected project workspace.',
  },
  {
    title: 'Create project and product plan data model',
    area: 'Data',
    priority: 'P0',
    icon: Database,
    criteria: 'Projects store idea, target user, interview answers, PRD, roadmap, tasks, and prompt.',
  },
  {
    title: 'Build idea intake and AI interview flow',
    area: 'Product flow',
    priority: 'P0',
    icon: MessageSquareText,
    criteria: 'A user can describe an idea and answer structured follow-up questions.',
  },
  {
    title: 'Generate living PRD from product context',
    area: 'PRD',
    priority: 'P1',
    icon: FileText,
    criteria: 'PlanAI creates editable PRD sections from the idea and interview answers.',
  },
  {
    title: 'Create MVP, roadmap, and task breakdown',
    area: 'Planning',
    priority: 'P1',
    icon: Target,
    criteria: 'The plan separates MVP scope from later roadmap items and produces tasks.',
  },
  {
    title: 'Generate AI coding prompt and export actions',
    area: 'AI output',
    priority: 'P1',
    icon: Code2,
    criteria: 'User can copy, export, or continue editing the generated coding prompt.',
  },
];

const contextSources = [
  'Raw idea and product type',
  'AI interview answers',
  'Structured product context',
  'Living PRD sections',
  'MVP scope and roadmap',
];

export const dynamic = 'force-static';

export default function DevelopmentTasksPage() {
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
              <p className="text-xs text-teal-100/70">Development Tasks</p>
            </div>
          </div>

          <nav className="grid gap-1 px-3 py-5" aria-label="Task flow navigation">
            {[
              { label: 'Workspace', icon: LayoutDashboard, href: '/projects/workspace' },
              { label: 'Create Development Tasks', icon: ListChecks, active: true, href: '/projects/tasks' },
              { label: 'AI Coding Prompt', icon: Code2, href: '/projects/coding-prompt' },
              { label: 'Export / Copy', icon: Braces, href: '/projects/export' },
            ].map(({ label, icon: Icon, active, href }) => (
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
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-20 flex min-h-20 items-center justify-between gap-4 border-b border-border bg-white/88 px-5 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <Link
                href="/projects/workspace"
                className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Project Workspace
              </Link>
              <h1 className="truncate text-2xl font-semibold tracking-normal">
                Create Development Tasks
              </h1>
            </div>
            <Button
              size="lg"
              className="rounded-md"
              render={<Link href="/projects/coding-prompt" />}
            >
              Generate AI Coding Prompt
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </header>

          <div className="grid gap-6 p-5 sm:p-8">
            <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
              <article className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <Badge className="bg-teal-700 text-white">Development-ready plan</Badge>
                    <h2 className="mt-4 text-3xl font-semibold tracking-normal">
                      Turn product context into build tasks.
                    </h2>
                    <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                      PlanAI converts the PRD, features, MVP scope, and roadmap
                      into concrete tasks that an AI-assisted developer can use.
                    </p>
                  </div>
                  <div className="rounded-md border border-teal-700/15 bg-teal-50 p-4">
                    <p className="text-sm font-semibold text-teal-900">Task batch</p>
                    <p className="mt-2 text-3xl font-semibold text-teal-950">6</p>
                    <p className="mt-1 text-xs text-teal-900/70">ready for prompt</p>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-border bg-[#112320] p-5 text-white shadow-sm">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-teal-300" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Task source context</h2>
                </div>
                <ul className="mt-5 grid gap-3">
                  {contextSources.map((source) => (
                    <li key={source} className="flex gap-3 text-sm leading-6 text-teal-50/82">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </section>

            <section className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-semibold">Generated development tasks</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Select the tasks that should be included in the coding prompt.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit bg-background">
                  MVP scope only
                </Badge>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">Use</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Acceptance criteria</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map(({ title, area, priority, criteria, icon: Icon }) => (
                    <TableRow key={title}>
                      <TableCell>
                        <Checkbox defaultChecked className="bg-white" />
                      </TableCell>
                      <TableCell>
                        <div className="flex min-w-56 items-center gap-3">
                          <Icon className="h-5 w-5 flex-none text-teal-700" aria-hidden="true" />
                          <span className="font-semibold">{title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{area}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-background">
                          {priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-lg whitespace-normal text-muted-foreground">
                        {criteria}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md bg-white"
                  render={<Link href="/projects/workspace" />}
                >
                  Continue editing workspace
                </Button>
                <Button
                  size="lg"
                  className="rounded-md"
                  render={<Link href="/projects/coding-prompt" />}
                >
                  Create AI Coding Prompt
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
