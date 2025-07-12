import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard,
  People,
  BarChart,
  Logout,
} from "@mui/icons-material";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { School, Assignment } from "@mui/icons-material";


const navItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "/admin" },
  { label: "Teachers", icon: <People />, path: "/admin/teachers" },
  { label: "Courses", icon: <School />, path: "/admin/courses" },
  { label: "Exams Overview", icon: <Assignment />, path: "/admin/exams-overview" },
  { label: "Analytics", icon: <BarChart />, path: "/admin/analytics" },
];

const drawerWidth = 240;
const collapsedWidth = 72;

const AdminLayout = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setOpen(!open);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedWidth,
            boxSizing: "border-box",
            backgroundColor: "#0d2c42",
            color: "#fff",
            transition: "width 0.3s ease",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: open ? "space-between" : "center",
            px: 2,
          }}
        >
          {open && <Typography variant="h6">Admin Panel</Typography>}
          <IconButton onClick={handleToggle} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: "#1c3a57" }} />

        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                color: "#fff",
                px: 2,
                py: 1.5,
                "&.Mui-selected": { backgroundColor: "#1565c0" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.label} />}
            </ListItem>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ px: 2, pb: 2 }}>
          {open ? (
            <Button
              fullWidth
              variant="contained"
              color="error"
              startIcon={<Logout />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <IconButton
              onClick={handleLogout}
              sx={{ color: "red", mx: "auto", display: "block" }}
            >
              <Logout />
            </IconButton>
          )}
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, backgroundColor: "#f5f7fb" }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#0d2c42",
            boxShadow: "none",
            px: 3,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ width: 40 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", letterSpacing: 1 }}>
              كورساتي
            </Typography>
            <Box>
              <img
                src="/logo192.png"
                alt="Logo"
                style={{ height: 40, width: 40, borderRadius: "50%" }}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
