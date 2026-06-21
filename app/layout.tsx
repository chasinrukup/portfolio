import type { Metadata, Viewport } from "next";
import { Inter_Tight, Fraunces, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const body = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.shortBio,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Sachin Kurup",
    "Multi-Agent AI",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Agentic AI",
    "Amrita Vishwa Vidyapeetham",
    "PhD candidate",
    "Computer Science researcher",
    "Cyber-Physical Systems",
    "AI Planning",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} · ${site.role}`,
    description: site.shortBio,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.shortBio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Computer Science Researcher",
  description: site.shortBio,
  url: site.url,
  email: `mailto:${site.email}`,
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Amrita Vishwa Vidyapeetham",
    },
  ],
  affiliation: [
    {
      "@type": "Organization",
      name: "SeedlingLabs Private Limited",
    },
    {
      "@type": "Organization",
      name: "Colorado State University",
    },
  ],
  knowsAbout: [
    "Multi-Agent AI Systems",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Computational Optimization",
    "Cyber-Physical Systems Security",
    "AI Planning",
    "Graph Theory",
  ],
  sameAs: [site.linkedin, site.github],
  nationality: { "@type": "Country", name: "Singapore" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-ink-base text-paper antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-ink-base"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
