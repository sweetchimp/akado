export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Dorothy Akankwasa Muhumure",
  title: "Social Development, Education & Policy Advocacy Specialist",
  metaTitle:
    "Dorothy Akankwasa Muhumure | Social Development, Education & Policy Advocacy Specialist",
  metaDescription:
    "Social development, education and policy advocacy specialist with 20+ years of experience in girls' education, gender and disability inclusion, and child protection across Uganda and Africa.",
  location: "Kampala, Uganda",
  email: "doramuhumure77@gmail.com",
  linkedin: "",
  cvUrl: "/Dorothy-Muhumure-CV.pdf",
  headshot: { src: "", alt: "Portrait of Dorothy Akankwasa Muhumure" },
  footer: "\u00A9 Dorothy Akankwasa Muhumure. All rights reserved.",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Impact", href: "#impact" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
];
