import type { Metadata } from "next";
import { VideoFirstPpcLandingPage } from "../VideoFirstPpcLandingPage";

const canonical = "https://bedbugsne.com/landing/get-rid-of-bed-bugs/";

export const metadata: Metadata = {
  title: "How to Get Rid of Bed Bugs Fast | Watch the Heat Treatment Plan",
  description:
    "Found bed bugs? Watch the fastest professional path to get bed bugs and eggs gone with whole-home heat treatment in Omaha, Lincoln, Council Bluffs, and nearby areas.",
  keywords: [
    "how to get rid of bed bugs",
    "get rid of bed bugs fast",
    "bed bug heat treatment",
    "bed bug removal",
    "kill bed bugs and eggs",
  ],
  openGraph: {
    title: "Found Bed Bugs? Watch This First",
    description:
      "Short video showing the professional path to get bed bugs and eggs gone with whole-home heat treatment.",
    type: "website",
    locale: "en_US",
    url: canonical,
  },
  alternates: {
    canonical,
  },
};

export default function GetRidOfBedBugsLandingPage() {
  return (
    <VideoFirstPpcLandingPage
      content={{
        canonical,
        breadcrumbName: "Get Rid of Bed Bugs",
        eyebrow: "Found bed bugs? Start here.",
        title: "Found Bed Bugs? Watch This First",
        subhead:
          "This short video shows the fastest professional path to get bed bugs and eggs gone completely.",
        videoLabel: "Watch before you spray again",
        submissionSource: "ppc-video-get-rid-of-bed-bugs-landing",
        smsBody: "I have a question about bed bugs",
        recapTitle: "Here’s the fastest real path.",
        recapBullets: [
          "Confirm what you found before wasting time on the wrong treatment.",
          "Skip foggers and partial spray cycles that miss eggs, wall voids, furniture seams, and baseboards.",
          "Use whole-home heat with proper prep so bed bugs and eggs reach lethal temperature.",
        ],
        postVideoHeadline: "Want help getting them gone?",
        postVideoSubtext: "Call, text, or send the short form. We’ll help you move from panic to a treatment plan.",
        whyTitle: "Why spraying again usually is not enough",
        whyDescription: "Bed bugs hide well and eggs can survive missed applications. Whole-home heat is built for complete treatment.",
        formTitle: "Get help getting rid of bed bugs",
        faqTitle: "Getting rid of bed bugs questions",
        finalTitle: "Stop guessing and get a real plan",
      }}
    />
  );
}
