import { Inter } from "next/font/google";
import { siteConfig } from "~/app";

import type { GenerateMetadata } from "~/utils/types/metadata";
import { Providers } from "~/islands/contexts/providers";
import { defaultLocale, localeList } from "~/data/i18n";

import "~/styles/globals.css";
import { UnifiedBleverseFooter } from "~/islands/bleverse/unified-bleverse-footer";
import { UnifiedBleverseHeader } from "~/islands/bleverse/unified-bleverse-header";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata: GenerateMetadata = () => {
  return {
    metadataBase: new URL(siteConfig.url.base),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    viewport: "width=device-width, initial-scale=1",
    creator: siteConfig.author,
    publisher: "Bleverse",
    authors: [
      {
        name: siteConfig.author,
        url: siteConfig.url.author,
      },
    ],
    robots: "index, follow",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    applicationName: "Bleverse Utils",
    alternates: {
      canonical: "https://utils.bleverse.com",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url.base}/og.jpg`],
      creator: siteConfig.author,
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: defaultLocale,
      alternateLocale: localeList.filter((locale) => locale !== defaultLocale),
      description: siteConfig.description,
      siteName: siteConfig.name,
      url: siteConfig.url.base,
      title: siteConfig.name,
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
