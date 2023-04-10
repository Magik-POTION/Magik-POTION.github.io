import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import { Provider, MD3DarkTheme } from "react-native-paper";
import { Platform } from "react-native";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.Fragment>
      {Platform.OS === "web" ? (
        <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
        }
      `}</style>
      ) : null}
      <Provider theme={MD3DarkTheme}>
        <App />
      </Provider>
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
