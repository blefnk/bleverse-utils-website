"use client";

import { useState } from "react";

import { decode, encode } from "morsee";

import { Button } from "~/islands/primitives/button";
import { Label } from "~/islands/primitives/label";
import { Textarea } from "~/islands/primitives/textarea";
import { useScopedI18n } from "~/utils/client/i18n";

export function Morse() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const t = useScopedI18n("pages.tools.morse-code");

  function handleCodeTextToMorseCode() {
    const encoded = encode(text);
    setMorse(encoded);
    setText("");
  }

  function handleDecodeMorseCodeToText() {
    const decoded = decode(morse);
    setText(decoded);
    setMorse("");
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
        <Button onClick={handleCodeTextToMorseCode}>{t("actions.code")}</Button>
      </div>
      <div>
        <Label htmlFor="morse">{t("decode")}</Label>
        <Textarea
          id="morse"
          value={morse}
          onChange={(e) => setMorse(e.target.value)}
        />
        <Button onClick={handleDecodeMorseCodeToText}>
          {t("actions.decode")}
        </Button>
      </div>
    </section>
  );
}
