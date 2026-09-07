import Link from 'next/link';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  LockKeyhole,
  Mail,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const authBenefits = [
  'Save every product idea as a project',
  'Resume the AI interview anytime',
  'Keep PRD, MVP, roadmap, tasks, and coding prompts in one workspace',
];

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-md bg-white px-4 text-base md:text-base"
      />
    </div>
  );
}

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(22,163,163,0.2),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(135deg,#f8faf9_0%,#edf7f4_52%,#fff8eb_100%)]" />
        <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-5 py-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="flex flex-col">
            <header className="flex items-center justify-between gap-4 lg:justify-start">
              <Link href="/" className="flex items-center gap-3" aria-label="PlanAI home">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-foreground text-background">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold">PlanAI</span>
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-muted-foreground transition hover:text-foreground lg:hidden"
              >
                Back
              </Link>
            </header>

            <div className="flex flex-1 flex-col justify-center py-12">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-700/20 bg-white/75 px-3 py-1 text-sm font-semibold text-teal-800 shadow-sm backdrop-blur">
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                Supabase Auth ready
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.03] tracking-normal text-balance sm:text-6xl">
                Sign in to keep every product plan moving.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                PlanAI accounts are designed around the MVP journey: idea,
                interview, PRD, features, MVP, roadmap, tasks, and coding prompt.
              </p>

              <div className="mt-8 grid gap-3">
                {authBenefits.map((benefit) => (
                  <p key={benefit} className="flex items-start gap-3 text-base">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-none text-teal-700"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center pb-10 lg:pb-0">
            <div className="w-full rounded-lg border border-white/70 bg-white/82 p-3 shadow-2xl shadow-teal-950/10 backdrop-blur-xl">
              <div className="rounded-md border border-border bg-white p-5 sm:p-8">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase text-teal-700">
                      Product workspace
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-normal">
                      Access PlanAI
                    </h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-[#112320] text-teal-200">
                    <Braces className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                <Tabs defaultValue="signup" className="gap-6">
                  <TabsList className="grid h-11 w-full grid-cols-2 rounded-md bg-muted p-1">
                    <TabsTrigger value="signup" className="rounded-sm text-base">
                      Sign up
                    </TabsTrigger>
                    <TabsTrigger value="login" className="rounded-sm text-base">
                      Login
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="signup">
                    <form className="grid gap-5">
                      <Field
                        id="signup-name"
                        label="Name"
                        type="text"
                        placeholder="Your name"
                      />
                      <Field
                        id="signup-email"
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                      />
                      <Field
                        id="signup-password"
                        label="Password"
                        type="password"
                        placeholder="Create a password"
                      />
                      <Button type="submit" size="lg" className="h-12 rounded-md text-base">
                        Create workspace
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </Button>
                      <p className="text-center text-sm leading-6 text-muted-foreground">
                        Your first project starts with a short AI interview so the
                        plan has enough context before it generates a PRD.
                      </p>
                    </form>
                  </TabsContent>

                  <TabsContent value="login">
                    <form className="grid gap-5">
                      <Field
                        id="login-email"
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                      />
                      <Field
                        id="login-password"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                      />
                      <div className="flex items-center justify-between gap-4">
                        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-border accent-teal-700"
                          />
                          Remember me
                        </label>
                        <a
                          href="mailto:support@planai.example"
                          className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <Button type="submit" size="lg" className="h-12 rounded-md text-base">
                        Continue planning
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 grid gap-3 border-t border-border pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-md bg-white text-base"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    Continue with magic link
                  </Button>
                  <p className="text-center text-xs leading-5 text-muted-foreground">
                    Auth UI is prepared for Supabase Auth integration from the
                    PlanAI MVP stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
