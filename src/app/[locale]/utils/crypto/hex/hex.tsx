"use client";

import { useState } from "react";

import { Label } from "~/islands/primitives/label";
import { Textarea } from "~/islands/primitives/textarea";
import { useScopedI18n } from "~/utils/client/i18n";

export function Hex() {
  const [text, setText] = useState("");
  const [hex, setHex] = useState("");
  const t = useScopedI18n("pages.tools.hex-code");

  async function handleCodeTextToHexCode() {
    const { default: Hex } = await import("hex-encoding");
    const encoded = Hex.encodeStr(text);
    setHex(encoded);
    setText("");
  }

  async function handleDecodeHexCodeToText() {
    const { default: Hex } = await import("hex-encoding");
    const decoded = Hex.decodeStr(hex);
    setText(decoded);
    setHex("");
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="text">{t("encode")}</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={handleCodeTextToHexCode}>
          {t("actions.code")}
        </button>
      </div>
      <div>
        <Label htmlFor="hex">{t("decode")}</Label>
        <Textarea
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
        <button type="button" onClick={handleDecodeHexCodeToText}>
          {t("actions.decode")}
        </button>
      </div>
    </section>
  );
}
