import React from "react";
import SearchAppBar from "./components/SearchAppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage.js";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage.js";
import { useState, createContext } from "react";
import SignInPage from "./pages/SignInPage.js";

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

export const LogInStatusContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {};

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LogInStatusContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          handleLogIn,
        }}
      >
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<DetailPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </LogInStatusContext.Provider>
    </ThemeProvider>
  );
}

export default App;
