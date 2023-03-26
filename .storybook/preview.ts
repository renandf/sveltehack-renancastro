import { withThemeByDataAttribute } from "@storybook/addon-styling";
import '../src/app.postcss';
import type { Preview } from '@storybook/svelte';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
      cupcake: "cupcake",
      bumblebee: "bumblebee",
      emerald: "emerald",
      corporate: "corporate",
      synthwave: "synthwave",
      retro: "retro",
      cyberpunk: "cyberpunk",
      valentine: "valentine",
      halloween: "halloween",
      garden: "garden",
      forest: "forest",
      aqua: "aqua",
      lofi: "lofi",
      pastel: "pastel",
      fantasy: "fantasy",
      wireframe: "wireframe",
      black: "black",
      luxury: "luxury",
      dracula: "dracula",
      cmyk: "cmyk",
      autumn: "autumn",
      business: "business",
      acid: "acid",
      lemonade: "lemonade",
      night: "night",
      coffee: "coffee",
      winter: "winter"
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
