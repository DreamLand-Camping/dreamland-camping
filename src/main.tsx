import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";

const brand: MantineColorsTuple = [
  "#030708",
  "#4bc5d3",
  "#8cc63e",
  "#146030",
  "#fffc65",
  "#eb4b4b",
  "#ecb849",
  "#f5622a",
  "#ecb849",
  "#f5622a",
];

const theme = createTheme({
  colors: {
    brand,
  },
  primaryColor: "brand",
  fontFamily: "Lato, sans-serif",
  headings: { fontFamily: "Roboto, serif" },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
