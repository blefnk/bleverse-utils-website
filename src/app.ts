//? To reduce the number of config files, we aim to combine everything into a single file.
//? Materials about @satisfies: https://youtu.be/49gHWuepxxE, https://youtu.be/G1RtAmI0-vc

import { networks } from "~/utils/server/appts/socials";
import { Config, HeroHeader, ContentSection } from "~/utils/types/appts";

// ===================================================================================== //

export const appts = {
  name: "Utils",
  social: networks({
    youtube: "@bleverse_com",
    discord: "Pb8uKbwpsJ",
    facebook: "groups/bleverse",
    twitter: "bleverse_com",
    github: "blefnk",
  }),
} satisfies Config;
export default appts;

// ===================================================================================== //

export const REPOSITORY_OWNER = "blefnk";
export const REPOSITORY_NAME = "utils";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;

// ===================================================================================== //

const baseUrl = "https://utils.bleverse.com";

export const settings = {
  themeToggleEnabled: true,
};

export const siteConfig = {
  name: "Utils",
  author: "Bleverse",
  description: "The best React 18 & Next.js 13 utils just for you.",
  keywords: [
    "blefonix",
    "bleverse",
    "landing page",
    "next.js",
    "nextjs",
    "radix ui",
    "react",
    "react",
    "relivator",
    "shadcn ui",
    "shadcn/ui",
    "starter",
    "tailwind css",
    "template",
    "tools",
    "utils",
  ],
  url: {
    base: baseUrl,
    author: "https://github.com/blefnk",
  },
  ogImage: `${baseUrl}/og-image.png`,
};

export const contactConfig = {
  email: "blefnk@gmail.com",
};

// ===================================================================================== //

export const heroHeader: HeroHeader = {
  header: `Next.js Apps Made Easy`,
  subheader: `The best React 18 & Next.js 13 utils just for you.`,
  // image: `/hero-img.webp`,
};

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What Makes Utils Possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      // image: `/next.svg`,
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully Designed Components`,
      // image: `/shadcn.svg`,
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`,
      // image: `/vercel.svg`,
    },
  ],
};

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why You Need to Download Utils`,
  // image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
};
