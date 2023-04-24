import React from "react";
import SearchAppBar from "./components/SearchAppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage.js";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage.js";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
