export type AnchorId =
  | "hero"
  | "about"
  | "currents"
  | "work"
  | "publications"
  | "journey"
  | "toolkit"
  | "now"
  | "contact";

export const ANCHORS: Record<AnchorId, { label: string; number: string; blurb: string }> = {
  hero: { label: "Top", number: "00", blurb: "Name, position, metadata strip." },
  about: { label: "About", number: "01", blurb: "Three-paragraph bio + pull-quote." },
  currents: {
    label: "Research Currents",
    number: "02",
    blurb: "Six research themes with open questions.",
  },
  work: {
    label: "Selected Work",
    number: "03",
    blurb: "Ten project case studies with problem / approach / outcome.",
  },
  publications: {
    label: "Publications",
    number: "04",
    blurb: "Accepted, published, under review, and in-preparation papers.",
  },
  journey: {
    label: "Journey",
    number: "05",
    blurb: "Hairline timeline of milestones from 2018 to 2026.",
  },
  toolkit: {
    label: "Toolkit",
    number: "06",
    blurb: "Capability matrix grouped by domain.",
  },
  now: {
    label: "Now",
    number: "07",
    blurb: "What's in flight this week.",
  },
  contact: {
    label: "Contact",
    number: "08",
    blurb: "Email, LinkedIn, GitHub, resume download.",
  },
};

export const ANCHOR_IDS = Object.keys(ANCHORS) as AnchorId[];

export function isAnchorId(id: string): id is AnchorId {
  return id in ANCHORS;
}
