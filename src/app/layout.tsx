import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title:
    "DSAINT | Germany's Sovereign AI Infrastructure Ecosystem",

  description:
    "DSAINT (Distributed Sovereign AI Infrastructure Nodes Technology) combines environmentally friendly Core Infrastructure Nodes, Community Compute Federation participants and Reverse Co-Hosting to build Germany's sovereign AI future.",

  keywords: [
    "DSAINT",
    "Sovereign AI",
    "AI Infrastructure",
    "Germany",
    "German AI",
    "European AI",
    "Digital Sovereignty",
    "Community Compute Federation",
    "Reverse Co-Hosting",
    "Citizen AI Nodes",
    "AI Data Center",
    "AI Infrastructure Nodes",
    "Distributed AI",
    "AI Ecosystem",
    "Tier III Data Center",
    "Sustainable AI",
  ],

  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },

  openGraph: {
    title:
      "DSAINT | Germany's Sovereign AI Infrastructure Ecosystem",

    description:
      "Reverse co-hosting is the future of Germany's independent AI – a future in which everyone can participate.",

    images: ["/images/dsaint-cover-page.png"],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "DSAINT | Germany's Sovereign AI Infrastructure Ecosystem",

    description:
      "Core Infrastructure Nodes, Citizen AI Nodes and the Community Compute Federation.",

    images: ["/images/dsaint-cover-page.png"],
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
      </body>
    </html>
  );
}
