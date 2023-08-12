import type { GenerateMetadata } from "~/utils/types/metadata";
import { getScopedI18n } from "~/utils/server/i18n";
import { typography } from "~/utils/server/text";

import { TextConverter } from "./text-converter";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.text-converter");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.text-converter");

  return (
    <main className="container">
      <h1 className={typography.h1}>{t("title")}</h1>
      <TextConverter />
    </main>
  );
}
