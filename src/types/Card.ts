export interface Card {
  id: string;
  name: string;
  company: string;
  theme: "light" | "dark" | "colorful";
  title: string;
  email: string;
  message: string;
  fileName?: string;
  fileUrl?: string;
}
