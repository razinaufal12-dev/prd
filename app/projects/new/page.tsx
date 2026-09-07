import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  Lightbulb,
  MessageSquareText,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

export const metadata: Metadata = {
  title: 'Create New Project - PlanAI',
  description:
    'Describe a raw software idea and prepare it for the PlanAI interview, PRD, MVP scope, roadmap, tasks, and coding prompt flow.',
};

const steps = [
  { label: 'Describe idea', active: true },
  { label: 'AI interview' },
  { label: 'Product plan' },
  { label: 'PRD' },
  { label: 'MVP & roadmap' },
  { label: 'Tasks & prompt' },
];

const ideaPrompts = [
  'What problem does this product solve?',
  'Who needs it most?',
  'What should the first useful version include?',
  'What should stay out of the MVP?',
];

const nextOutputs = [
  {
    icon: MessageSquareText,
    title: 'AI Interview',
    body: 'PlanAI asks follow-up questions based on the idea context.',
  },
  {
    icon: FileText,
    title: 'Living PRD',
    body: 'Answers become a structured product requirements document.',
  },
  {
    icon: Rocket,
    title: 'Development Ready',
    body: 'The final plan turns into roadmap, tasks, and AI coding prompt.',
  },
];

function FormField({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {children}
      {helper ? <p className="text-sm leading-6 text-muted-foreground">{helper}</p> : null}
    </div>
  );
}

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f7] text-foreground">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-lg border border-border bg-[#10211f] p-5 text-white lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <Link href="/dashboard" className="flex items-center gap-3" aria-label="Back to dashboard">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-300 text-teal-950">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold">PlanAI</p>
              <p className="text-xs text-teal-100/70">Create New Project</p>
            </div>
          </Link>

          <ol className="mt-8 grid gap-2">
            {steps.map((step, index) => (
              <li
                key={step.label}
                className={`grid grid-cols-[auto_1fr] gap-3 rounded-md p-3 ${
                  step.active ? 'bg-white text-[#10211f]' : 'text-teal-50/75'
                }`}
              >
                <span
                  className={`grid h-7 w-7 place-items-center rounded-md text-xs font-bold ${
                    step.active
                      ? 'bg-teal-300 text-teal-950'
                      : 'bg-white/10 text-teal-50'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="self-center text-sm font-semibold">{step.label}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-md bg-white/10 p-4">
            <p className="text-sm font-semibold text-teal-100">MVP focus</p>
            <p className="mt-2 text-sm leading-6 text-teal-50/75">
              Idea to Interview to PRD to Features to MVP to Roadmap to Tasks
              to Coding Prompt.
            </p>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="mb-6 flex flex-col justify-between gap-4 rounded-lg border border-border bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div>
              <Link
                href="/dashboard"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Dashboard
              </Link>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Describe your idea
              </h1>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                Start with a raw app or software idea. PlanAI will use this
                context to run the AI interview and generate a build-ready plan.
              </p>
            </div>
            <Badge className="h-7 bg-teal-700 px-3 text-sm text-white">
              Step 1 of 6
            </Badge>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <form action="/dashboard" className="rounded-lg border border-border bg-white p-5 shadow-sm sm:p-7">
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField label="Project name">
                    <Input
                      placeholder="Example: AI Study Planner"
                      className="h-12 rounded-md bg-white px-4 text-base md:text-base"
                    />
                  </FormField>

                  <FormField label="Product type">
                    <NativeSelect className="w-full" defaultValue="saas-web-application">
                      <NativeSelectOption value="saas-web-application">
                        SaaS Web Application
                      </NativeSelectOption>
                      <NativeSelectOption value="mobile-app">Mobile App</NativeSelectOption>
                      <NativeSelectOption value="internal-tool">Internal Tool</NativeSelectOption>
                      <NativeSelectOption value="marketplace">Marketplace</NativeSelectOption>
                      <NativeSelectOption value="ai-tool">AI Tool</NativeSelectOption>
                    </NativeSelect>
                  </FormField>
                </div>

                <FormField
                  label="Describe the idea"
                  helper="Write it naturally. One paragraph is enough, but include the user, problem, and desired outcome if you can."
                >
                  <Textarea
                    placeholder="I want to build a web app that helps..."
                    className="min-h-44 rounded-md bg-white p-4 text-base leading-7 md:text-base"
                  />
                </FormField>

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Primary target user"
                    helper="Pick the user PlanAI should prioritize during the interview."
                  >
                    <NativeSelect className="w-full" defaultValue="solo-developer">
                      <NativeSelectOption value="solo-developer">
                        Solo Developer
                      </NativeSelectOption>
                      <NativeSelectOption value="indie-hacker">
                        Indie Hacker
                      </NativeSelectOption>
                      <NativeSelectOption value="ai-assisted-developer">
                        AI-Assisted Developer
                      </NativeSelectOption>
                      <NativeSelectOption value="startup-founder">
                        Startup Founder
                      </NativeSelectOption>
                      <NativeSelectOption value="product-manager">
                        Product Manager
                      </NativeSelectOption>
                      <NativeSelectOption value="non-technical-founder">
                        Non-technical Founder
                      </NativeSelectOption>
                    </NativeSelect>
                  </FormField>

                  <FormField
                    label="Planning goal"
                    helper="Choose the output you want PlanAI to optimize first."
                  >
                    <NativeSelect className="w-full" defaultValue="development-ready">
                      <NativeSelectOption value="development-ready">
                        Development-ready specification
                      </NativeSelectOption>
                      <NativeSelectOption value="mvp-scope">MVP scope</NativeSelectOption>
                      <NativeSelectOption value="prd">PRD</NativeSelectOption>
                      <NativeSelectOption value="roadmap">Roadmap</NativeSelectOption>
                      <NativeSelectOption value="coding-prompt">
                        AI coding prompt
                      </NativeSelectOption>
                    </NativeSelect>
                  </FormField>
                </div>

                <FormField
                  label="What should the MVP avoid?"
                  helper="This helps PlanAI keep the first version focused and buildable."
                >
                  <Input
                    placeholder="Example: payments, team permissions, complex analytics"
                    className="h-12 rounded-md bg-white px-4 text-base md:text-base"
                  />
                </FormField>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
                <Button variant="outline" size="lg" className="rounded-md bg-white" render={<Link href="/dashboard" />}>
                  Save as draft
                </Button>
                <Button type="submit" size="lg" className="rounded-md">
                  Continue to AI Interview
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>

            <div className="grid gap-4">
              <section className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-50 text-teal-700">
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold">Good idea context</h2>
                </div>
                <ul className="mt-5 grid gap-3">
                  {ideaPrompts.map((prompt) => (
                    <li key={prompt} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-none text-teal-700"
                        aria-hidden="true"
                      />
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-lg border border-border bg-[#112320] p-5 text-white shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-teal-100/75">
                      Next step
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">AI Interview</h2>
                  </div>
                  <Bot className="h-7 w-7 text-teal-300" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-6 text-teal-50/80">
                  After this, PlanAI asks targeted questions to clarify product
                  context before generating the product plan.
                </p>
              </section>

              <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-amber-950">
                    What PlanAI prepares
                  </h2>
                </div>
                <div className="mt-5 grid gap-3">
                  {nextOutputs.map(({ icon: Icon, title, body }) => (
                    <article key={title} className="grid grid-cols-[auto_1fr] gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 text-amber-700"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-amber-950">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-amber-950/75">
                          {body}
                        </p>
                      </div>
                    </article>
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
