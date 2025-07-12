import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
} from "@mui/material";

const initialSubmissions = [
  {
    id: 1,
    teacherName: "Ali Mansour",
    subject: "Intro to Machine Learning",
    description:
      "A beginner-friendly overview of ML concepts, including supervised and unsupervised learning.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    teacherName: "Fatima Al-Sayed",
    subject: "Advanced CSS Techniques",
    description:
      "Deep dive into Flexbox, Grid, animations, and responsive design best practices.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];

const AdminCourses = () => {
  const [submissions, setSubmissions] = useState(initialSubmissions);

  const handleApprove = (id) => {
    // In a real app, you'd call your backend here.
    setSubmissions((subs) => subs.filter((s) => s.id !== id));
    alert(`Approved course submission #${id}`);
  };

  const handleReject = (id) => {
    if (window.confirm("Reject this course submission?")) {
      setSubmissions((subs) => subs.filter((s) => s.id !== id));
      alert(`Rejected course submission #${id}`);
    }
  };

  if (submissions.length === 0) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          📚 Course Submissions
        </Typography>
        <Typography>No pending submissions.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        📚 Pending Course Submissions
      </Typography>

      <Grid container spacing={3}>
        {submissions.map((sub) => (
          <Grid item xs={12} md={6} key={sub.id}>
            <Card>
              <CardHeader
                avatar={<Avatar>{sub.teacherName.charAt(0)}</Avatar>}
                title={sub.subject}
                subheader={`By ${sub.teacherName}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {sub.description}
                </Typography>
                <video
                  width="100%"
                  controls
                  style={{ borderRadius: 4, background: "#000" }}
                >
                  <source src={sub.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="success"
                  variant="contained"
                  onClick={() => handleApprove(sub.id)}
                >
                  Approve
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={() => handleReject(sub.id)}
                >
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminCourses;
