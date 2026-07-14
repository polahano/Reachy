export interface NavItem {
  key: "home" | "about" | "services" | "portfolio" | "pricing" | "team" | "testimonials" | "faq" | "contact";
  path: string; // relative path segment, "" for home
}

export const navItems: NavItem[] = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
  { key: "portfolio", path: "portfolio" },
  { key: "pricing", path: "pricing" },
  { key: "team", path: "team" },
  { key: "testimonials", path: "testimonials" },
  { key: "faq", path: "faq" },
  { key: "contact", path: "contact" },
];

// Primary items shown directly in the navbar; the rest live in an overflow "More" menu on desktop.
export const primaryNavKeys: NavItem["key"][] = ["about", "services", "portfolio", "pricing", "contact"];
