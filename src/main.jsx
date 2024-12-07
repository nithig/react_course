import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QrCode } from "./components/QrCode";
import "./css/qrcode.css";
// import { UserCard } from "./components/UserCard";
// import App from './App.jsx'
// import "./css/usercard.css";

createRoot(document.getElementById("root")).render(
  <>
    <QrCode />
    {/* <UserCard /> */}
    {/* <App /> */}
  </>
);
