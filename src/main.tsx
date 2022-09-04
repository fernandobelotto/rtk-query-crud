import { ChakraProvider } from "@chakra-ui/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { api } from "./api";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApiProvider>
  </React.StrictMode>
);
