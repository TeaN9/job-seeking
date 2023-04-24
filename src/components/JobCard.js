import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const skillSet = job.skills;
  const navigate = useNavigate();

  return (
    <Card sx={{}}>
      <CardContent>
        <Typography variant="h5" component="div" marginBottom={1}>
          {job.title}
        </Typography>
        <Divider />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.salaryLow} - {job.salaryHigh} $
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {skillSet.map((skill, index) => (
            <Chip key={index} label={skill} color="secondary" clickable />
          ))}
        </Stack>
        <Typography variant="body2" marginTop={1}>
          {job.description}
        </Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: "center" }}
        onClick={() => navigate(`/job/${job.id}`)}
      >
        <Button variant="contained" size="medium">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
