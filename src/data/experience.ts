export interface ExperienceRole {
  title: string;
  period: string;
  summary: string;
  achievements: string[];
}

export interface ExperienceItem {
  organisation: string;
  period: string;
  role?: string;
  location?: string;
  note?: string;
  summary?: string;
  achievements?: string[];
  roles?: ExperienceRole[];
}

export interface Consultancy {
  year: string;
  client: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Independent Consultant",
    organisation: "GRAMS (Global Research Administration and Management Service Ltd)",
    location: "Uganda",
    period: "2022 \u2013 Present",
    summary:
      "Consulting on education programmes, safeguarding, policy and grants management for international and national organisations.",
    achievements: [
      "Reviewed the Student Referral Pathways Programme in Uganda and Kenya for World University Service of Canada (WUSC), leading stakeholder engagement, systems assessment and strategic recommendations.",
      "Served on the Independent PSEAH Investigators team for UNHCR-funded organisations, conducting survivor-centred safeguarding investigations in schools in refugee settlements in Uganda and Kenya.",
      "Supported UCS Global Uganda to strengthen grants management systems, including due diligence, sub-grantee oversight, audit preparedness and donor compliance.",
      "Provided policy harmonisation and institutional strengthening support to Makerere University Lung Institute across multiple research sites.",
      "Designed and delivered training in proposal development, financial accountability and donor regulations.",
    ],
  },
  {
    role: "Social Development Specialist",
    organisation:
      "Ministry of Education and Sports: COVID-19 Education Response Project",
    period: "2020 \u2013 2021",
    summary:
      "Led social safeguards for a World Bank-supported education response project.",
    achievements: [
      "Led preparation and review of key safeguard instruments, including the Environmental and Social Management Framework, GBV Action Plan, Stakeholder Engagement Plan and Grievance Redress Mechanism.",
      "Strengthened prevention of sexual exploitation, abuse and harassment through Codes of Conduct, referral pathways, reporting protocols and community awareness materials.",
      "Ensured inclusion of girls, children with disabilities and refugee/host-community learners in project planning and monitoring.",
    ],
  },
  {
    role: "Gender and Disability Specialist",
    organisation: "World Vision Uganda",
    period: "2018 \u2013 2019",
    summary:
      "Led gender equality and disability inclusion across national programmes and organisational policy.",
    achievements: [
      "Led the organisation-wide Gender Assessment that informed the Gender and Disability Inclusion Policy.",
      "Developed gender-sensitive and disability-inclusive strategies, toolkits and M&E frameworks.",
      "Contributed to the review of the Re-entry to School Policy (supporting adolescent mothers to return to school), the Gender in Education Policy and the National Strategy for Girls' Education.",
    ],
  },
  {
    organisation: "FAWE Uganda (Forum for African Women Educationalists)",
    period: "2003 \u2013 2018",
    note: "Grouped on the timeline to show career progression.",
    roles: [
      {
        title: "Senior Programmes Manager",
        period: "2013 \u2013 2018",
        summary:
          "Led all FAWE Uganda programmes, from strategy to donor funding to team leadership.",
        achievements: [
          "Led the 2013\u20132017 Strategic Plan and secured 90% of its total budget requirement.",
          "Mobilised over UGX 21 billion from Irish Aid, African Development Bank, MasterCard Foundation and Dubai Cares.",
          "Built and led a team of 10 national and 4 international staff.",
          "Led the drafting and institutionalisation of the organisation's Gender Policy.",
          "Spearheaded evidence-based advocacy campaigns on girls' education, gender equality, child protection and youth empowerment.",
        ],
      },
      {
        title: "Programmes Manager",
        period: "2007 \u2013 2013",
        summary:
          "Led the Programmes Department across multiple districts and represented FAWEU on national committees.",
        achievements: [
          "Co-led development of the 2013\u20132017 Strategic Plan.",
          "Represented FAWEU on the National Gender Taskforce and the Makerere University Female Scholarship Foundation Board.",
          "Contributed to the design of the Higher Education Access Program, a one-year bridging programme whose effectiveness led other universities to adopt it.",
        ],
      },
      {
        title: "Programmes Officer",
        period: "2003 \u2013 2007",
        summary:
          "Delivered education and gender programmes and training at district level.",
        achievements: [
          "Contributed to a 10-year USAID-funded scholarship programme, supporting selection, mentorship and monitoring of beneficiaries across regions.",
          "Developed and delivered training on life skills, gender roles, hygiene and sanitation, youth empowerment, HIV/AIDS awareness and child protection.",
        ],
      },
    ],
  },
  {
    role: "Project Assistant",
    organisation: "AMREF: Water and Sanitation Project",
    location: "Rukungiri, Kanungu and Kabale Districts",
    period: "2000 \u2013 2003",
    summary:
      "Mobilised communities and schools for water, sanitation and hygiene interventions.",
    achievements: [
      "Facilitated community engagement, sensitisation drives and hygiene promotion trainings.",
      "Ran behaviour-change campaigns using drama, school clubs, home visits and community dialogues.",
    ],
  },
];

export const recentConsultancies: Consultancy[] = [
  {
    year: "2024",
    client: "FAWE Uganda (Ntoroko District)",
    description:
      "Facilitated training on establishing Gender Responsive Pedagogy in 23 schools.",
  },
  {
    year: "2022",
    client: "FAWE West Africa",
    description:
      "Conducted a 5-day training on GRP centres of excellence in 10 West and Central African countries.",
  },
  {
    year: "2021",
    client: "FAWE Uganda",
    description:
      "Facilitated national training on Gender Responsive Pedagogy for institutions of higher learning.",
  },
  {
    year: "2020",
    client: "FAWE Uganda",
    description:
      "Supervised research on the impact of COVID-19 on school-going girls and young women.",
  },
];