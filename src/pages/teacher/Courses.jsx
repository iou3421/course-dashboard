import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    { id: "C101", title: "Intro to Programming", students: 120, rate: "85%" },
    { id: "C102", title: "Web Development", students: 95, rate: "78%" },
    { id: "C103", title: "Database Systems", students: 80, rate: "90%" },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5">📚 Courses</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/teacher/courses/submit")}
          >
            Submit New Course
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Students Enrolled</TableCell>
              <TableCell>Completion Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>
                  <Link
                    to={`/teacher/courses/${course.id}`}
                    style={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    {course.title}
                  </Link>
                </TableCell>
                <TableCell>{course.students}</TableCell>
                <TableCell>{course.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Courses;
