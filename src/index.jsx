import "@/locales/i18n-config.js";
import "@fontsource-variable/figtree";
import "@fontsource-variable/rubik";
import "@fontsource/barlow";

import { myTheme } from "@/styles/theme.js";
import { FirebaseApp } from "@/utils/firebase.js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

FirebaseApp.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
