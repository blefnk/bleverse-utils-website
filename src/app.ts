//? To reduce the number of config files, we aim to combine everything into a single file.
//? Materials about @satisfies: https://youtu.be/49gHWuepxxE, https://youtu.be/G1RtAmI0-vc

import { Network, networks } from "~/utils/appts/socials";

export type Config = {
  name: string; // The name of the site
  social: Network[]; // List of socials
};

export const appts = {
  name: "Bleverse",
  social: networks({
    youtube: "@bleverse_com",
    discord: "Pb8uKbwpsJ",
    facebook: "groups/bleverse",
    twitter: "bleverse_com",
    github: "blefnk",
  }),
} satisfies Config;

export default appts;
