import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import LoadingProvider from "./context/IsLoadingContext";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "dklYEi8WXtwvk0fzSGDLwvhxpIRmpPBp", // or infuraId
    walletConnectProjectId: "4670d7d3e8cbc4db4058104d83472b22" || "",

    // Required
    appName: "LiveLoud",

    // Optional
    appDescription: "DApp Social Media",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <LoadingProvider>
          <App />
          </LoadingProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </Provider>
  </HashRouter>
);
