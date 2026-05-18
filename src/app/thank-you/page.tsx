import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "402-509-8890";
const phoneHref = "tel:402-509-8890";

export const metadata: Metadata = {
  title: "Thank You For Your Request",
  description: "Thank you for requesting a bed bug heat treatment estimate from Midwest Bed Bug Services Nebraska.",
};

const nextSteps = [
  {
    title: "We will reach out shortly",
    text: "We will call you to give you a free estimate and answer your first questions.",
  },
  {
    title: "Schedule an appointment for treatment",
    text: "We are normally able to get you on the schedule within a few days to get rid of your bed bug issue.",
  },
  {
    title: "Review the pre-treatment checklist",
    text: "Look over the checklist now so you know what to move before the heat treatment.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(127,29,29,0.12),transparent_34%),linear-gradient(180deg,#fff,#fafafa)]">
      <header className="border-b border-black/10 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Midwest Bed Bug Services Nebraska home">
            <Image src="/assets/mwbbs-logo.png" alt="Midwest Bed Bug Services" width={1432} height={240} priority className="h-11 w-auto" />
          </Link>
          <a href={phoneHref} className="rounded-md bg-[#171717] px-4 py-2 text-sm font-semibold text-white">
            Call {phoneDisplay}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#7f1d1d]">Estimate request received</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-2.4px] sm:text-6xl">
          Thank you for your request.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d4d4d]">
          Here is what you can expect next. If you need help right away, call us now at <a href={phoneHref} className="font-semibold text-[#171717] underline">{phoneDisplay}</a>.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {nextSteps.map((step, index) => (
            <div key={step.title} className="shadow-border rounded-xl bg-white p-6">
              <p className="font-mono text-xs font-medium text-[#7f1d1d]">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.96px]">{step.title}</h2>
              <p className="mt-3 leading-7 text-[#4d4d4d]">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="shadow-border mt-8 rounded-xl bg-[#171717] p-6 text-white sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-white/60">In the meantime</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-1.28px]">Look over our pre-treatment checklist.</h2>
            <p className="mt-3 max-w-2xl text-white/70">It covers the simple items to move before heat treatment, including candles, aerosols, prescriptions, plants and animals.</p>
          </div>
          <a href="/downloads/mwbbs_heat_treatment_prep.pdf" target="_blank" className="mt-6 inline-flex rounded-md bg-white px-5 py-3 font-semibold text-[#171717] md:mt-0">
            Download checklist
          </a>
        </div>
      </section>
    </main>
  );
}
