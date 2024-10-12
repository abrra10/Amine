import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CursorProvider from "./context/CursorContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CursorProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CursorProvider>
  </AuthProvider>
);
