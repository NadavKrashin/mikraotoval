import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RtlProvider from "./contexts/RtlProvider";
import SingleQuestion from "./components/Quiz/SingleQuestion/SingleQuestion";

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RtlProvider>
      <ThemeProvider theme={theme}>
        <main>
          <SingleQuestion
            questionTitle="מי היה ראש הממשלה הראשון"
            questionOptions={[
              { id: 1, text: "בן גוריון", isCorrect: true },
              {
                id: 2,
                text: "לוי אשכול",
                isCorrect: false,
              },
              {
                id: 3,
                text: "גולדה מאיר",
                isCorrect: false,
              },
              {
                id: 4,
                text: "יצחק רבין",
                isCorrect: false,
              },
            ]}
            isMultipleChoice={false}
          />
        </main>
      </ThemeProvider>
    </RtlProvider>
  </React.StrictMode>
);
