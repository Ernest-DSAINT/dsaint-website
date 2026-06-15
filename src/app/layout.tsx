import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "DSAINT",
  description:
    "Distributed Sovereign AI Infrastructure Nodes Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
