import type { Metadata } from "next";
import { VideoFirstPpcLandingPage } from "../VideoFirstPpcLandingPage";

const canonical = "https://bedbugsne.com/landing/bed-bug-inspection/";

export const metadata: Metadata = {
  title: "Bed Bug Inspection Omaha | Watch What to Look For",
  description:
    "Not sure if you have bed bugs? Watch what matters, then request inspection help from Midwest Bed Bug Services Nebraska. Free estimate if treatment is needed.",
  keywords: [
    "bed bug inspection Omaha",
    "bed bug signs",
    "bed bug bites identification",
    "bed bug inspection near me",
    "professional bed bug inspection",
  ],
  openGraph: {
    title: "Not Sure If You Have Bed Bugs? Watch This First",
    description:
      "Short video and clear next steps for Nebraska homeowners who found possible bed bug signs.",
    type: "website",
    locale: "en_US",
    url: canonical,
  },
  alternates: {
    canonical,
  },
};

export default function BedBugInspectionLandingPage() {
  return (
    <VideoFirstPpcLandingPage
      content={{
        canonical,
        breadcrumbName: "Bed Bug Inspection",
        eyebrow: "Not sure if it is bed bugs?",
        title: "Not Sure If You Have Bed Bugs? Watch This First",
        subhead:
          "This short video shows what matters, what not to panic over, and when to ask for help.",
        videoLabel: "Watch before you keep searching",
        submissionSource: "ppc-video-inspection-landing",
        smsBody: "I have a question about bed bugs",
        recapTitle: "Here’s the inspection shortcut.",
        recapBullets: [
          "Look for patterns: live bugs, eggs, shed skins, dark spotting, and bites that keep returning.",
          "Bed bugs usually hide close to where people rest, then spread into furniture, baseboards, and cracks.",
          "If signs are real, acting early can prevent a smaller issue from becoming a larger treatment.",
        ],
        postVideoHeadline: "Want help confirming what you found?",
        postVideoSubtext: "Tell us what you’re seeing. We’ll help you decide whether inspection or treatment is the next step.",
        whyTitle: "Why guessing gets expensive",
        whyDescription: "Bed bugs are easy to misread early. Clear identification keeps you from wasting time on the wrong fix.",
        formTitle: "Ask for bed bug inspection help",
        faqTitle: "Bed bug inspection questions",
        finalTitle: "Want a clear answer before it spreads?",
      }}
    />
  );
}
