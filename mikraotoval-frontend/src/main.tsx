import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import RtlProvider from "./contexts/RtlProvider";
import { Container } from "@mui/material";
import Router from "./components/Router/Router";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RtlProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </RtlProvider>
  </React.StrictMode>
);
