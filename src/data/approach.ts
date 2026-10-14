export interface ApproachStep {
  title: string;
  body: string;
}

export interface Approach {
  intro: string;
  steps: ApproachStep[];
  principles: string[];
  whoIWorkWith: string[];
  engagementTypes: string;
}

export const approach: Approach = {
  intro:
    "Every engagement is practical, evidence-based and tailored to your context.",
  steps: [
    {
      title: "Listen and diagnose",
      body: "I start by understanding your goals, your context and your funder or regulatory requirements.",
    },
    {
      title: "Design a fit-for-purpose approach",
      body: "A clear scope, timeline and deliverables, with no generic templates.",
    },
    {
      title: "Deliver with rigour",
      body: "Careful fieldwork, survivor-centred and inclusive practice, and regular communication.",
    },
    {
      title: "Leave capacity behind",
      body: "Practical tools, trained people and systems that your team can keep using.",
    },
  ],
  principles: [
    "Evidence-led",
    "Inclusive and survivor-centred",
    "People-first",
    "Accountable to funders and communities",
  ],
  whoIWorkWith: [
    "NGOs and civil society organisations",
    "Donors and development partners",
    "Government ministries and agencies",
    "Schools, universities and research institutions",
    "Refugee-response and humanitarian organisations",
  ],
  engagementTypes:
    "Engagement types: short-term consultancies, assignments and evaluations, training and workshops, and ongoing advisory support.",
};
