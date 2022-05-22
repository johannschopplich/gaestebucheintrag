import { defineConfig } from "unocss";
import { presetTypography } from "@unocss/preset-typography";
import { presetWind, theme } from "@unocss/preset-wind";

export default defineConfig({
  theme: {
    fontFamily: {
      heading: `"Founders Grotesk",${theme.fontFamily.sans}`,
      serif: `"Gauthier FY",${theme.fontFamily.serif}`,
    },
  },
  presets: [presetWind(), presetTypography()],
  shortcuts: {
    heading: "text-lg font-heading font-500 leading-tight",
    subheading: "font-serif italic leading-tight",
    "un-divide": "divide-y-4 divide-black dark:divide-white",
  },
});
