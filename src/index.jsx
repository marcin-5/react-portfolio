import "@fontsource/barlow";
import "@fontsource-variable/figtree";
import "@fontsource-variable/rubik";
import "@/locales/i18n-config.js";

import { myTheme } from "@/styles/theme.js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
