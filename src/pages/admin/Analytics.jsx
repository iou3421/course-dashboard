import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import { BarChart, PieChart } from "@mui/x-charts";
  
  const studentsPerTeacher = [
    { teacher: "Mr. Ali", students: 120 },
    { teacher: "Ms. Fatima", students: 95 },
    { teacher: "Dr. Youssef", students: 70 },
  ];
  
  const courseStatus = [
    { label: "Completed", value: 60 },
    { label: "In Progress", value: 30 },
    { label: "Not Started", value: 10 },
  ];
  
  const topTeachers = [
    { name: "Mr. Ali", courses: 4, avgCompletion: "89%" },
    { name: "Ms. Fatima", courses: 3, avgCompletion: "83%" },
    { name: "Dr. Youssef", courses: 2, avgCompletion: "78%" },
  ];
  
  const AdminAnalytics = () => {
    return (
      <Box>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          📊 Platform Analytics
        </Typography>
  
        <Grid container spacing={3} mb={3}>
       
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  👥 Students Per Teacher
                </Typography>
                <BarChart
                  height={300}
                  series={[
                    {
                      data: studentsPerTeacher.map((t) => t.students),
                      label: "Students",
                    },
                  ]}
                  xAxis={[
                    {
                      data: studentsPerTeacher.map((t) => t.teacher),
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
                <Typography variant="h6" gutterBottom>
                  📘 Course Completion Status
                </Typography>
                <PieChart
                  height={300}
                  series={[
                    {
                      data: courseStatus.map((s) => ({
                        id: s.label,
                        value: s.value,
                        label: s.label,
                      })),
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
  
      
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🏆 Top Performing Teachers
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Courses</TableCell>
                  <TableCell>Avg. Completion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topTeachers.map((t, i) => (
                  <TableRow key={i}>
                    <TableCell>{t.name}</TableCell>
                    <TableCell>{t.courses}</TableCell>
                    <TableCell>{t.avgCompletion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    );
  };
  
  export default AdminAnalytics;
  