import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  ClipboardList,
  Layers3,
  Map,
  MessageSquareText,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react';
import Link from 'next/link';

const flow = [
  'Idea',
  'Interview',
  'PRD',
  'Features',
  'MVP',
  'Roadmap',
  'Tasks',
  'Coding Prompt',
];

const differentiators = [
  {
    icon: Layers3,
    title: 'Structured Product Context',
    body: 'Ide, tujuan, user, fitur, dan batasan produk disusun dalam konteks yang mudah dipakai ulang.',
  },
  {
    icon: ClipboardList,
    title: 'Living PRD',
    body: 'PRD tidak berhenti sebagai dokumen statis. Ia menjadi pusat keputusan produk yang terus bisa diperbarui.',
  },
  {
    icon: Braces,
    title: 'AI Build Context',
    body: 'Output diarahkan untuk membantu AI coding tools memahami scope, prioritas, dan langkah pembangunan.',
  },
];

const audiences = [
  'Solo Developer',
  'Indie Hacker',
  'AI-Assisted Developer',
  'Startup Founder',
  'Product Manager',
  'UI/UX Designer',
  'Freelancer',
  'Small Software Agency',
];

const outputs = [
  'Product Requirements Document',
  'Feature breakdown',
  'User stories',
  'MVP scope',
  'Roadmap',
  'Development tasks',
  'AI coding prompt',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(22,163,163,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_28%),linear-gradient(135deg,#f8faf9_0%,#eef7f4_48%,#fff7e8_100%)]" />
        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a href="#" className="flex items-center gap-3" aria-label="PlanAI home">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-foreground text-background">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold">PlanAI</span>
            </a>
            <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
              <a href="#flow" className="transition hover:text-foreground">
                Flow
              </a>
              <a href="#outputs" className="transition hover:text-foreground">
                Output
              </a>
              <a href="#audience" className="transition hover:text-foreground">
                Users
              </a>
            </nav>
            <a
              href="auth"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
            >
              Login
            </a>
          </header>

          <div className="grid flex-1 content-center gap-10 py-12 lg:py-16">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-white/72 px-3 py-1 text-sm font-semibold text-teal-800 shadow-sm backdrop-blur">
                <Bot className="h-4 w-4" aria-hidden="true" />
                AI Product Planner for development-ready specs
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-balance sm:text-6xl lg:text-7xl">
                PlanAI turns one raw software idea into an AI-ready product plan.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Dari konsep sederhana ke PRD, fitur, MVP, roadmap, development
                tasks, dan coding prompt yang siap dipakai untuk mulai membangun.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="auth"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
                >
                  Start planning
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href="#flow"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-white/70 px-6 text-base font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-white"
                >
                  See the workflow
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-white/70 bg-white/74 p-3 shadow-2xl shadow-teal-950/10 backdrop-blur-xl">
              <div className="grid gap-3 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="rounded-md border border-border bg-[#0f1f1d] p-5 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-teal-100">
                      Development Ready
                    </span>
                    <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-bold text-teal-950">
                      Draft MVP
                    </span>
                  </div>
                  <p className="text-3xl font-semibold leading-tight">
                    North Star: projects that reach build-ready state.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="rounded-md bg-white/10 p-3">
                      <strong className="block text-xl">8</strong>
                      steps
                    </div>
                    <div className="rounded-md bg-white/10 p-3">
                      <strong className="block text-xl">1</strong>
                      context
                    </div>
                    <div className="rounded-md bg-white/10 p-3">
                      <strong className="block text-xl">AI</strong>
                      ready
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 rounded-md border border-border bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        Current project
                      </p>
                      <h2 className="text-2xl font-semibold">Mobile SaaS Idea</h2>
                    </div>
                    <Rocket className="h-8 w-8 text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-4">
                    {flow.slice(0, 4).map((item, index) => (
                      <div
                        key={item}
                        className="rounded-md border border-border bg-muted/55 p-3"
                      >
                        <span className="text-xs font-semibold text-muted-foreground">
                          0{index + 1}
                        </span>
                        <p className="mt-2 text-sm font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3 md:grid-cols-[1fr_0.8fr]">
                    <div className="rounded-md border border-border p-4">
                      <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                        <MessageSquareText
                          className="h-4 w-4 text-teal-700"
                          aria-hidden="true"
                        />
                        AI interview
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        What problem does your product solve, who feels it most,
                        and what is the smallest useful version?
                      </p>
                    </div>
                    <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
                      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-900">
                        <Target className="h-4 w-4" aria-hidden="true" />
                        MVP scope
                      </p>
                      <p className="text-sm leading-6 text-amber-950/75">
                        Idea to interview, PRD, features, MVP, roadmap, tasks,
                        then coding prompt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="border-b border-border bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-teal-700">Main flow</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-balance">
              A clear route from idea to coding prompt.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {flow.map((item, index) => (
              <div
                key={item}
                className="min-h-32 rounded-lg border border-border bg-background p-5"
              >
                <span className="text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {index === 0
                    ? 'Capture the raw product concept.'
                    : index === flow.length - 1
                      ? 'Hand AI tools a focused build prompt.'
                      : 'Refine decisions into structured product context.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outputs" className="bg-[#f7fbfa] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase text-teal-700">
              Core differentiators
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-balance">
              Built for people who ship with AI, not just people who write docs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              PlanAI keeps product planning close to implementation, so every
              decision can become useful development context.
            </p>
          </div>
          <div className="grid gap-4">
            {differentiators.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="rounded-lg border border-border bg-[#112320] p-7 text-white">
            <Map className="h-7 w-7 text-teal-300" aria-hidden="true" />
            <h2 className="mt-5 text-4xl font-semibold tracking-normal">
              Everything needed before development starts.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outputs.map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2
                    className="h-5 w-5 flex-none text-teal-300"
                    aria-hidden="true"
                  />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div id="audience" className="content-center">
            <p className="text-sm font-bold uppercase text-teal-700">
              Target users
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-normal text-balance">
              For builders who need product clarity before opening the code editor.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-[#fff8eb] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase text-amber-700">
            Version 1.0 - Draft MVP
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Move from a rough app idea to a plan your AI coding workflow can use.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            PlanAI is shaping toward an AI Product Development Operating System:
            structured planning, living PRDs, and build-ready context in one place.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-md border border-border bg-white px-4 text-base outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/12"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              Request access
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
          <Link
            href="auth"
            className="mt-5 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
          >
            Already have an account? Login to PlanAI
          </Link>
        </div>
      </section>
    </main>
  );
}
