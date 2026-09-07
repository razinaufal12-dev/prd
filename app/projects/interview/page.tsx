import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  MessageSquareText,
  Send,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'AI Interview - PlanAI',
  description:
    'PlanAI AI interview for refining a raw software idea into structured product context.',
};

const steps = [
  { label: 'Describe idea', done: true },
  { label: 'AI Interview', active: true },
  { label: 'AI Analysis' },
  { label: 'Product Plan' },
  { label: 'Project Workspace' },
];

const questions = [
  'Who is the primary user and what painful workflow do they repeat today?',
  'What result should the user get after their first successful session?',
  'What features are essential for the MVP, and what can wait?',
  'Which output should be strongest for development: PRD, tasks, or coding prompt?',
];

const context = [
  'Product type: SaaS Web Application',
  'Primary users: Solo Developer, Indie Hacker, AI-Assisted Developer',
  'North Star: projects that reach Development Ready state',
  'Final output: PRD, features, MVP, roadmap, tasks, coding prompt',
];

export const dynamic = 'force-static';

export default function InterviewPage() {
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
              <p className="text-xs text-teal-100/70">AI Product Planner</p>
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
                href="new"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Describe idea
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Create AI Interview
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                PlanAI asks only the questions needed to turn a raw idea into
                structured product context for PRD, MVP, roadmap, and tasks.
              </p>
            </div>
            <Badge className="h-7 bg-teal-700 px-3 text-sm text-white">
              Step 2
            </Badge>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <form action="analysis" className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-start gap-4 rounded-lg bg-[#112320] p-5 text-white">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-teal-300 text-teal-950">
                  <Bot className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">AI interview session</h2>
                  <p className="mt-2 text-sm leading-6 text-teal-50/78">
                    Answer these prompts so PlanAI can identify product context,
                    development scope, and missing assumptions.
                  </p>
                </div>
              </div>

              <ol className="mt-6 grid gap-4">
                {questions.map((question, index) => (
                  <li key={question} className="rounded-lg border border-border bg-background p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-md bg-teal-700 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="text-base font-semibold">{question}</p>
                    </div>
                    <Textarea
                      placeholder="Write your answer here..."
                      className="min-h-24 rounded-md bg-white p-4 text-base leading-7 md:text-base"
                    />
                  </li>
                ))}
              </ol>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md bg-white"
                  render={<Link href="new" />}
                >
                  Back to idea
                </Button>
                <Button type="submit" size="lg" className="rounded-md">
                  Run AI Analysis
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>

            <div className="grid gap-4">
              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <MessageSquareText className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Interview context</h2>
                </div>
                <ul className="mt-5 grid gap-3">
                  {context.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    Keep MVP focused
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-amber-950/78">
                  The interview should separate must-have development scope from
                  later roadmap ideas.
                </p>
              </section>

              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold">Outputs this feeds</h2>
                <div className="mt-4 grid gap-3">
                  {[
                    { icon: FileText, label: 'Living PRD' },
                    { icon: ClipboardList, label: 'Feature breakdown' },
                    { icon: Code2, label: 'AI coding prompt' },
                  ].map(({ icon: Icon, label }) => (
                    <p key={label} className="flex items-center gap-3 text-sm font-semibold">
                      <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                      {label}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
