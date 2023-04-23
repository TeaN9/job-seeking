import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function JobCard({ job }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Divider />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.salaryLow} - {job.salaryHigh} $
        </Typography>
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
