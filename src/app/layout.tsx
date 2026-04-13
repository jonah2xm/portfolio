import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Younes Oubelaid | Full-Stack & AI Integration Developer",
  description:
    "Full-Stack Web Developer & AI Integration Specialist. Building scalable web applications and intelligent AI-powered solutions.",
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "React",
    "Next.js",
    "Machine Learning",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Younes Oubelaid" }],
  openGraph: {
    title: "Younes Oubelaid | Full-Stack & AI Integration Developer",
    description:
      "Full-Stack Web Developer & AI Integration Specialist building scalable apps and intelligent solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
