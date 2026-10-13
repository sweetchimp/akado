export interface EducationEntry {
  qualification: string;
  institution: string;
  period: string;
}

export interface AboutContent {
  paragraphs: string[];
  education: EducationEntry[];
}

export const about: AboutContent = {
  paragraphs: [
    "Dorothy is a Social Development, Education and Advocacy Specialist with more than two decades of experience in policy advocacy, education programming, social protection, gender and disability inclusion, child protection and psychosocial well-being. Her work spans Uganda and the wider East, West and Central African regions, including displacement and refugee/host-community contexts.",
    "She holds a Master of Arts in Social Sector Planning and Management from Makerere University. She translates field evidence into policy briefs, advocacy tools and communication materials, leads engagement with government ministries (including the Ministry of Education and Sports), Members of Parliament and donor missions, and designs capacity-building programmes for national institutions, teachers, community structures and civil society.",
    "Her grounding in gender-responsive pedagogy, life skills, GBV/SEA prevention and child protection, combined with her research, communication and relationship-building strengths, lets her bridge field evidence with national and regional policy influence.",
  ],
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
