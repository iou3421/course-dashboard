import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, List, ListItem, Divider } from "@mui/material";

const StudentDetails = () => {
  const { id } = useParams();

  const student = {
    id,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    enrolledCourses: [
      { title: "Intro to Programming", grade: "A", progress: "100%" },
      { title: "Web Development", grade: "B+", progress: "85%" }
    ],
    submissions: [
      { title: "Assignment 1", status: "Submitted" },
      { title: "Assignment 2", status: "Not Submitted" }
    ]
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          👤 {student.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          📧 {student.email}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">📚 Enrolled Courses</Typography>
        <List>
          {student.enrolledCourses.map((course, i) => (
            <ListItem key={i}>
              {course.title} — Grade: {course.grade} — Progress: {course.progress}
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">📝 Submissions</Typography>
        <List>
          {student.submissions.map((sub, i) => (
            <ListItem key={i}>
              {sub.title} — {sub.status}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default StudentDetails;
