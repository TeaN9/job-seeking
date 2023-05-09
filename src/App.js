import React from "react";
import SearchAppBar from "./components/SearchAppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes/AppRoutes.js";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff7043",
    },
    secondary: {
      main: "#26c6da",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
