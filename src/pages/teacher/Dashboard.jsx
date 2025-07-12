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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  School,
  Groups,
  VideoLibrary,
  Assignment,
  EventNote,
  Update,
} from "@mui/icons-material";
import { BarChart, PieChart } from "@mui/x-charts";

/* ───── MOCK DATA ───── */
const teacherStats = {
  totalCourses: 3,
  totalStudents: 295,
  totalVideos: 12,
  totalAssignments: 5,
};

const statCards = [
  { label: "Courses", value: teacherStats.totalCourses, icon: <School />, color: "#1976d2" },
  { label: "Students", value: teacherStats.totalStudents, icon: <Groups />, color: "#2e7d32" },
  { label: "Videos", value: teacherStats.totalVideos, icon: <VideoLibrary />, color: "#0288d1" },
  { label: "Assignments", value: teacherStats.totalAssignments, icon: <Assignment />, color: "#f57c00" },
];

const studentsPerCourse = [
  { course: "Intro to Programming", students: 120 },
  { course: "Web Development", students: 95 },
  { course: "Database Systems", students: 80 },
];

const gradeDistribution = [
  { grade: "A", value: 40 },
  { grade: "B", value: 30 },
  { grade: "C", value: 20 },
  { grade: "F", value: 10 },
];

const upcomingTasks = [
  { title: "Live class: JavaScript Basics", due: "Tomorrow at 10 AM" },
  { title: "Assignment: HTML Layout", due: "Due in 2 days" },
  { title: "Midterm Review Session", due: "Friday at 4 PM" },
];

const recentActivity = [
  { message: "Sara Khan submitted Assignment 2", time: "5 min ago" },
  { message: "John Smith joined Web Development", time: "20 min ago" },
  { message: "Video added to Database Systems", time: "1 h ago" },
];

const courseEngagement = [
  { title: "Intro to Programming", completion: "92%", avgWatch: "89%" },
  { title: "Web Development", completion: "85%", avgWatch: "76%" },
  { title: "Database Systems", completion: "90%", avgWatch: "83%" },
];

/* ───── COMPONENT ───── */
const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        📊 Teacher Dashboard Overview
      </Typography>

      {/* Summary cards */}
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

      {/* Charts */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>👥 Students per Course</Typography>
              <BarChart
                width={isMobile ? 300 : isTablet ? 400 : 500}
                height={280}
                series={[
                  {
                    data: studentsPerCourse.map(c => c.students),
                    label: "Students",
                  },
                ]}
                xAxis={[
                  {
                    data: studentsPerCourse.map(c => c.course),
                    scaleType: "band",
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>📈 Grade Distribution</Typography>
              <PieChart
                height={280}
                series={[
                  {
                    data: gradeDistribution.map(g => ({
                      id: g.grade,
                      value: g.value,
                      label: g.grade,
                    })),
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tasks and Activity */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom><EventNote sx={{ mr: 1 }} /> Upcoming Tasks</Typography>
              <List>
                {upcomingTasks.map((t, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={t.title} secondary={t.due} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom><Update sx={{ mr: 1 }} /> Recent Activity</Typography>
              <List>
                {recentActivity.map((a, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={a.message} secondary={a.time} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Course Engagement */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>📈 Course Engagement Metrics</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Course</TableCell>
                <TableCell>Completion Rate</TableCell>
                <TableCell>Avg Video Watched</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseEngagement.map((course, idx) => (
                <TableRow key={idx}>
                  <TableCell>{course.title}</TableCell>
                  <TableCell>{course.completion}</TableCell>
                  <TableCell>{course.avgWatch}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
