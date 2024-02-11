import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RtlProvider from "./contexts/RtlProvider";
import { Container } from "@mui/material";
import Router from "./components/Router/Router";

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RtlProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Router />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </RtlProvider>
  </React.StrictMode>
);
