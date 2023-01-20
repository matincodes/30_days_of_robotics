import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--brandColor": "#2CE2C2",
  "--my-red": "#db4437",
  "--my-yellow": "#FAFEE7",
  "--my-green": "#1F7B6B",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--white": props["--my-white"],
  "--black": props["--my-black"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // Brand
  "--brand-primary": props["--brandColor"],

  // Buttons
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brandColor"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  // State
  "--state-info-color": props["--brandColor"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  // Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brandColor"],
});
