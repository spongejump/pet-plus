import { FooterSection } from "../types/footer";

export const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "Our company", href: "/about/company" },
      { label: "Our mission", href: "/about/mission" },
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Buyers",
    links: [
      { label: "Pets&Plus store", href: "/store" },
      { label: "Learning Center", href: "/learning" },
      { label: "Animal owner policies", href: "/policies" },
      { label: "Pet insurance", href: "/insurance" },
    ],
  },
  {
    title: "Breeders",
    links: [
      { label: "Join or log in", href: "/auth" },
      { label: "About our breeders", href: "/breeders" },
      { label: "Pets&Plus Store", href: "/store" },
    ],
  },
  {
    title: "Directory",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms and Condition", href: "/terms" },
    ],
  },
];
