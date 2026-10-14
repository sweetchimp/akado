export interface Highlight {
  figure: string;
  title: string;
  body: string;
}

export interface Assignment {
  period: string;
  client: string;
  description: string;
}

export interface TimelineEntry {
  role: string;
  organisation: string;
  period: string;
  summary: string;
}

export interface TrackRecord {
  highlights: Highlight[];
  assignments: Assignment[];
  timeline: TimelineEntry[];
}

export const trackRecord: TrackRecord = {
  highlights: [
    {
      figure: "UGX 21B+",
      title: "Mobilised",
      body: "Raised from Irish Aid, the African Development Bank, MasterCard Foundation and Dubai Cares.",
    },
    {
      figure: "90%",
      title: "Of a strategic plan funded",
      body: "Secured 90% of FAWE Uganda's 2013\u20132017 budget requirement through targeted donor engagement and evidence-based proposals.",
    },
    {
      figure: "HEAP",
      title: "A model adopted by other universities",
      body: "Helped design the Higher Education Access Program, a bridging year for students who narrowly missed university admission cut-off points.",
    },
    {
      figure: "10",
      title: "Countries reached with GRP training",
      body: "Delivered gender-responsive pedagogy training on centres of excellence across West and Central Africa.",
    },
  ],
  assignments: [
    {
      period: "2024",
      client: "FAWE Uganda (Ntoroko District)",
      description:
        "Facilitated training on establishing Gender Responsive Pedagogy in 23 schools.",
    },
    {
      period: "2022 \u2013 present",
      client: "GRAMS (independent consultancy)",
      description:
        "Programme review for WUSC (Uganda and Kenya); PSEAH investigations for UNHCR-funded organisations; grants management support to UCS Global Uganda; policy harmonisation support to Makerere University Lung Institute.",
    },
    {
      period: "2022",
      client: "FAWE West Africa",
      description:
        "5-day training on GRP centres of excellence in 10 West and Central African countries.",
    },
    {
      period: "2021",
      client: "FAWE Uganda",
      description:
        "National training on Gender Responsive Pedagogy for institutions of higher learning.",
    },
    {
      period: "2020 \u2013 2021",
      client: "Ministry of Education and Sports (COVID-19 Education Response)",
      description:
        "Led social safeguard instruments, including the Environmental and Social Management Framework, GBV Action Plan and Grievance Redress Mechanism, for a World Bank-supported project.",
    },
    {
      period: "2020",
      client: "FAWE Uganda",
      description:
        "Supervised research on the impact of COVID-19 on school-going girls and young women.",
    },
  ],
  timeline: [
    {
      role: "Independent Consultant",
      organisation: "GRAMS",
      period: "2022 \u2013 present",
      summary:
        "Consulting on education programmes, safeguarding, policy and grants management.",
    },
    {
      role: "Social Development Specialist",
      organisation: "Ministry of Education and Sports",
      period: "2020 \u2013 2021",
      summary:
        "Led social safeguards for a World Bank-supported education response project.",
    },
    {
      role: "Gender and Disability Specialist",
      organisation: "World Vision Uganda",
      period: "2018 \u2013 2019",
      summary:
        "Led gender equality and disability inclusion across national programmes and policy. Contributed to the review of the Re-entry to School Policy, the Gender in Education Policy and the National Strategy for Girls' Education.",
    },
    {
      role: "Senior Programmes Manager, Programmes Manager, Programmes Officer",
      organisation: "FAWE Uganda",
      period: "2003 \u2013 2018",
      summary:
        "Led programmes, strategy, donor funding and a team of 10 national and 4 international staff. Represented FAWEU on the National Gender Taskforce and the Makerere University Female Scholarship Foundation Board.",
    },
    {
      role: "Project Assistant",
      organisation: "AMREF",
      period: "2000 \u2013 2003",
      summary:
        "Community mobilisation and hygiene promotion for a water and sanitation project in Rukungiri, Kanungu and Kabale Districts.",
    },
  ],
};
