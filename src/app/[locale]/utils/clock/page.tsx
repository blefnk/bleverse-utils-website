import type { GenerateMetadata } from "~/utils/types/metadata";
import { getScopedI18n } from "~/utils/server/i18n";
import { typography } from "~/utils/server/text";

import { Clock } from "./clock";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.clock");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.clock");

  return (
    <main className="container grid h-full place-content-center text-center">
      <h1 className={typography.h1}>{t("title")}</h1>
      <Clock />
    </main>
  );
}
