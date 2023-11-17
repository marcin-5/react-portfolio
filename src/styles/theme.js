import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FFE8B8",
    light: "#FFFAF0",
  },
  secondary: "#323210",
  black: "#101001",
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export const myTheme = extendTheme({ colors, fonts });
