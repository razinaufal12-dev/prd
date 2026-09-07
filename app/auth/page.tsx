import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CheckCircle2,
  ClipboardList,
  LockKeyhole,
  Mail,
  MessageSquareText,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const workflow = ['Idea', 'AI Interview', 'PRD', 'MVP', 'Roadmap', 'Tasks'];

const accountBenefits = [
  'Simpan setiap ide sebagai project PlanAI.',
  'Lanjutkan AI interview tanpa kehilangan konteks.',
  'Bawa PRD, feature list, MVP scope, dan coding prompt dalam satu workspace.',
];

export const dynamic = 'force-static';

function AuthField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
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
        className="h-12 rounded-md bg-white px-4 text-base shadow-none md:text-base"
      />
    </div>
  );
}

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f8faf9_0%,#eef7f4_46%,#fff8eb_100%)]" />

        <div className="mx-auto grid min-h-screen max-w-7xl gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[1fr_480px] lg:px-10">
          <div className="flex min-h-[48vh] flex-col">
            <header className="flex items-center justify-between gap-4">
              <Link href="./" className="flex items-center gap-3" aria-label="PlanAI home">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-foreground text-background">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-lg font-semibold">PlanAI</span>
              </Link>
              <Link
                href="./"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Landing
              </Link>
            </header>

            <div className="flex flex-1 flex-col justify-center py-12 lg:py-16">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-700/20 bg-white/80 px-3 py-1 text-sm font-semibold text-teal-800 shadow-sm backdrop-blur">
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                Sign up / Login
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-normal text-balance sm:text-6xl">
                Keep your product plan alive from idea to build.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Akun PlanAI menjadi tempat kerja untuk menyimpan project,
                melanjutkan interview, dan menghasilkan spesifikasi yang siap
                dipakai dalam workflow AI coding.
              </p>

              <ol className="mt-8 grid gap-2 sm:grid-cols-3">
                {workflow.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-md border border-border bg-white/72 p-3 shadow-sm backdrop-blur"
                  >
                    <span className="text-xs font-bold text-teal-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-1 text-sm font-semibold">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex items-center pb-8 lg:pb-0">
            <div className="w-full rounded-lg border border-border bg-white p-5 shadow-2xl shadow-teal-950/10 sm:p-7">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase text-teal-700">
                    PlanAI workspace
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-normal">
                    Access your projects
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Masuk untuk membuat project baru atau melanjutkan plan yang
                    sudah sampai tahap Development Ready.
                  </p>
                </div>
                <span className="grid h-12 w-12 flex-none place-items-center rounded-md bg-[#112320] text-teal-200">
                  <Braces className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>

              <Tabs defaultValue="signup" className="gap-6">
                <TabsList className="grid h-12 w-full grid-cols-2 rounded-md bg-muted p-1">
                  <TabsTrigger value="signup" className="rounded-sm text-base">
                    Sign up
                  </TabsTrigger>
                  <TabsTrigger value="login" className="rounded-sm text-base">
                    Login
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                  <form action="dashboard" className="grid gap-5">
                    <AuthField
                      id="signup-name"
                      label="Name"
                      type="text"
                      placeholder="Your name"
                    />
                    <AuthField
                      id="signup-email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <AuthField
                      id="signup-password"
                      label="Password"
                      type="password"
                      placeholder="Create a password"
                    />
                    <Button type="submit" size="lg" className="h-12 rounded-md text-base">
                      Create workspace
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="login">
                  <form action="dashboard" className="grid gap-5">
                    <AuthField
                      id="login-email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                    />
                    <AuthField
                      id="login-password"
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <div className="flex items-center justify-between gap-4">
                      <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Checkbox className="bg-white" />
                        Remember me
                      </label>
                      <button
                        type="button"
                        className="text-sm font-semibold text-teal-700 transition hover:text-teal-900"
                      >
                        Reset password
                      </button>
                    </div>
                    <Button type="submit" size="lg" className="h-12 rounded-md text-base">
                      Continue planning
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 border-t border-border pt-6">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-md bg-white text-base"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Continue with magic link
                </Button>
              </div>

              <ul className="mt-7 grid gap-3 rounded-md border border-teal-700/15 bg-teal-50/70 p-4">
                {accountBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-teal-950">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-none text-teal-700"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-[auto_1fr] gap-3 rounded-md border border-amber-200 bg-amber-50 p-4">
                <ClipboardList
                  className="mt-0.5 h-5 w-5 text-amber-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-amber-950/80">
                  Setelah login, project pertama dimulai dari AI interview agar
                  PRD dan coding prompt punya konteks yang cukup.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3 text-xs leading-5 text-muted-foreground">
                <MessageSquareText className="h-4 w-4 flex-none" aria-hidden="true" />
                <span>
                  UI ini siap disambungkan ke Supabase Auth sesuai stack MVP PlanAI.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
