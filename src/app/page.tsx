import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "402-509-8890";
const textDigits = "8167726925";
const phoneHref = "tel:4025098890";
const smsHref = `sms:${textDigits}?body=${encodeURIComponent(
  "Hi, I watched the bed bug heat treatment video and need help with next steps."
)}`;
const financeUrl = "https://americanfirstfinance.com/app/?dealer=8450&loc=1&src=UA";
const formspreeEndpoint = "https://formspree.io/f/meeqrnww";

const proofPoints = [
  { value: "20+", label: "Years bed bug experience" },
  { value: "6–7 hrs", label: "Typical treatment window" },
  { value: "90-day", label: "Warranty available" },
  { value: "1 day", label: "Whole-home heat treatment" },
];

const recapBullets = [
  "We heat the whole home, not just the room where bugs were found.",
  "The treatment reaches furniture, walls, baseboards, and hidden spaces.",
  "Bed bugs and eggs die when the home reaches lethal temperature.",
];

const whyCards = [
  {
    title: "No room-by-room guessing",
    body: "Bed bugs hide in more places than people expect. Whole-home heat is built to reach the full treatment area.",
  },
  {
    title: "Kills eggs too",
    body: "The goal is not just knocking down visible bugs. Proper heat reaches lethal temperatures for bed bugs and eggs.",
  },
  {
    title: "Keep most furniture",
    body: "Most customers do not need to throw belongings away. We give you clear prep steps before treatment.",
  },
  {
    title: "One-day treatment window",
    body: "Most whole-house heat treatments take about 6–7 hours once the home is prepared and ready.",
  },
];

const faqs = [
  {
    question: "Will heat kill bed bug eggs?",
    answer:
      "Yes. Properly applied professional heat reaches lethal temperatures for bed bugs and eggs. We monitor the treatment so heat reaches hiding places, not just open rooms.",
  },
  {
    question: "Do I have to throw away furniture?",
    answer:
      "Usually, no. Heat can treat many furniture items and belongings in place when the home is prepared correctly. We tell you what to remove before treatment.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Most whole-home heat treatments take about 6–7 hours. Timing depends on the home, layout, contents, and infestation conditions.",
  },
  {
    question: "What do I need to remove before treatment?",
    answer:
      "You remove heat-sensitive items such as candles, aerosols, some medications, live plants, pets, and other heat-sensitive items. Download the prep checklist before treatment.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Omaha, Lincoln, Council Bluffs, and surrounding Nebraska and western Iowa areas.",
  },
];

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-[#173456]/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Midwest Bed Bug Services Nebraska home" className="rounded-lg bg-white px-3 py-2">
          <Image
            src="/assets/mwbbs-logo.png"
            alt="Midwest Bed Bug Services"
            width={1432}
            height={240}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-blue-50 md:flex">
          <a href="#watch-video" className="hover:text-amber-300">Watch video</a>
          <a href="#why-heat" className="hover:text-amber-300">Why heat</a>
          <a href="#free-estimate" className="hover:text-amber-300">Estimate</a>
        </nav>
        <a
          href={phoneHref}
          className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
        >
          Call {phoneDisplay}
        </a>
      </div>
    </header>
  );
}

function CtaButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "outline" }) {
  const classes = {
    primary: "bg-amber-500 text-white hover:bg-amber-600",
    secondary: "bg-white text-blue-900 hover:bg-blue-50",
    outline: "border border-white/25 text-white hover:bg-white/10",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-base font-bold shadow-sm transition-colors ${classes}`}
    >
      {children}
    </a>
  );
}

function EstimateForm() {
  return (
    <form action={formspreeEndpoint} method="post" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
      <input type="hidden" name="_subject" value="New Nebraska bed bug estimate request" />
      <input type="hidden" name="_next" value="https://bedbugsne.com/thank-you" />
      <input type="hidden" name="source" value="bedbugsne.com video-first landing page" />
      <div className="mb-5 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-amber-600">Prefer a callback?</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Request a free heat treatment estimate</h2>
        <p className="mt-3 text-gray-600">Short form. We need your name and phone number first. Add details if you want.</p>
      </div>
      <div className="grid gap-3">
        <label className="grid gap-1 text-sm font-semibold text-gray-800">
          Name
          <input required name="name" autoComplete="name" className="rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-gray-800">
          Phone
          <input required name="phone" type="tel" autoComplete="tel" className="rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-gray-800">
          Email
          <input name="email" type="email" autoComplete="email" className="rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
        </label>
        <label className="grid gap-1 text-sm font-semibold text-gray-800">
          What are you seeing?
          <textarea name="message" maxLength={350} rows={4} className="resize-none rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
          <span className="text-xs text-gray-500">Up to 350 characters</span>
        </label>
      </div>
      <button className="mt-5 w-full rounded-xl bg-amber-500 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-amber-600">
        Request my free estimate
      </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Prefer to talk now? <a className="font-bold text-blue-900 underline" href={phoneHref}>{phoneDisplay}</a>
      </p>
    </form>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{children}</div>;
}

export default function Home() {
  return (
    <main className="bg-white pb-24 md:pb-0">
      <Header />

      <section className="relative overflow-hidden bg-[#173456] pt-24 text-white sm:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.24),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.16),rgba(15,23,42,0.72))]" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Nebraska bed bug heat treatment</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Watch How Whole-Home Bed Bug Heat Treatment Works</h1>
              <p className="mt-5 text-xl leading-relaxed text-blue-100">
                This short video shows how Midwest Bed Bug Services heats the entire home so bed bugs and eggs die in one treatment.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
                Omaha, Lincoln, Council Bluffs, and surrounding areas.
              </p>
              <div className="mt-6 hidden gap-3 sm:flex" data-cta-section="video-hero-desktop">
                <CtaButton href={phoneHref}>Call {phoneDisplay}</CtaButton>
                <CtaButton href={smsHref} variant="secondary">Text a question</CtaButton>
              </div>
            </div>

            <div id="watch-video" className="scroll-mt-28" data-cta-section="video-hero">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-bold uppercase tracking-wide text-amber-300">Watch this first: 2 minutes</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">Video first</span>
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    title="Bed bug heat treatment explained by Midwest Bed Bug Services"
                    src="https://www.youtube.com/embed/Z9VWux2U-eI?rel=0&modestbranding=1&controls=1"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3" data-cta-section="video-under-player">
                <CtaButton href={phoneHref}>Call now</CtaButton>
                <CtaButton href={smsHref} variant="secondary">Text a question</CtaButton>
                <CtaButton href="#free-estimate" variant="outline">Prefer callback?</CtaButton>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-2xl font-bold text-amber-300">{point.value}</p>
                <p className="mt-1 text-sm text-blue-100">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-600">Can’t watch right now?</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Here’s the short version.</h2>
          </div>
          <div className="space-y-4">
            {recapBullets.map((bullet) => (
              <div key={bullet} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">✓</span>
                <p className="text-lg leading-relaxed text-slate-700">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-900 p-6 text-white shadow-xl md:p-10" data-cta-section="post-video-panel">
            <h2 className="text-3xl font-bold">Want to know if heat treatment is right for your home?</h2>
            <p className="mt-3 text-lg text-blue-100">Tell us what you’re seeing. We’ll tell you what to do next.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <CtaButton href={phoneHref}>Call {phoneDisplay}</CtaButton>
              <CtaButton href={smsHref} variant="secondary">Text a question</CtaButton>
              <CtaButton href="#free-estimate" variant="outline">Request estimate</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section id="why-heat" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why homeowners call us instead of spraying again</h2>
            <p className="mt-4 text-lg text-gray-600">Bed bugs are hard to beat with partial fixes. Heat is for people who want the home treated completely.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {whyCards.map((card) => (
              <Card key={card.title}>
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{card.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-600">How the heat works</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Pressurized heat reaches the places bed bugs hide.</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We use controlled heat to raise the treatment area above the bed bug killing temperature and hold it long enough to reach walls, furniture, baseboards, and hiding spots.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="/downloads/mwbbs_heat_treatment_prep.pdf" target="_blank" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-900 px-5 py-3 text-center font-bold text-white hover:bg-blue-950">
                Download prep checklist
              </a>
              <a href={financeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-blue-900 hover:bg-blue-50">
                Financing options
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
            <Image
              src="/assets/heat-treatment-diagram.jpg"
              alt="Heat treatment diagram showing pressurized bed bug heat process"
              width={1000}
              height={746}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="free-estimate" className="scroll-mt-28 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <EstimateForm />
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">Bed bug heat treatment questions</h2>
          <p className="mb-8 mt-3 text-center text-gray-600">The main things people ask before they call or send the form.</p>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173456] py-14 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8" data-cta-section="final-video-landing-cta">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to talk through your home?</h2>
          <p className="mt-4 text-lg text-blue-100">Call now or send the short form. We’ll help you figure out the next step.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <CtaButton href={phoneHref}>Call {phoneDisplay}</CtaButton>
            <CtaButton href={smsHref} variant="secondary">Text a question</CtaButton>
            <CtaButton href="#free-estimate" variant="outline">Use form</CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <Image src="/assets/mwbbs-logo.png" alt="Midwest Bed Bug Services" width={1432} height={240} className="h-9 w-auto" />
          <div className="flex flex-wrap gap-4">
            <a href={phoneHref} className="font-bold text-blue-900">{phoneDisplay}</a>
            <a href="/downloads/mwbbs_heat_treatment_prep.pdf">Prep checklist</a>
            <a href={financeUrl} target="_blank" rel="noopener noreferrer">Financing</a>
          </div>
          <p>© 2026. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur md:hidden">
        <a href={phoneHref} className="rounded-xl bg-amber-500 px-3 py-3 text-center text-sm font-bold text-white">Call</a>
        <a href={smsHref} className="rounded-xl bg-blue-900 px-3 py-3 text-center text-sm font-bold text-white">Text</a>
        <a href="#free-estimate" className="rounded-xl border border-slate-300 px-3 py-3 text-center text-sm font-bold text-blue-900">Estimate</a>
      </div>
    </main>
  );
}
