import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import { ControllerContext, ControllerAPIValue } from "@/context/ControllerContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [apiConfig, setApiConfig] = useState(ControllerAPIValue);
  const value = { apiConfig, setApiConfig };
  return (

    <ControllerContext.Provider value={value}>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </ControllerContext.Provider>
  );
}
