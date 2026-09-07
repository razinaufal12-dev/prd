import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  Lightbulb,
  MessageSquareText,
  SearchCheck,
  Sparkles,
  Target,
  TriangleAlert,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress';

export const metadata: Metadata = {
  title: 'AI Analysis - PlanAI',
  description:
    'PlanAI analysis view for transforming interview answers into validated product context.',
};

const steps = [
  { label: 'Describe idea', done: true },
  { label: 'AI Interview', done: true },
  { label: 'AI Analysis', active: true },
  { label: 'Product Plan' },
  { label: 'Project Workspace' },
];

const analysisCards = [
  {
    icon: Users,
    title: 'Primary user',
    body: 'Solo developers and indie hackers who use AI coding tools but still need structured product context.',
  },
  {
    icon: Target,
    title: 'Core problem',
    body: 'Raw software ideas are hard to turn into PRDs, scoped MVPs, development tasks, and useful coding prompts.',
  },
  {
    icon: Lightbulb,
    title: 'Value proposition',
    body: 'Turn one idea into an AI-ready product plan that can guide development without scattered notes.',
  },
  {
    icon: TriangleAlert,
    title: 'Scope risk',
    body: 'The MVP should avoid advanced collaboration, complex analytics, and billing until the core planning flow works.',
  },
];

const readiness = [
  'Problem and target user are clear enough for PRD generation.',
  'MVP boundaries are defined before roadmap expansion.',
  'Development output is prioritized over generic documentation.',
  'AI coding prompt can inherit project context from the living PRD.',
];

export const dynamic = 'force-static';

export default function AnalysisPage() {
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
              <p className="text-xs text-teal-100/70">AI Analysis</p>
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
                href="/projects/interview"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                AI Interview
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                AI Analysis
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                PlanAI converts interview answers into product context, checks
                MVP focus, and prepares the plan for generation.
              </p>
            </div>
            <Badge className="h-7 bg-teal-700 px-3 text-sm text-white">
              Step 3
            </Badge>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <section className="grid gap-6">
              <article className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <SearchCheck className="h-6 w-6 text-teal-700" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold">Context readiness</h2>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      Analysis is ready to generate a product plan with PRD,
                      features, MVP scope, roadmap, tasks, and coding prompt.
                    </p>
                  </div>
                  <div className="min-w-56 rounded-md border border-teal-700/15 bg-teal-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-teal-900">
                      <Gauge className="h-4 w-4" aria-hidden="true" />
                      Development-ready signal
                    </div>
                    <Progress value={88}>
                      <ProgressLabel>Context quality</ProgressLabel>
                      <ProgressValue>88%</ProgressValue>
                    </Progress>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-2">
                {analysisCards.map(({ icon: Icon, title, body }) => (
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
              </div>

              <article className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-teal-700" aria-hidden="true" />
                  <h2 className="text-2xl font-semibold">Generation checklist</h2>
                </div>
                <ul className="mt-5 grid gap-3">
                  {readiness.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </section>

            <aside className="grid gap-4">
              <section className="rounded-lg border border-border bg-[#112320] p-5 text-white shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-teal-100/75">
                      AI summary
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">Build-ready direction</h2>
                  </div>
                  <Bot className="h-7 w-7 text-teal-300" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-teal-50/80">
                  Focus the MVP on the core journey: describe idea, clarify
                  context, generate plan, then open a workspace for development.
                </p>
              </section>

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    Ready to generate
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-amber-950/78">
                  Product Plan should include PRD, feature breakdown, user
                  stories, MVP scope, roadmap, development tasks, and coding
                  prompt.
                </p>
              </section>

              <Button
                size="lg"
                className="h-12 rounded-md"
                render={<Link href="/projects/plan" />}
              >
                Generate Product Plan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
