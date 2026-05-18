import type { Metadata } from "next";
import { VideoFirstPpcLandingPage } from "../VideoFirstPpcLandingPage";

const canonical = "https://bedbugsne.com/landing/bed-bug-heat-treatment/";

export const metadata: Metadata = {
  title: "Bed Bug Heat Treatment Omaha | Watch How Whole-Home Heat Works",
  description:
    "Watch how Midwest Bed Bug Services uses whole-home bed bug heat treatment to kill bed bugs and eggs in Omaha, Lincoln, Council Bluffs, and nearby areas. Free estimate, 6–7 hour treatment, 90-day warranty.",
  keywords: [
    "bed bug heat treatment Omaha",
    "heat treatment for bed bugs",
    "bed bug heat treatment near me",
    "whole house bed bug heat treatment",
    "professional bed bug heat treatment",
  ],
  openGraph: {
    title: "Watch How Whole-Home Bed Bug Heat Treatment Works",
    description:
      "Short video showing how whole-home heat treatment kills bed bugs and eggs. Free estimate and 90-day warranty on qualifying treatments.",
    type: "website",
    locale: "en_US",
    url: canonical,
  },
  alternates: {
    canonical,
  },
};

export default function BedBugHeatTreatmentLandingPage() {
  return (
    <VideoFirstPpcLandingPage
      content={{
        canonical,
        breadcrumbName: "Bed Bug Heat Treatment",
        eyebrow: "Omaha bed bug heat treatment",
        title: "Watch How Whole-Home Bed Bug Heat Treatment Works",
        subhead:
          "This short video shows how we heat the entire home so bed bugs and eggs die in one treatment.",
        videoLabel: "Watch this first: 2 minutes",
        submissionSource: "ppc-video-heat-treatment-landing",
      }}
    />
  );
}
