import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "402-509-8890";
const phoneHref = "tel:402-509-8890";
const financeUrl = "https://americanfirstfinance.com/app/?dealer=8450&loc=1&src=UA";

const proofPoints = [
  "20+ years bed bug experience",
  "90 day warranty",
  "Discreet service",
  "Fast scheduling",
];

const prepItems = [
  "Remove candles and waxes",
  "Remove aerosol products",
  "Remove prescription medications",
  "Remove live plants and animals",
];

const donts = [
  "Do not panic",
  "Do not start throwing things away",
  "Do not spray retail chemicals",
  "Call before the problem spreads",
];

const steps = [
  {
    label: "01",
    title: "Call or request an estimate",
    text: "Tell us what you are seeing. We will help you understand the next step and give you a clear estimate.",
  },
  {
    label: "02",
    title: "Prepare with a simple checklist",
    text: "The prep is straightforward. Download the checklist and remove heat-sensitive items before treatment.",
  },
  {
    label: "03",
    title: "One-day heat treatment",
    text: "We pressurize the home with controlled heat so bed bugs and eggs are exposed where they hide.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-[rgba(0,0,0,0.08)_0_1px_0]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Midwest Bed Bug Services Nebraska home">
          <Image
            src="/assets/mwbbs-logo.png"
            alt="Midwest Bed Bug Services"
            width={1432}
            height={240}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#4d4d4d] md:flex">
          <a href="#process" className="hover:text-[#171717]">Process</a>
          <a href="#prep" className="hover:text-[#171717]">Prep</a>
          <a href="#estimate" className="hover:text-[#171717]">Estimate</a>
        </nav>
        <a
          href={phoneHref}
          className="focus-ring rounded-md bg-[#171717] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3a3a3a]"
        >
          Call {phoneDisplay}
        </a>
      </div>
    </header>
  );
}

