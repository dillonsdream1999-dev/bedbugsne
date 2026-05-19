import type { Metadata } from "next";
import { VideoFirstPpcLandingPage } from "../VideoFirstPpcLandingPage";

const canonical = "https://bedbugsne.com/landing/bed-bug-treatment-cost/";

export const metadata: Metadata = {
  title: "Bed Bug Treatment Cost Omaha | Watch What Affects Price",
  description:
    "Watch what affects bed bug heat treatment cost in Omaha, Lincoln, Council Bluffs, and nearby areas. Get a free whole-home treatment estimate with a 90-day warranty on qualifying service.",
  keywords: [
    "bed bug treatment cost Omaha",
    "bed bug heat treatment cost",
    "bed bug exterminator cost",
    "bed bug treatment estimate",
    "how much does bed bug treatment cost",
  ],
  openGraph: {
    title: "What Does Bed Bug Treatment Cost? Watch This First",
    description:
      "Short video explaining why whole-home heat treatment pricing depends on scope, home size, and infestation conditions.",
    type: "website",
    locale: "en_US",
    url: canonical,
  },
  alternates: {
    canonical,
  },
};

export default function BedBugTreatmentCostLandingPage() {
  return (
    <VideoFirstPpcLandingPage
      content={{
        canonical,
        breadcrumbName: "Bed Bug Treatment Cost",
        eyebrow: "Bed bug treatment pricing guidance",
        title: "What Does Bed Bug Treatment Cost? Watch This First",
        subhead:
          "This short video helps explain what affects price and why the cheapest option can cost more if bed bugs survive.",
        videoLabel: "Watch before comparing prices",
        submissionSource: "ppc-video-treatment-cost-landing",
        smsBody: "I have a question about bed bugs",
        recapTitle: "Here’s the pricing short version.",
        recapBullets: [
          "Cost depends on the home size, layout, contents, preparation, and infestation conditions.",
          "Whole-home heat is priced around solving the full problem, not spraying one visible spot.",
          "A clear estimate should explain treatment scope, timing, prep, and warranty before you schedule.",
        ],
        postVideoHeadline: "Want a clear heat treatment price?",
        postVideoSubtext: "Send the basics about your home and what you found. We’ll tell you the next step.",
        whyTitle: "Why cheap treatment can get expensive",
        whyDescription: "If bed bugs or eggs survive, you can end up paying twice while the infestation spreads.",
        formTitle: "Get your bed bug treatment cost estimate",
        faqTitle: "Bed bug treatment cost questions",
        finalTitle: "Ready for a clear estimate?",
      }}
    />
  );
}
