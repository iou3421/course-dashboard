import { Card, CardContent, Grid, Typography } from "@mui/material";

const teacherStats = {
  totalCourses: 3,
  totalStudents: 295,
  totalVideos: 12,
  totalAssignments: 5,
};

const Dashboard = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        📊 Your Teaching Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Courses</Typography>
              <Typography variant="h4">{teacherStats.totalCourses}</Typography>
              <Typography variant="body2">Created</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#2e7d32", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Students</Typography>
              <Typography variant="h4">{teacherStats.totalStudents}</Typography>
              <Typography variant="body2">Across Courses</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#0288d1", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Videos</Typography>
              <Typography variant="h4">{teacherStats.totalVideos}</Typography>
              <Typography variant="body2">Uploaded</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#f57c00", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">Assignments</Typography>
              <Typography variant="h4">{teacherStats.totalAssignments}</Typography>
              <Typography variant="body2">Given</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
