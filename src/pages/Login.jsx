import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { mockLogin } from "../mockAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockLogin(email);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(user.role === "admin" ? "/admin" : "/teacher");
    } else {
      alert("Invalid email");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" align="center" mb={3} fontWeight="bold" color="#0f2027">
          Welcome to كورساتي
        </Typography>

        <Box mb={2}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="admin@example.com or teacher@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box mb={3}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Password
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            backgroundColor: "#0f2027",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1c3c4c",
            },
          }}
        >
          Login
        </Button>

        <Typography mt={2} align="center" fontSize={14}>
          Don’t have an account?{" "}
          <Link
            component={RouterLink}
            to="/register-teacher"
            underline="hover"
            fontWeight="bold"
            color="#0f2027"
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
