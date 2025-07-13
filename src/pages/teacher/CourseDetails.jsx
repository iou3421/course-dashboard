import React, { useState } from "react";
import {
  Card, CardContent, Typography, Table, TableHead,
  TableRow, TableCell, TableBody, Button, TextField, Dialog,
  DialogActions, DialogContent, DialogTitle
} from "@mui/material";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

  const courseInfo = {
    id,
    title: "Intro to Programming",
    description: "A beginner-friendly course on programming fundamentals.",
  };

  const [videos, setVideos] = useState([
    { id: 1, title: "Welcome & Setup", file: null, preview: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Variables & Data Types", file: null, preview: "https://www.w3schools.com/html/movie.mp4" },
  ]);

  const [open, setOpen] = useState(false);
  const [editVideo, setEditVideo] = useState(null);
  const [videoData, setVideoData] = useState({ title: "", file: null, preview: "" });

  const handleOpen = (video = null) => {
    setEditVideo(video);
    setVideoData(
      video
        ? { title: video.title, file: video.file, preview: video.preview }
        : { title: "", file: null, preview: "" }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditVideo(null);
    setVideoData({ title: "", file: null, preview: "" });
  };

  const handleSave = () => {
    if (!videoData.file) return;

    if (editVideo) {
      setVideos((prev) =>
        prev.map((v) =>
          v.id === editVideo.id ? { ...v, ...videoData } : v
        )
      );
    } else {
      const newId = Math.max(...videos.map((v) => v.id)) + 1;
      setVideos([...videos, { id: newId, ...videoData }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoData({
        ...videoData,
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          📘 {courseInfo.title}
        </Typography>
        <Typography sx={{ mb: 2 }}>{courseInfo.description}</Typography>

        <Button variant="contained" onClick={() => handleOpen()} sx={{ mb: 2 }}>
          + Add New Video
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Video Title</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.map((video) => (
              <TableRow key={video.id}>
                <TableCell>{video.title}</TableCell>
                <TableCell>
                  {video.preview ? (
                    <video width="250" controls>
                      <source src={video.preview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    "No preview"
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button size="small" onClick={() => handleOpen(video)}>Edit</Button>
                  <Button size="small" color="error" onClick={() => handleDelete(video.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

   
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editVideo ? "Edit Video" : "Add New Video"}</DialogTitle>
          <DialogContent>
            <TextField
              label="Video Title"
              fullWidth
              margin="normal"
              value={videoData.title}
              onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
            />
            <Button variant="outlined" component="label">
              Choose Video File
              <input type="file" accept="video/mp4" hidden onChange={handleFileChange} />
            </Button>
            {videoData.preview && (
              <video width="100%" controls style={{ marginTop: 16 }}>
                <source src={videoData.preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" disabled={!videoData.title || !videoData.file}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default CourseDetails;
