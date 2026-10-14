export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  brand: "Dorothy Muhumure Consulting",
  metaTitle:
    "Dorothy Akankwasa Muhumure | Education, Inclusion & Child Protection Consultant",
  metaDescription:
    "Independent consultant with 20+ years' experience in safeguarding, gender and disability inclusion, education programming, policy advocacy, grants management and capacity building across Africa.",
  location: "Kampala, Uganda",
  email: "doramuhumure77@gmail.com",
  linkedin: "",
  headshot: { src: "", alt: "Portrait of Dorothy Akankwasa Muhumure" },
  footer: "\u00A9 Dorothy Akankwasa Muhumure. All rights reserved.",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

export const navCta: NavItem = {
  label: "Request a consultation",
  href: "#contact",
};
