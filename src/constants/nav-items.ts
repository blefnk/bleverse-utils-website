import { REPOSITORY_URL } from "./repository-info";

export const navItems = {
  mainNav: [
    {
      id: "tools",
      title: "Utils",
      href: "/utils",
      external: false,
    },
    {
      id: "about",
      title: "About",
      href: "/about",
      external: false,
    },
    {
      id: "github",
      title: "GitHub",
      href: REPOSITORY_URL,
      external: true,
    },
    {
      id: "twitter",
      title: "Twitter",
      href: "https://x.com/bleverse_com",
      external: true,
    },
  ],
  sidebarNav: [
    {
      id: "tools",
      title: "Utils",
      items: [
        {
          id: "clock",
          title: "Clock",
          href: "/utils/clock",
          items: [],
        },
        {
          id: "stopwatch",
          title: "Stopwatch",
          href: "/utils/clock/stopwatch",
          items: [],
        },
        {
          id: "color-picker",
          title: "Color Picker",
          href: "/utils/color/picker",
          items: [],
        },
        {
          id: "random-color",
          title: "Random Color",
          href: "/utils/color/random",
          items: [],
        },
        {
          id: "binary-code",
          title: "Binary Code",
          href: "/utils/crypto/binary",
          items: [],
        },
        {
          id: "caesar-cipher",
          title: "Caesar Cipher",
          href: "/utils/crypto/caesar-cipher",
          items: [],
        },
        {
          id: "hex-code",
          title: "Hex Code",
          href: "/utils/crypto/hex",
          items: [],
        },
        {
          id: "morse-code",
          title: "Morse Code",
          href: "/utils/crypto/morse",
          items: [],
        },
        {
          id: "qr-code",
          title: "QR Code",
          href: "/utils/crypto/qr-code",
          items: [],
        },
        {
          id: "password-generator",
          title: "Password Generator",
          href: "/utils/security/password-generator",
          items: [],
        },
        {
          id: "length",
          title: "Length",
          href: "/utils/units/length",
          items: [],
        },
        {
          id: "css-minifier",
          title: "CSS Minifier",
          href: "/utils/dev/css",
          items: [],
        },
        {
          id: "json-formatter",
          title: "JSON Formatter",
          href: "/utils/dev/json",
          items: [],
        },
        {
          id: "text-converter",
          title: "Text Converter",
          href: "/utils/text",
          items: [],
        },
        {
          id: "currency",
          title: "Currency Converter",
          href: "/utils/currency",
          items: [],
        },
        {
          id: "todo",
          title: "Todo List",
          href: "/utils/todo",
          items: [],
        },
      ],
    },
  ],
} as const;
