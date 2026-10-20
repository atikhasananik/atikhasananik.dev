import TechnologyPage from "@/components/technology/TechnologyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Technology",
  "The stack behind Atik Hasan Anik's work: Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, Git, Docker, and modern frontend tooling.",
  "/technology",
);

const page = () => <TechnologyPage />;

export default page;
