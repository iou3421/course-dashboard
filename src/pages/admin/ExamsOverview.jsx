import {
    Box,
    Typography,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
  
  const exams = [
    {
      title: "Intro to JS - Midterm",
      course: "Intro to Programming",
      submissions: 45,
      avgGrade: "82%",
      passRate: "91%",
      completionRate: "95%",
    },
    {
      title: "HTML/CSS Quiz",
      course: "Web Development",
      submissions: 38,
      avgGrade: "76%",
      passRate: "84%",
      completionRate: "89%",
    },
    {
      title: "SQL Final Exam",
      course: "Database Systems",
      submissions: 42,
      avgGrade: "88%",
      passRate: "95%",
      completionRate: "93%",
    },
  ];
  
  const ExamsOverview = () => {
    return (
      <Box>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          📝 Exams Overview
        </Typography>
  
        <Card elevation={2}>
          <CardContent>
            <Table component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Exam</strong></TableCell>
                  <TableCell><strong>Course</strong></TableCell>
                  <TableCell align="right"><strong>Submissions</strong></TableCell>
                  <TableCell align="right"><strong>Avg Grade</strong></TableCell>
                  <TableCell align="right"><strong>Pass Rate</strong></TableCell>
                  <TableCell align="right"><strong>Completion</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exams.map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell>{exam.title}</TableCell>
                    <TableCell>{exam.course}</TableCell>
                    <TableCell align="right">{exam.submissions}</TableCell>
                    <TableCell align="right">{exam.avgGrade}</TableCell>
                    <TableCell align="right">{exam.passRate}</TableCell>
                    <TableCell align="right">{exam.completionRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    );
  };
  
  export default ExamsOverview;
  