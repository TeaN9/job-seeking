import React from "react";
import SearchAppBar from "./components/SearchAppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import jobs from "./jobs.json";
import JobCard from "./components/JobCard.js";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      {jobs.slice(0, 10).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ThemeProvider>
  );
}

export default App;
