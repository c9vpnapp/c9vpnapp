import React, { useState } from "react";
import { Check, Zap, ShieldCheck, Globe } from "lucide-react";

// PricingPage.tsx
// Default export: React component ready to drop into a Next.js + Tailwind project
// Tailwind is expected to be configured in the host project.

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      id: "basic",
      name: "Basic",
      subtitle: "Personal VPN",
      priceMonthly: 6.99,
      priceYearly: 69, // yearly flat (saves ~17%)
      cpu: "1 vCPU",
      ram: "1 GB RAM",
      bandwidth: "1 TB / month",
      features: [
        "Dedicated IP",
        "WireGuard + OpenVPN",
        "1-click deploy",
        "Email support",
      ],
      cta: "Get Basic",
      pill: "Most affordable",
    },
    {
      id: "pro",
      name: "Pro",
      subtitle: "Power & Multi-device",
      priceMonthly: 12.99,
      priceYearly: 129,
      cpu: "2 vCPU",
      ram: "2 GB RAM",
      bandwidth: "3 TB / month",
      features: [
        "Priority support",
        "Rebuild & relocate",
        "Usage dashboard",
        "Dedicated IP",
      ],
      cta: "Get Pro",
      pill: "Popular",
    },
    {
      id: "business",
      name: "Business",
      subtitle: "Teams & Resellers",
      priceMonthly: 29.99,
      priceYearly: 299,
      cpu: "2-4 vCPU",
      ram: "4 GB RAM",
      bandwidth: "10 TB / month",
      features: [
        "Team admin panel",
        "Multi-region",
        "Usage analytics",
        "24/7 support",
      ],
      cta: "Get Business",
      pill: "For teams",
    },
  ];

  const formatPrice = (plan: any) => {
    if (billingCycle === "monthly") return `$${plan.priceMonthly.toFixed(2)}`;
    // show per-year with /yr
    return `$${plan.priceYearly.toString()} / yr`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Private VPN instances — deployed for you
              </h1>
              <p className="mt-4 text-lg opacity-95">
                Spin up a dedicated VPN server in seconds across top cloud regions. No cloud
                account required — we host and manage the infra, you connect and stay private.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 transition"
                >
                  <Zap size={18} />
                  Explore plans
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white/90 hover:opacity-95 transition"
                >
                  <ShieldCheck size={18} />
                  Why choose us
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="rounded-2xl bg-white/20 p-6 backdrop-blur-md border border-white/10">
                <div className="text-sm font-medium">Estimate</div>
                <div className="mt-3 text-3xl font-bold">$6.99</div>
                <div className="text-xs opacity-80 mt-1">per instance / month</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing cards */}
      <section id="plans" className="-mt-8 max-w-6xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-3xl -translate-y-12 p-6 md:p-10">
          <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Simple, transparent pricing</h2>
              <p className="mt-1 text-sm text-slate-600">Pick a plan and deploy a private VPN instance.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-500">Monthly</div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  role="switch"
                  checked={billingCycle === "yearly"}
                  onChange={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                  className="sr-only"
                />
                <div className="w-11 h-6 bg-slate-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 relative transition-all" />
                <span className="ml-3 text-sm font-medium text-slate-600">Yearly (save)</span>
              </label>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <article
                key={plan.id}
                className={`relative rounded-2xl border p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between ${
                  plan.id === "pro" ? "border-blue-300 ring-1 ring-blue-100" : "border-slate-100"
                }`}
              >
                {/* badge */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{plan.subtitle}</p>
                  </div>

                  <div className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700">{plan.pill}</div>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold">{formatPrice(plan)}</span>
                    <span className="text-sm text-slate-500">{billingCycle === "monthly" ? "/month" : ""}</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Check size={16} /> {plan.cpu} • {plan.ram}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} /> {plan.bandwidth}
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {plan.features.map((f: string) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check size={14} className="text-green-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href={`/signup?plan=${plan.id}&billing=${billingCycle}`}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold transition ${
                      plan.id === "pro"
                        ? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md"
                        : "border border-slate-200 bg-white text-slate-900"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <div className="mt-3 text-xs text-slate-500">Cloud costs are included — we manage the servers.</div>
                </div>
              </article>
            ))}
          </div>

          {/* footnote */}
          <div className="mt-6 text-xs text-slate-500">
            NOTE: Pricing shown includes hosting and management fees. High bandwidth regions or custom enterprise
            requests may change final pricing.
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Built for privacy — engineered for simplicity</h3>
            <p className="mt-3 text-slate-600">
              Each instance is a dedicated VPN server spun up on our cloud accounts. You get the benefits of a single
              tenant VPN (clean, private IP) while we handle uptime, rotations, and abuse mitigation.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck size={20} className="mt-1 text-green-600" />
                <div>
                  <h4 className="font-semibold">Dedicated IP & isolated instance</h4>
                  <p className="text-sm text-slate-600">No shared IPs — reduced risk of blacklisting caused by other users.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Globe size={20} className="mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Global regions</h4>
                  <p className="text-sm text-slate-600">Choose from multiple regions so latency is minimized for your use-case.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Zap size={20} className="mt-1 text-slate-700" />
                <div>
                  <h4 className="font-semibold">Fast provisioning</h4>
                  <p className="text-sm text-slate-600">From click to connected in under a minute with automated infrastructure.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-100">
            <h4 className="text-lg font-semibold">How it works</h4>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              <li>1. Choose a plan and region.</li>
              <li>2. We create a dedicated server on our cloud account.</li>
              <li>3. Receive credentials or import WireGuard config into your client.</li>
              <li>4. Manage, rebuild or relocate from your dashboard.</li>
            </ol>

            <div className="mt-6 text-xs text-slate-500">No cloud accounts, keys, or infra knowledge required.</div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-12 mb-20">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <h4 className="text-xl font-bold">Frequently asked questions</h4>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <details className="p-4 rounded-lg bg-white border">
              <summary className="font-medium">Who pays for cloud hosting?</summary>
              <p className="mt-2 text-sm text-slate-600">We do. Hosting is included in the plan price so users pay one invoice.</p>
            </details>

            <details className="p-4 rounded-lg bg-white border">
              <summary className="font-medium">Can I change region or upgrade?</summary>
              <p className="mt-2 text-sm text-slate-600">Yes — you can rebuild or relocate servers from the dashboard without data loss.</p>
            </details>

            <details className="p-4 rounded-lg bg-white border">
              <summary className="font-medium">Do you log activity?</summary>
              <p className="mt-2 text-sm text-slate-600">We collect minimal operational logs for abuse mitigation and uptime. We recommend adding
                a short privacy policy clarifying what is retained.</p>
            </details>

            <details className="p-4 rounded-lg bg-white border">
              <summary className="font-medium">Are there discounts for annual billing?</summary>
              <p className="mt-2 text-sm text-slate-600">Yes — choose yearly billing at checkout to save on the monthly price.</p>
            </details>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <a href="/signup" className="rounded-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg">
              Start your private VPN
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Your VPN Company — Built with care. Colors: green / blue / white.
        </div>
      </footer>
    </div>
  );
}
