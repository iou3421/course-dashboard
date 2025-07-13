import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Stack,
  TextField,
  Chip,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const initialTeachers = [
  {
    id: 1,
    name: "Ali Mansour",
    email: "ali@korasati.com",
    courses: 4,
    students: 120,
    performance: "Excellent",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Fatima Al-Sayed",
    email: "fatima@korasati.com",
    courses: 3,
    students: 95,
    performance: "Very Good",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Youssef Kareem",
    email: "youssef@korasati.com",
    courses: 2,
    students: 70,
    performance: "Good",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const performanceColorMap = {
  Excellent: "success",
  "Very Good": "primary",
  Good: "warning",
};

const TeacherList = () => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (id) => {
    alert(`Edit teacher ID ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const filtered = teachers.filter((t) =>
    [t.name, t.email, t.performance]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        👨‍🏫 Teachers
      </Typography>


      <Box mb={2}>
        <TextField
          label="Search teachers..."
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
      </Box>

      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Teacher</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Courses</TableCell>
                <TableCell>Students</TableCell>
                <TableCell>Performance</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No teachers found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((t) => (
                  <TableRow key={t.id} hover>
                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={t.avatar} />
                        <Typography>{t.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{t.email}</TableCell>
                    <TableCell>{t.courses}</TableCell>
                    <TableCell>{t.students}</TableCell>
                    <TableCell>
                      <Chip
                        label={t.performance}
                        color={performanceColorMap[t.performance] || "default"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(t.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDelete(t.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TeacherList;
