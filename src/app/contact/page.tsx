import ContactPage from "@/components/contact/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Contact Atik Hasan Anik for full-stack development, freelance projects, and collaboration. Based in Dhaka, Bangladesh and available for remote work.",
  "/contact",
);

const page = () => <ContactPage />;

export default page;
