"use client";

import type { ComponentProps } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { Toaster } from "~/islands/primitives/toast/toaster";
import { I18nProviderClient } from "~/utils/client/i18n";
import { queryClient } from "~/utils/server/query";
import en from "~/data/i18n/en";

export function ThemeProvider({
  children,
  ...props
}: WithChildren<ComponentProps<typeof NextThemeProvider>>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
}

export function Providers({
  children,
  locale,
}: WithChildren<{ locale: string }>) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProviderClient locale={locale} fallbackLocale={en}>
          {children}
        </I18nProviderClient>
      </QueryClientProvider>
      <Toaster />
    </ThemeProvider>
  );
}
