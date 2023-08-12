import type { GenerateMetadata } from "~/utils/types/metadata";
import { getScopedI18n } from "~/utils/server/i18n";
import { typography } from "~/utils/server/text";

import { RandomColor } from "./random-color";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.random-color");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.random-color");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>{t("title")}</h1>
      <RandomColor />
    </main>
  );
}
