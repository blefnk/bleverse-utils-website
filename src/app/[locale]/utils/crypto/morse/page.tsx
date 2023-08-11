import { cnBase } from "tailwind-variants";

import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { Morse } from "./morse";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.morse-code");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.morse-code");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>{t("title")}</h1>
      <Morse />
    </main>
  );
}
