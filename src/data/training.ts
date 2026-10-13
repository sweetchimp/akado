export interface TrainingAssignment {
  year: string;
  client: string;
  description: string;
}

export interface TrainingItem {
  icon: "graduation-cap" | "users";
  title: string;
  body: string;
  assignments?: TrainingAssignment[];
}

export const trainingItems: TrainingItem[] = [
  {
    icon: "graduation-cap",
    title: "Certified Gender-Responsive Pedagogy (GRP) Toolkit Trainer",
    body: "Dorothy trains and coaches educators in primary, secondary and higher institutions on gender-responsive teaching, inclusive classroom management, learner participation, safeguarding and equitable learning environments. She equips teachers and education leaders to identify and address barriers to learning, particularly those affecting girls and vulnerable and displaced learners.",
    assignments: [
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
    ],
  },
  {
    icon: "users",
    title: "Mentor and Youth Development Practitioner",
    body: "Dorothy mentors adolescent girls and young women through structured programmes run by Girls 4 Girls Uganda and FAWE Uganda, including a six-month, six-session curriculum covering building trust, courageous leadership, communication, negotiation and self-advocacy, public service, and ethics in decision-making. Her mentorship supports personal development, leadership, life skills, career planning, self-esteem and resilience, and works closely with schools, parents and communities.",
  },
];