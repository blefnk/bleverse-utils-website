import ky from "ky";
import { tv } from "tailwind-variants";

import type { GenerateMetadata } from "~/utils/types/metadata";
import { Currency } from "~/utils/server/currency";
import { env } from "~/utils/server/appts/env.mjs";
import { getScopedI18n } from "~/utils/server/i18n";
import { typography } from "~/utils/server/text";

import { CurrencyConverter } from "./currency-converter";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.currency");

  return {
    title: t("title"),
    metadataBase: new URL("https://utils.bleverse.com"),
    description: "The best React 18 & Next.js 13 utils just for you.",
    keywords: "nextjs, utils, react, tools, bleverse, blefonix",
  };
};

export type CurrencyResponse = {
  success: boolean;
  timestamp: number;
  base: "EUR";
  date: string;
  rates: Record<Currency, number>;
};

async function getCurrencies() {
  return await ky("http://api.exchangeratesapi.io/v1/latest", {
    searchParams: {
      access_key: env.CURRENCY_API_KEY,
    },
  }).json<CurrencyResponse>();
}

export const revalidate = 10800; // 3 hours

export default async function Page() {
  const data = await getCurrencies();
  const t = await getScopedI18n("pages.tools.currency");

  return (
    <main className="container">
      <h1 className={typography.h1}>{t("title")}</h1>
      <p className="mt-2 text-muted-foreground">
        {new Date(data.timestamp * 1000).toLocaleString()}
      </p>
      <a
        className={tv({
          base: [typography.link, "text-muted-foreground"],
        })()}
        href="https://exchangeratesapi.io/"
      >
        {t("source")}
      </a>
      <CurrencyConverter data={data} />
    </main>
  );
}
