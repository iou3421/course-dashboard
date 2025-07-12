import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseSubmit = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = () => {
    console.log("Submitting course:", { title, subject, description, videoFile });
    alert("Course submitted for approval!");
    navigate("/teacher/courses");
  };

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          ➕ Submit New Course
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ display: "grid", gap: 2 }}>
          <TextField
            label="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <TextField
            label="Main Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
          />

          <TextField
            label="Brief Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />

          <Button variant="outlined" component="label">
            Upload Short Video
            <input
              type="file"
              accept="video/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {videoFile && (
            <Typography variant="body2">
              Selected: {videoFile.name}
            </Typography>
          )}

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={() => navigate("/teacher/courses")} sx={{ mr:2 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!title || !subject || !description || !videoFile}
            >
              Submit for Approval
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseSubmit;
