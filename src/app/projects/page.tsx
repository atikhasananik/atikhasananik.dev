import ProjectPage from "@/components/projects/ProjectPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Projects",
  "Selected full-stack projects by Atik Hasan Anik: FixMate repair marketplace, StudioSpace creative studio booking, Bangla News 7 Bengali-first live news, FitLog workout planning, and BazarDor price tracking.",
  "/projects",
);

const page = () => <ProjectPage />;

export default page;
