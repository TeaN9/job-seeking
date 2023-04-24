import { Box, Container, Grid, Pagination } from "@mui/material";
import React from "react";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";

function HomePage() {
  console.log(jobs.length);
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1, mb: 3 }}>
        {jobs.slice(0, 10).map((job) => (
          <Grid item key={job.id} xs={12} md={6} lg={3}>
            <JobCard key={job.id} job={job} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginBottom={3}>
        <Pagination count={2} color="secondary" shape="rounded" />
      </Box>
    </Container>
  );
}

export default HomePage;