function EstimateForm() {
  return (
    <form action="https://formspree.io/f/meeqrnww" method="post" className="shadow-border rounded-xl bg-white p-5 sm:p-6">
      <input type="hidden" name="_subject" value="New Nebraska bed bug estimate request" />
      <input type="hidden" name="_next" value="https://bedbugsne.com/thank-you" />
      <input type="hidden" name="source" value="bedbugsne.com landing page" />
      <div className="mb-5">
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#7f1d1d]">Request an estimate</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.96px]">We will contact you quickly.</h2>
        <p className="mt-2 text-sm leading-6 text-[#4d4d4d]">
          Fill out the form below and we will contact you quickly.
        </p>
      </div>
      <div className="grid gap-3">
        <label className="grid gap-1 text-sm font-medium">
          Name
          <input required name="name" autoComplete="name" className="rounded-md px-3 py-3 text-base" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Phone
          <input required name="phone" type="tel" autoComplete="tel" className="rounded-md px-3 py-3 text-base" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Email
          <input name="email" type="email" autoComplete="email" className="rounded-md px-3 py-3 text-base" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Tell me a little bit about what you have going on.
          <textarea name="message" maxLength={350} rows={4} className="resize-none rounded-md px-3 py-3 text-base" />
          <span className="text-xs text-[#666]">Up to 350 characters</span>
        </label>
      </div>
      <button className="focus-ring mt-5 w-full rounded-md bg-[#7f1d1d] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#450a0a]">
        Request Estimate
      </button>
      <p className="mt-4 text-center text-sm text-[#4d4d4d]">
        Prefer to talk now? <a className="font-semibold text-[#171717] underline" href={phoneHref}>{phoneDisplay}</a>
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden border-b border-black/10 bg-[radial-gradient(circle_at_top_left,rgba(127,29,29,0.12),transparent_34%),linear-gradient(180deg,#fff,#fafafa)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full bg-[#fef2f2] px-3 py-1 text-sm font-medium text-[#7f1d1d] shadow-[rgba(127,29,29,0.18)_0_0_0_1px]">
              Omaha, Lincoln, Council Bluffs and surrounding areas
            </div>
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#7f1d1d]">We can help</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-2.4px] text-[#171717] sm:text-6xl lg:text-7xl lg:tracking-[-2.88px]">
              Bed bug heat treatment that wipes them out in one day.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d4d4d] sm:text-xl">
              Midwest Bed Bug Services uses pressurized heat to treat the whole home. We raise every square inch above the bed bug killing temperature, then hold it long enough to reach walls, furniture, baseboards and hiding spots.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="focus-ring rounded-md bg-[#171717] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#3a3a3a]">
                Call for estimate
              </a>
              <a href="#estimate" className="focus-ring rounded-md bg-white px-6 py-3 text-center font-semibold text-[#171717] shadow-[rgb(235,235,235)_0_0_0_1px] transition hover:bg-[#fafafa]">
                Request an estimate
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-medium text-[#333]">
                  <span className="h-2 w-2 rounded-full bg-[#7f1d1d]" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="shadow-border overflow-hidden rounded-xl bg-white p-2">
              <div className="aspect-video overflow-hidden rounded-lg bg-black">
                <iframe
                  title="Watch how Midwest Bed Bug Services wipes out bed bugs in one day"
                  src="https://www.youtube.com/embed/Z9VWux2U-eI?rel=0&modestbranding=1&controls=1"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="/downloads/mwbbs_heat_treatment_prep.pdf" className="shadow-border focus-ring rounded-xl bg-white p-4 transition hover:-translate-y-0.5" target="_blank">
                <p className="font-semibold">Pre-treatment checklist</p>
                <p className="mt-2 text-sm leading-5 text-[#4d4d4d]">Download the prep list.</p>
              </a>
              <a href={financeUrl} className="shadow-border focus-ring rounded-xl bg-white p-4 transition hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                <p className="font-semibold">All credit welcome financing</p>
                <p className="mt-2 text-sm leading-5 text-[#4d4d4d]">Apply with American First Finance.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#7f1d1d]">The Midwest way</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-2.4px] sm:text-5xl">Our treatment process</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d4d4d]">
              We use a 1.2 million BTU heater that ducts 140 to 160 degree heat into your home or apartment. Once the coldest area reaches 122 degrees, we maintain that temperature for at least 3 hours.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#4d4d4d]">
              Our system pressurizes your house with heat and forces it through walls, furniture, behind baseboards and into cracks where bed bugs hide. At 122 degrees, bed bugs and their eggs die in less than a minute.
            </p>
          </div>
          <div className="shadow-border overflow-hidden rounded-xl bg-white p-3">
            <Image
              src="/assets/heat-treatment-diagram.jpg"
              alt="Heat treatment diagram showing pressurized bed bug heat process"
              width={1000}
              height={746}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="shadow-border rounded-xl bg-white p-6">
                <p className="font-mono text-xs font-medium text-[#7f1d1d]">{step.label}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.96px]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#4d4d4d]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prep" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="shadow-border rounded-xl bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-1.28px]">Easy prep</h2>
            <p className="mt-4 leading-7 text-[#4d4d4d]">
              Controlled heat lets us treat your home without damaging electronics, pictures and many other items that can be harmed by uncontrolled equipment.
            </p>
            <ul className="mt-6 grid gap-3">
              {prepItems.map((item) => (
                <li key={item} className="flex gap-3 text-[#333]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7f1d1d]" />{item}</li>
              ))}
            </ul>
            <a href="/downloads/mwbbs_heat_treatment_prep.pdf" className="focus-ring mt-6 inline-flex rounded-md bg-[#171717] px-5 py-3 font-semibold text-white" target="_blank">
              Download pre-treatment checklist
            </a>
          </div>
          <div className="shadow-border rounded-xl bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-1.28px]">Do&apos;s and don&apos;ts</h2>
            <p className="mt-4 leading-7 text-[#4d4d4d]">
              Bed bugs are stressful. The wrong first move can spread them or make treatment harder. Start with a call before throwing away furniture or spraying chemicals.
            </p>
            <ul className="mt-6 grid gap-3">
              {donts.map((item) => (
                <li key={item} className="flex gap-3 text-[#333]"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7f1d1d]" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="estimate" className="border-t border-black/10 bg-[linear-gradient(180deg,#fff,#fafafa)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#7f1d1d]">Contact us</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-2.4px] sm:text-5xl">Get the results you need. Call us today.</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d4d4d]">
              Service area: Omaha, Lincoln, Council Bluffs and surrounding areas.
            </p>
            <div className="mt-8 rounded-xl bg-[#171717] p-6 text-white">
              <p className="text-sm uppercase tracking-wide text-white/60">Call now</p>
              <a href={phoneHref} className="mt-2 block text-4xl font-semibold tracking-[-1.28px] underline decoration-white/30 hover:decoration-white">
                {phoneDisplay}
              </a>
              <p className="mt-4 text-white/70">We don&apos;t bite.</p>
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-[#4d4d4d] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <Image src="/assets/mwbbs-logo.png" alt="Midwest Bed Bug Services" width={1432} height={240} className="h-9 w-auto" />
          <div className="flex flex-wrap gap-4">
            <a href={phoneHref} className="font-medium text-[#171717]">{phoneDisplay}</a>
            <a href="/downloads/mwbbs_heat_treatment_prep.pdf">Prep checklist</a>
            <a href={financeUrl} target="_blank" rel="noopener noreferrer">Financing</a>
          </div>
          <p>© 2026. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
