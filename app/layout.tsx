import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { NavBar } from "@/components/layouts/NavBar";
import { Footer } from "@/components/layouts/Footer";
import { FixedThemeToggle } from "@/components/theme/FixedThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.switchiify.com"),

  title: {
    default: "Switchiify",
    template: "%s | Switchiify",
  },

  description: "Switchiify Platforms Inc. is a technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  keywords: ["Switchiify", "Switchiify Platforms Inc.", "Technology", "Software", "Consumer Electronics", "Personal Computers", "Services"],
  authors: [{ name: "Switchiify Platforms Inc.", url: "https://www.switchiify.com" }],
  creator: "Switchiify",
  publisher: "Switchiify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.switchiify.com",
    title: "Switchiify",
    description: "Switchiify Platforms Inc. is a technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",

    siteName: "Switchiify",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Switchiify Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Switchiify",
    description:
      "Innovating software, consumer electronics, and digital experiences.",
    images: ["/twitter-image.png"],
    creator: "@switchiify",
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },


  manifest: "/manifest.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "WebSite"],
  name: "Switchiify",
  url: "https://www.switchiify.com",
  logo: "https://www.switchiify.com/icon.png",
  description:
    "Switchiify Platforms Inc. is a technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  sameAs: ["https://stockify.rw"],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.switchiify.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <NavBar />
          <main className="min-h-screen bg-black dark:bg-black">
            {children}
          </main>
          <Footer />
          <FixedThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
