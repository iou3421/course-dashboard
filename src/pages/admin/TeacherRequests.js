import React, { useState } from "react";
import {
  Card, CardContent, Typography, Button, Grid, Box, Divider,
} from "@mui/material";

const mockApplications = [
  {
    id: 1,
    fullName: "Layla Ahmad",
    email: "layla@domain.com",
    subject: "Mathematics",
    bio: "Experienced teacher with a passion for algebra.",
    resume: "layla_resume.pdf",
  },
  {
    id: 2,
    fullName: "Omar Saeed",
    email: "omar@domain.com",
    subject: "Physics",
    bio: "Loves teaching through real-world experiments.",
    resume: "omar_resume.pdf",
  },
];

const TeacherRequests = () => {
  const [applications, setApplications] = useState(mockApplications);

  const handleDecision = (id, approved) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
    alert(`Teacher ${approved ? "approved" : "rejected"}.`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pending Teacher Applications
      </Typography>
      <Grid container spacing={2}>
        {applications.map((app) => (
          <Grid item xs={12} md={6} key={app.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{app.fullName}</Typography>
                <Typography color="textSecondary">{app.email}</Typography>
                <Typography sx={{ mt: 1 }}>
                  <strong>Subject:</strong> {app.subject}
                </Typography>
                <Typography sx={{ mt: 1 }}>{app.bio}</Typography>
                <Divider sx={{ my: 2 }} />
                <Button
                    variant="outlined"
                    color="primary"
                    href={`/${app.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    startIcon={<span role="img" aria-label="resume">📄</span>}
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  >
                    View Resume
              </Button>

                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained" color="success" onClick={() => handleDecision(app.id, true)}>
                    Approve
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDecision(app.id, false)}>
                    Reject
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeacherRequests;
