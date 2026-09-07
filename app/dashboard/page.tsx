import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Code2,
  FileText,
  Flag,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Map,
  MessageSquareText,
  Plus,
  Rocket,
  Search,
  Settings,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'Dashboard - PlanAI',
  description:
    'PlanAI dashboard for tracking product ideas, AI interviews, PRDs, MVP scope, roadmaps, tasks, and coding prompts.',
};

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Projects', icon: ClipboardList },
  { label: 'AI Interview', icon: MessageSquareText },
  { label: 'PRD', icon: FileText },
  { label: 'Roadmap', icon: Map },
  { label: 'Tasks', icon: ListChecks },
  { label: 'Coding Prompt', icon: Code2 },
];

const pipeline = [
  { label: 'Idea', status: 'Done', icon: Sparkles },
  { label: 'Interview', status: 'Done', icon: MessageSquareText },
  { label: 'PRD', status: 'Review', icon: FileText },
  { label: 'Features', status: 'Ready', icon: ClipboardList },
  { label: 'MVP', status: 'Ready', icon: Target },
  { label: 'Roadmap', status: 'Next', icon: Map },
  { label: 'Tasks', status: 'Next', icon: ListChecks },
  { label: 'Prompt', status: 'Queued', icon: Code2 },
];

const projects = [
  {
    name: 'AI Study Planner',
    owner: 'Solo developer',
    stage: 'Development Ready',
    progress: '100%',
    updated: 'Today',
  },
  {
    name: 'Freelancer CRM',
    owner: 'Indie hacker',
    stage: 'Roadmap',
    progress: '76%',
    updated: 'Yesterday',
  },
  {
    name: 'Founder Pitch Helper',
    owner: 'Non-technical founder',
    stage: 'AI Interview',
    progress: '34%',
    updated: '2 days ago',
  },
];

const tasks = [
  'Create Supabase schema for projects and product plans',
  'Build protected project workspace after auth',
  'Generate PRD from interview answers',
  'Export coding prompt for AI-assisted development',
];

const prdSections = [
  'Problem and target user',
  'Main value proposition',
  'Core differentiators',
  'MVP scope',
  'Development tasks',
];

export const dynamic = 'force-static';

export default function DashboardPage() {
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
              <p className="text-xs text-teal-100/70">Product OS Draft MVP</p>
            </div>
          </div>

          <nav className="grid gap-1 px-3 py-5" aria-label="Dashboard navigation">
            {navItems.map(({ label, icon: Icon, active }) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-white text-[#10211f]'
                    : 'text-teal-50/74 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 p-4">
            <div className="rounded-md bg-white/10 p-4">
              <p className="text-sm font-semibold text-teal-100">
                North Star Metric
              </p>
              <p className="mt-2 text-2xl font-semibold">14 projects</p>
              <p className="mt-1 text-xs leading-5 text-teal-50/70">
                reached Development Ready state this month.
              </p>
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-20 flex min-h-20 items-center justify-between gap-4 border-b border-border bg-white/88 px-5 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-muted-foreground">
                Workspace
              </p>
              <h1 className="truncate text-2xl font-semibold tracking-normal">
                Product Planning Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="lg" className="hidden rounded-md bg-white sm:inline-flex">
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </Button>
              <Button variant="outline" size="icon-lg" className="rounded-md bg-white" aria-label="Settings">
                <Settings className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button size="lg" className="rounded-md" render={<Link href="projects/new" />}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Create New Project
              </Button>
            </div>
          </header>

          <div className="grid gap-6 p-5 sm:p-8">
            <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div>
                    <Badge className="bg-teal-700 text-white">Active project</Badge>
                    <h2 className="mt-4 text-3xl font-semibold tracking-normal">
                      AI Study Planner
                    </h2>
                    <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                      Mobile SaaS for students who need a structured study plan,
                      reminders, and an AI-assisted weekly learning roadmap.
                    </p>
                  </div>
                  <div className="grid min-w-48 gap-2 rounded-md border border-teal-700/15 bg-teal-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-900">
                      <Gauge className="h-4 w-4" aria-hidden="true" />
                      Development readiness
                    </div>
                    <Progress value={82}>
                      <ProgressLabel>Plan complete</ProgressLabel>
                      <ProgressValue>82%</ProgressValue>
                    </Progress>
                  </div>
                </div>

                <ol className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                  {pipeline.map(({ label, status, icon: Icon }) => (
                    <li
                      key={label}
                      className="rounded-md border border-border bg-background p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                        <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-muted-foreground">
                          {status}
                        </span>
                      </div>
                      <p className="mt-4 text-base font-semibold">{label}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-lg border border-border bg-[#112320] p-5 text-white shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-teal-100/78">
                      AI Interview
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      Clarify the next product decision
                    </h2>
                  </div>
                  <Bot className="h-8 w-8 text-teal-300" aria-hidden="true" />
                </div>
                <div className="mt-5 rounded-md bg-white/10 p-4">
                  <p className="text-sm leading-6 text-teal-50/82">
                    Which user segment has the strongest pain, and what must the
                    first useful version solve without extra features?
                  </p>
                </div>
                <Textarea
                  placeholder="Write the answer that should refine the PRD..."
                  className="mt-4 min-h-28 rounded-md border-white/14 bg-white/8 text-white placeholder:text-teal-50/45"
                />
                <Button className="mt-4 w-full rounded-md bg-teal-300 text-teal-950 hover:bg-teal-200">
                  Update product context
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Active projects', value: '12', icon: ClipboardList },
                { label: 'Development ready', value: '4', icon: Rocket },
                { label: 'Living PRDs', value: '9', icon: FileText },
                { label: 'Coding prompts', value: '27', icon: Code2 },
              ].map(({ label, value, icon: Icon }) => (
                <article
                  key={label}
                  className="rounded-lg border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-muted-foreground">
                      {label}
                    </p>
                    <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-3xl font-semibold">{value}</p>
                </article>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">Projects</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Track every idea toward Development Ready.
                    </p>
                  </div>
                  <Button variant="outline" className="rounded-md bg-white">
                    View all
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Owner type</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.name}>
                        <TableCell className="font-semibold">{project.name}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {project.owner}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              project.stage === 'Development Ready'
                                ? 'border-teal-700/25 bg-teal-50 text-teal-800'
                                : 'bg-background'
                            }
                          >
                            {project.stage}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">
                          {project.progress}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {project.updated}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="grid gap-4">
                <article className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold">PRD outline</h2>
                    <FileText className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  </div>
                  <ul className="mt-4 grid gap-3">
                    {prdSections.map((section) => (
                      <li key={section} className="flex items-center gap-3 text-sm">
                        <CheckCircle2
                          className="h-5 w-5 flex-none text-teal-700"
                          aria-hidden="true"
                        />
                        <span>{section}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Flag className="h-5 w-5 text-amber-700" aria-hidden="true" />
                    <h2 className="text-xl font-semibold text-amber-950">
                      MVP scope
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-amber-950/78">
                    Keep the first version focused on Idea, Interview, PRD,
                    Features, MVP, Roadmap, Tasks, and Coding Prompt.
                  </p>
                </article>
              </div>
            </section>

            <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-semibold">Development tasks</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tasks generated from the current product context.
                  </p>
                </div>
                <Button className="rounded-md">
                  Generate coding prompt
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <ol className="grid gap-3 md:grid-cols-2">
                {tasks.map((task, index) => (
                  <li
                    key={task}
                    className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-border bg-background p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-[#112320] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="self-center text-sm font-medium leading-6">{task}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
