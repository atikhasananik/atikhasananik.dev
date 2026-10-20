import EducationPage from "@/components/education/EducationPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Education",
  "Academic background of Atik Hasan Anik: a Diploma in Computer Science and Engineering (2023–present) and SSC in Science with a GPA of 3.94/5.00.",
  "/education",
);

const page = () => <EducationPage />;

export default page;
