import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./style.css";
import "swiper/css"; // Import the basic Swiper styles
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Import pagination styles
// Import the Autoplay module styles
import { BrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
