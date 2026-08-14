import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Puli Bharat — AI/ML Engineer & Creative Developer",
  description: "Portfolio of Puli Bharat — AI/ML Engineer, Computer Vision Developer, and Open Source Contributor specializing in Deep Learning, PyTorch, and OpenCV.",
  keywords: [
    "Puli Bharat",
    "AI/ML Engineer",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
    "OpenCV",
    "Full Stack Developer",
    "IIT Ropar Intern",
    "Portfolio"
  ],
  authors: [{ name: "Puli Bharat", url: "https://github.com/pulibharat" }],
  openGraph: {
    title: "Puli Bharat — AI/ML Engineer & Creative Developer",
    description: "Engineering the future of AI & Computer Vision. Explore projects in Deep Q-Networks, Neural Style Transfer, and intelligent visual systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puli Bharat — AI/ML Engineer & Creative Developer",
    description: "Engineering the future of AI & Computer Vision. Explore projects in Deep Q-Networks, Neural Style Transfer, and intelligent visual systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="noise" />
        <ScrollProgress />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
