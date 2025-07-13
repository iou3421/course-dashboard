import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Exams = () => {
  const [exams, setExams] = useState([
    { id: "E101", title: "Midterm Exam", course: "Intro to Programming", pass: "88%" },
    { id: "E102", title: "Final Project", course: "Web Development", pass: "91%" },
  ]);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", course: "", file: null });

  const courses = [
    { id: "C101", name: "Intro to Programming" },
    { id: "C102", name: "Web Development" },
    { id: "C103", name: "Database Systems" },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setForm({ title: "", course: "", file: null });
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!form.title || !form.file) {
      alert("Please provide a title and attach a PDF.");
      return;
    }

    const newExam = {
      id: `E${100 + exams.length + 1}`,
      title: form.title,
      course: form.course ? form.course : "Unlinked",
      pass: "—",
    };

    setExams((prev) => [...prev, newExam]);
    handleClose();
  };

  return (
    <Box position="relative">
      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            📝 Exams
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Exam ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Linked Course</TableCell>
                <TableCell>Pass Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>{exam.id}</TableCell>
                  <TableCell>{exam.title}</TableCell>
                  <TableCell>
                    {exam.course !== "" ? exam.course : "Unlinked"}
                  </TableCell>
                  <TableCell>{exam.pass}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Floating Button */}
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          backgroundColor: "#0d2c42",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
      >
        <AddIcon />
      </Fab>

      {/* Add Exam Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Exam</DialogTitle>
        <DialogContent>
          <TextField
            label="Exam Title"
            fullWidth
            margin="normal"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Link to Course</InputLabel>
            <Select
              value={form.course}
              label="Link to Course"
              onChange={(e) => setForm({ ...form, course: e.target.value })}
            >
              <MenuItem value="">None</MenuItem>
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.name}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
            Upload PDF
            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            />
          </Button>

          {form.file && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected File: {form.file.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Save Exam
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Exams;
