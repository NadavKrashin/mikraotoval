import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RtlProvider from "./contexts/RtlProvider";
import { Typography } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RtlProvider>
      <ThemeProvider theme={theme}>
        <main>
          <Typography variant="h1">מקראות תובל</Typography>
        </main>
      </ThemeProvider>
    </RtlProvider>
  </React.StrictMode>
);
