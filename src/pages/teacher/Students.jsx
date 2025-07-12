import {
    Card, CardContent, Typography, Table, TableHead,
    TableRow, TableCell, TableBody, Button
  } from "@mui/material";
  import { Link } from "react-router-dom";
  
  const Students = () => {
    const students = [
      { id: 1, name: "Ahmed Ali", email: "ahmed@example.com" },
      { id: 2, name: "Sara Khan", email: "sara@example.com" },
      { id: 3, name: "John Smith", email: "john@example.com" },
    ];
  
    return (
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            👥 Students
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/teacher/students/${student.id}`}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  };
  
  export default Students;
  