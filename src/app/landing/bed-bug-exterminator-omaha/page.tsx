import type { Metadata } from "next";
import { VideoFirstPpcLandingPage } from "../VideoFirstPpcLandingPage";

const canonical = "https://bedbugsne.com/landing/bed-bug-exterminator-omaha/";

export const metadata: Metadata = {
  title: "Omaha Bed Bug Exterminator | Watch How Heat Treatment Works",
  description:
    "Watch how Midwest Bed Bug Services handles bed bugs with whole-home heat treatment in Omaha, Lincoln, Council Bluffs, and nearby areas. Free estimate and 90-day warranty on qualifying treatments.",
  keywords: [
    "Omaha bed bug exterminator",
    "bed bug exterminator Omaha",
    "bed bug heat treatment Omaha",
    "bed bug removal Omaha",
    "bed bug specialist Omaha",
  ],
  openGraph: {
    title: "Watch How an Omaha Bed Bug Exterminator Treats the Whole Home",
    description:
      "Short video showing why Midwest Bed Bug Services uses whole-home heat treatment for bed bugs and eggs.",
    type: "website",
    locale: "en_US",
    url: canonical,
  },
  alternates: {
    canonical,
  },
};

export default function BedBugExterminatorOmahaLandingPage() {
  return (
    <VideoFirstPpcLandingPage
      content={{
        canonical,
        breadcrumbName: "Omaha Bed Bug Exterminator",
        eyebrow: "Omaha bed bug exterminator",
        title: "Watch How an Omaha Bed Bug Exterminator Treats the Whole Home",
        subhead:
          "This short video shows why we use whole-home heat instead of chasing bed bugs room by room.",
        videoLabel: "Watch this before you hire an exterminator",
        submissionSource: "ppc-video-exterminator-omaha-landing",
        smsBody: "I have a question about bed bugs",
        recapTitle: "Here’s what makes our approach different.",
        recapBullets: [
          "We specialize in bed bugs instead of treating them like a routine pest call.",
          "We use whole-home pressurized heat to reach furniture, walls, baseboards, and hidden spaces.",
          "The goal is to kill bed bugs and eggs in one professional treatment, backed by a clear warranty path.",
        ],
        postVideoHeadline: "Want to talk to an Omaha bed bug specialist?",
        postVideoSubtext: "Call, text, or send the short form. We’ll help you confirm the next step.",
        whyTitle: "Why homeowners call a bed bug specialist",
        whyDescription: "General pest control visits can miss hidden activity. Bed bugs need a process built around how they hide and spread.",
        formTitle: "Get a free Omaha bed bug estimate",
        faqTitle: "Omaha bed bug exterminator questions",
        finalTitle: "Ready to talk to a bed bug specialist?",
      }}
    />
  );
}
