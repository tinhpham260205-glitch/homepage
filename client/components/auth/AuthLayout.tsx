import { Link } from "react-router-dom";
import EVIllustration from "@/components/auth/EVIllustration";

export default function AuthLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="container py-12 sm:py-16">
      <div className="mb-4 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-emerald-500 text-white">EV</span>
          Trang chủ
        </Link>
        <div className="text-sm text-foreground/60">EV-Rental</div>
      </div>
      <div className="grid gap-6 rounded-2xl border bg-card p-4 shadow-sm sm:grid-cols-2 sm:p-6">
        <div className="flex items-center justify-center rounded-lg bg-gradient-to-b from-emerald-50 to-teal-50 p-4 dark:from-emerald-900/10 dark:to-teal-900/10">
          <EVIllustration className="max-w-[440px]" />
        </div>
        <div className="px-2 py-4 sm:px-6">
          <h1 className="text-xl font-semibold">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-foreground/70">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
