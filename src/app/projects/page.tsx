import ProjectPage from "@/components/projects/ProjectPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Projects",
  "Selected full-stack projects by Atik Hasan Anik: BazarDor price tracking, Bangla News 7 Bengali-first live news, and FitLog workout planning.",
  "/projects",
);

const page = () => <ProjectPage />;

export default page;
