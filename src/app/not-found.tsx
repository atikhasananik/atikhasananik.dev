import type { Metadata } from "next";
import StatusPage from "@/components/system/StatusPage";

export const metadata: Metadata = {
  title: { absolute: "404 — Page Not Found — Atik Hasan Anik" },
  description: "The requested route does not exist on this portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <StatusPage
      tag="[SYS.404] // ROUTE LOOKUP"
      code="404"
      status="SIGNAL LOST"
      title="PAGE NOT FOUND"
      description="The address you requested does not map to a route on this site. It may have moved, been renamed, or never existed. Use the recovery actions below to get back on track."
      log={[
        { label: "Route.scan", value: "FAIL" },
        { label: "Route.match", value: "NONE" },
        { label: "Fallback", value: "404.HTML" },
        { label: "Mode", value: "READ.ONLY" },
      ]}
      primary={{ label: "BACK TO HOME", href: "/" }}
      secondary={{ label: "VIEW PROJECTS", href: "/projects" }}
      footnote="[ERR.404] // NO ROUTE MATCH // DHAKA, BD"
    />
  );
}
