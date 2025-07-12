import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import {
    People,
    School,
    Group,
    AdminPanelSettings,
    Update,
  } from "@mui/icons-material";
  import { BarChart, PieChart } from "@mui/x-charts";
  
  const adminStats = {
    totalTeachers: 8,
    totalStudents: 530,
    totalCourses: 26,
    activeUsers: 400,
  };
  
  const statCards = [
    { label: "Teachers", value: adminStats.totalTeachers, icon: <AdminPanelSettings />, color: "#6a1b9a" },
    { label: "Students", value: adminStats.totalStudents, icon: <Group />, color: "#2e7d32" },
    { label: "Courses", value: adminStats.totalCourses, icon: <School />, color: "#0288d1" },
    { label: "Active Users", value: adminStats.activeUsers, icon: <People />, color: "#f57c00" },
  ];
  
  const coursesPerTeacher = [
    { name: "Ms. A", count: 5 },
    { name: "Mr. B", count: 3 },
    { name: "Dr. C", count: 7 },
    { name: "Ms. D", count: 4 },
  ];
  
  const userDistribution = [
    { role: "Teachers", value: 8 },
    { role: "Students", value: 530 },
    { role: "Admins", value: 2 },
  ];
  
  const platformActivity = [
    { message: "New teacher registered", time: "10 min ago" },
    { message: "Course 'React Basics' added", time: "1 hour ago" },
    { message: "Student count passed 500", time: "Today" },
  ];
  
  const AdminDashboard = () => (
    <Box>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        📊 Admin Dashboard Overview
      </Typography>
  
      <Grid container spacing={3} mb={3}>
        {statCards.map((s, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2, borderLeft: `6px solid ${s.color}`, boxShadow: 1 }}>
              <Avatar sx={{ bgcolor: s.color, mr: 2 }}>{s.icon}</Avatar>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">{s.label}</Typography>
                <Typography variant="h5" fontWeight={600}>{s.value}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
  
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>📘 Courses per Teacher</Typography>
              <BarChart
                width={450}
                height={280}
                series={[{ data: coursesPerTeacher.map(t => t.count), label: "Courses" }]}
                xAxis={[{ data: coursesPerTeacher.map(t => t.name), scaleType: "band" }]}
              />
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>🧑‍💼 User Role Distribution</Typography>
              <PieChart
                height={280}
                series={[{
                  data: userDistribution.map(r => ({
                    id: r.role,
                    value: r.value,
                    label: r.role,
                  })),
                }]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Update sx={{ mr: 1 }} />
            Recent Platform Activity
          </Typography>
          <List>
            {platformActivity.map((a, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={a.message} secondary={a.time} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
  
  export default AdminDashboard;
  