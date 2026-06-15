import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "DSAINT | Distributed Sovereign AI Infrastructure Nodes Technology",
  description:
    "Building Germany's Sovereign AI Infrastructure Backbone. DSAINT develops distributed sovereign AI infrastructure nodes designed to strengthen Germany's digital sovereignty and support Europe's next generation of AI innovation.",

  keywords: [
    "DSAINT",
    "AI Infrastructure",
    "Sovereign AI",
    "Germany",
    "European AI",
    "Data Center",
    "Digital Sovereignty",
    "AI Infrastructure Nodes",
  ],

  openGraph: {
    title:
      "DSAINT | Building Germany's Sovereign AI Infrastructure Backbone",
    description:
      "Distributed Sovereign AI Infrastructure Nodes Technology.",
    images: ["/images/dsaint-cover-page.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
