export type ExpertiseIcon =
  | "landmark"
  | "file-text"
  | "graduation-cap"
  | "users"
  | "shield-check"
  | "presentation"
  | "hand-coins"
  | "chart-bar";

export interface ExpertiseArea {
  icon: ExpertiseIcon;
  title: string;
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: "landmark",
    title: "Policy Advocacy & Government Relations",
    description:
      "High-level engagement with MoES, MoGLSD, Parliament and donor missions.",
  },
  {
    icon: "file-text",
    title: "Research & Policy Briefs",
    description:
      "Turning field evidence into policy briefs, reports and IEC materials.",
  },
  {
    icon: "graduation-cap",
    title: "Gender-Responsive Pedagogy & Life Skills",
    description:
      "Certified GRP Toolkit Trainer, with a focus on psychosocial well-being.",
  },
  {
    icon: "users",
    title: "Gender, Disability & Social Inclusion",
    description:
      "Mainstreaming inclusion across programmes, policies and M&E frameworks.",
  },
  {
    icon: "shield-check",
    title: "Child Protection & Safeguarding",
    description: "PSEAH investigations and GBV/SEA prevention.",
  },
  {
    icon: "presentation",
    title: "Capacity Building & Training",
    description:
      "Workshops for teachers, school leaders, civil society and national institutions.",
  },
  {
    icon: "hand-coins",
    title: "Grants Management & Resource Mobilisation",
    description: "Donor compliance, due diligence and funding proposals.",
  },
  {
    icon: "chart-bar",
    title: "Monitoring, Evaluation & Documentation",
    description: "Frameworks, reporting and success-story documentation.",
  },
];
