import { Inter } from "next/font/google";

import type { GenerateMetadata } from "~/@types/metadata";
import { Footer } from "~/islands/layout/footer";
import { Navbar } from "~/islands/layout/navbar";
import { Providers } from "~/contexts/providers";
import { defaultLocale, localeList } from "~/locales";

import "~/styles/globals.css";
import { UnifiedBleverseFooter } from "~/islands/bleverse/unified-bleverse-footer";
import { UnifiedBleverseHeader } from "~/islands/bleverse/unified-bleverse-header";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata: GenerateMetadata = () => {
  return {
    title: {
      default: "Bleverse Utils",
      template: "%s | Bleverse Utils",
    },
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
    viewport: "width=device-width, initial-scale=1",
    creator: "Bleverse",
    publisher: "Bleverse",
    authors: [{ name: "Bleverse" }],
    robots: "index, follow",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    applicationName: "Bleverse Utils",
    alternates: {
      canonical: "https://utils.bleverse.com",
    },
    openGraph: {
      type: "website",
      locale: defaultLocale,
      alternateLocale: localeList.filter((locale) => locale !== defaultLocale),
      siteName: "Bleverse Utils",
      url: "https://utils.bleverse.com",
      title: "Bleverse Utils",
      description: "The best React 18 & Next.js 13 utils just for you.",
      images: [
        {
          url: "/og-image.png",
          width: 1280,
          height: 640,
          alt: "Bleverse Utils",
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
  params,
}: WithChildren<PageParams>) {
  return (
    <html
      lang={params.locale}
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className="grid min-h-screen grid-rows-[4rem,1fr,min-content] bg-background text-foreground antialiased"
        style={inter.style}
      >
        <Providers locale={params.locale}>
          <UnifiedBleverseHeader />
          {children}
          <UnifiedBleverseFooter />
        </Providers>
      </body>
    </html>
  );
}
