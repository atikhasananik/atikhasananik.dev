"use client";

import { useEffect } from "react";
import StatusPage from "@/components/system/StatusPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      tag="[SYS.500] // RUNTIME"
      code="500"
      status="SYSTEM FAULT"
      title="SOMETHING BROKE"
      description="An unexpected exception interrupted this route. The fault has been isolated; retry the render or return to the home page. If it repeats, send the digest below with a short note."
      log={[
        { label: "Exception", value: "UNHANDLED" },
        { label: "Render", value: "ABORTED" },
        { label: "Boundary", value: "CAUGHT" },
        { label: "Digest", value: error.digest ?? "N/A" },
      ]}
      primary={{ label: "RETRY RENDER", onClick: reset, icon: "retry" }}
      secondary={{ label: "BACK TO HOME", href: "/" }}
      footnote="[ERR.500] // CLIENT BOUNDARY // CHECK THE CONSOLE"
    />
  );
}
