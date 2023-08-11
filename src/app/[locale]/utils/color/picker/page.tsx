import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { ColorPicker } from "./color-picker";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.color-picker");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.color-picker");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>{t("title")}</h1>
      <ColorPicker />
    </main>
  );
}
