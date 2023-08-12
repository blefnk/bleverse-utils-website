"use client";

import { useState } from "react";

import { CopyButton } from "~/islands/common/copy-button";
import { Button } from "~/islands/primitives/button";
import { useHotkeys } from "~/hooks/use-hotkeys";
import { useScopedI18n } from "~/utils/client/i18n";
import { typography } from "~/utils/server/text";
import { convertHexToHSL, convertHexToRGB } from "~/utils/server/colors";

export function RandomColor() {
  const t = useScopedI18n("pages.tools.random-color");
  const [color, setColor] = useState("#000000");

  function handleGenerateNewColor() {
    setColor("#" + Math.random().toString(16).slice(-6));
  }

  useHotkeys([["Space", handleGenerateNewColor]]);

  const colorInRGB = convertHexToRGB(color);
  const colorInHSL = convertHexToHSL(color);

  return (
    <section>
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <p className={typography.h3}>Hex: {color}</p>
          <CopyButton className="h-7 w-7" valueToCopy={color} />
        </div>
        <div className="flex items-center justify-between">
          <p className={typography.h3}>RGB: {colorInRGB}</p>
          <CopyButton className="h-7 w-7" valueToCopy={colorInRGB} />
        </div>
        <div className="flex items-center justify-between">
          <p className={typography.h3}>HSL: {colorInHSL}</p>
          <CopyButton className="h-7 w-7" valueToCopy={colorInHSL} />
        </div>
      </div>
      <button
        className="mx-auto mt-4 block h-16 w-16 rounded-md ring-1 ring-border ring-offset-2 ring-offset-background transition-colors duration-500"
        style={{ backgroundColor: color }}
        aria-hidden
        onClick={handleGenerateNewColor}
      />
      <Button className="mx-auto mt-6" onClick={handleGenerateNewColor}>
        {t("generate")}
      </Button>
    </section>
  );
}
