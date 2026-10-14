export interface EducationEntry {
  qualification: string;
  institution: string;
  period: string;
}

export interface AboutBlock {
  title: string;
  paragraphs: string[];
}

export interface AboutContent {
  identityTags: string[];
  lead: string;
  blocks: AboutBlock[];
  closingLine: string;
  education: EducationEntry[];
}

export const about: AboutContent = {
  identityTags: [
    "Social Development & Protection Professional",
    "Leadership & People Development Practitioner",
    "Inspirational Speaker",
    "Spiritual Mentor",
  ],
  lead: "I empower people and strengthen communities, through professional practice and through faith.",
  blocks: [
    {
      title: "Professional journey",
      paragraphs: [
        "Over more than twenty years, I have worked across policy advocacy, education programming, social protection, gender and disability inclusion, and child protection in Uganda and across East, West and Central Africa. My experience includes FAWE Uganda, World Vision Uganda, the Ministry of Education and Sports, and independent consultancy. I hold an MA in Social Sector Planning and Management from Makerere University.",
      ],
    },
    {
      title: "How I work",
      paragraphs: [
        "My strengths are training, mentorship, leadership development and capacity strengthening. I build effective teams, nurture talent, and help organisations achieve meaningful and sustainable results. Whether I am facilitating a workshop, mentoring an individual, inspiring an audience or supporting organisational development, my aim is to equip people and strengthen purpose.",
      ],
    },
    {
      title: "Faith & ministry",
      paragraphs: [
        "For the past three years, alongside my professional work, I have been engaged in spiritual development and ministry through Bible-based teaching, prayer, fellowship and spiritual mentorship. Through shared Bible study, prayer gatherings and reflective conversations, I help people deepen their understanding of God\u2019s Word, grow in faith and apply biblical principles to everyday life.",
      ],
    },
  ],
  closingLine:
    "My approach brings together professional competence, people-centred leadership and faith-informed values, with a commitment to lasting transformation in individuals, organisations and communities.",
  education: [
    {
      qualification: "MA, Social Sector Planning and Management",
      institution: "Makerere University",
      period: "2010\u20132014",
    },
    {
      qualification: "BA (Social Sciences), Economics",
      institution: "Makerere University",
      period: "1996\u20131999",
    },
  ],
};
