import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const Exams = () => {
  const exams = [
    { id: "E101", course: "Intro to Programming", grade: "78%", pass: "88%" },
    { id: "E102", course: "Web Development", grade: "82%", pass: "91%" },
    { id: "E103", course: "Database Systems", grade: "75%", pass: "84%" },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          📝 Exams
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Exam ID</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Average Grade</TableCell>
              <TableCell>Pass Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell>{exam.id}</TableCell>
                <TableCell>{exam.course}</TableCell>
                <TableCell>{exam.grade}</TableCell>
                <TableCell>{exam.pass}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Exams;

