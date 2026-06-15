import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
