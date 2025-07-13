import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const TeacherRegister = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    bio: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Send form data to backend (use FormData if file upload is needed)
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Teacher Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="fullName" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Subject" name="subject" margin="normal" required onChange={handleChange} />
          <TextField
            fullWidth
            label="Brief Bio"
            name="bio"
            margin="normal"
            multiline
            rows={3}
            onChange={handleChange}
          />
          <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
            Upload Resume
            <input hidden type="file" name="resume" onChange={handleChange} />
          </Button>
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 3 }}>
            Submit for Review
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TeacherRegister;
