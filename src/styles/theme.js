import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FFE8B8",
    light: "#FFFAF0",
  },
  secondary: "#323210",
  black: "#101001",

  React: "#087EA5",
  Redux: "#765abc",
  TypeScript: "#2F75C0",
  "Node.js": "#026E00",
  ES6: "#f5c50f",
  HTML: "#dd5d25",
  CSS: "#255ddd",
  Bootstrap: "#884ff4",
  Firebase: "#f7c55c",
  Vercel: "#292e3e",
  ChakraUI: "#43c2bd",
};

const fonts = {
  heading: `'Rubik Variable', sans-serif`,
  body: `'Figtree Variable', sans-serif`,
};

export const myTheme = extendTheme({ colors, fonts });
