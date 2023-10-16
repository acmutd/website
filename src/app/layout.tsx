import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACM UTD",
  description:
    "We're the Association for Computing Machinery at UT Dallas. We're focused on giving back to the engineering community here at UT Dallas and beyond through events, projects, HackUTD, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
