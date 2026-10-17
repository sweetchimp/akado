export type ServiceIcon =
  | "shield-check"
  | "users"
  | "file-text"
  | "graduation-cap"
  | "hand-coins"
  | "presentation";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  whoItsFor: string;
  offers: string[];
  proofPoint: string;
}

export const servicesKicker =
  "Evidence-led advisory for education, inclusion and child protection.";

export const servicesIntro =
  "This work grows out of more than twenty years alongside communities, organisations and funders. I help NGOs, donors, government agencies and institutions design stronger programmes, protect the people they serve, and build teams that deliver lasting results. Backed by 20+ years across Uganda and the wider African region.";

export const services: Service[] = [
  {
    slug: "safeguarding-pseah",
    icon: "shield-check",
    title: "Safeguarding & PSEAH",
    whoItsFor:
      "NGOs, schools, refugee-response organisations, donor-funded projects.",
    offers: [
      "Independent, survivor-centred investigations into sexual exploitation, abuse and harassment (PSEAH)",
      "Safeguarding policies, codes of conduct, referral pathways and reporting protocols",
      "GBV and sexual exploitation and abuse (SEA) prevention training and awareness materials",
    ],
    proofPoint:
      "Member of an independent PSEAH investigators team for UNHCR-funded organisations, investigating in schools in refugee settlements across Uganda and Kenya.",
  },
  {
    slug: "gender-disability-inclusion",
    icon: "users",
    title: "Gender, Disability & Social Inclusion",
    whoItsFor: "NGOs, government programmes, donors, education institutions.",
    offers: [
      "Gender and disability inclusion assessments and audits",
      "Inclusion policies, strategies and practical toolkits",
      "Mainstreaming inclusion into programme design and M&E frameworks",
    ],
    proofPoint:
      "Led World Vision Uganda's organisation-wide Gender Assessment, which informed its Gender and Disability Inclusion Policy.",
  },
  {
    slug: "education-research-advocacy",
    icon: "file-text",
    title: "Education Research, Programme Review & Policy Advocacy",
    whoItsFor:
      "Donors, international NGOs, education programmes, civil society coalitions.",
    offers: [
      "Programme reviews and evaluations with clear, actionable recommendations",
      "Research and policy briefs that turn field evidence into advocacy",
      "Advocacy strategies and engagement with ministries, Parliament and donor missions",
    ],
    proofPoint:
      "Reviewed the Student Referral Pathways Programme in Uganda and Kenya for WUSC, and contributed to review of Uganda's Re-entry to School Policy and the National Strategy for Girls' Education.",
  },
  {
    slug: "training-capacity-building",
    icon: "graduation-cap",
    title: "Training & Capacity Building",
    whoItsFor:
      "Schools, teacher training institutions, civil society organisations, national institutions.",
    offers: [
      "Gender-responsive pedagogy (GRP) training as a certified GRP Toolkit Trainer",
      "Life skills and psychosocial well-being training",
      "Practical workshops on proposal development, financial accountability and donor regulations",
    ],
    proofPoint:
      "Trained educators from 10 West and Central African countries on GRP centres of excellence, and supported 23 schools in Ntoroko District (2024).",
  },
  {
    slug: "grants-management",
    icon: "hand-coins",
    title: "Grants Management & Resource Mobilisation",
    whoItsFor:
      "Local and national NGOs, research institutions, organisations preparing for donor funding.",
    offers: [
      "Grants management systems, due diligence and sub-grantee oversight",
      "Audit preparedness and donor compliance support",
      "Proposal development and funding strategy",
    ],
    proofPoint:
      "Mobilised over UGX 21 billion from Irish Aid, the African Development Bank, MasterCard Foundation and Dubai Cares, and secured 90% of FAWE Uganda's 2013\u20132017 strategic plan budget.",
  },
  {
    slug: "leadership-mentorship-speaking",
    icon: "presentation",
    title: "Leadership, Mentorship & Speaking",
    whoItsFor:
      "Organisations, leadership teams, youth and women's programmes, conferences and events.",
    offers: [
      "Leadership and people development programmes",
      "Structured mentorship for emerging leaders, adolescent girls and young women",
      "Inspirational talks and keynotes on purpose, leadership and service",
    ],
    proofPoint:
      "Built and led a team of 14 at FAWE Uganda, and mentor adolescent girls and young women through Girls 4 Girls Uganda and FAWE Uganda.",
  },
];
