import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLayout from "./layout/AdminLayout";
import TeacherLayout from "./layout/TeacherLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherList from "./pages/admin/TeacherList";
import PlatformAnalytics from "./pages/admin/Analytics";
import ExamsOverview from "./pages/admin/ExamsOverview";
import Courses2 from "./pages/admin/Courses";


import TeacherRegister from "./pages/TeacherRegister";
import TeacherRequests from "./pages/admin/TeacherRequests";

import Dashboard from "./pages/teacher/Dashboard";
import Courses from "./pages/teacher/Courses";
import Exams from "./pages/teacher/Exams";
import Analytics from "./pages/teacher/Analytics";
import CourseDetails from "./pages/teacher/CourseDetails";
import Students from "./pages/teacher/Students";
import StudentDetails from "./pages/teacher/StudentDetails";
import CourseSubmit from "./pages/teacher/CourseSubmit";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/register-teacher" element={<TeacherRegister />} />

        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="exams" element={<Exams />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentDetails />} />
          <Route path="courses/submit" element={<CourseSubmit />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="teachers" element={<TeacherList />} />
          <Route path="analytics" element={<PlatformAnalytics />} />
          <Route path="courses" element={<Courses2 />} />
          <Route path="exams-overview" element={<ExamsOverview />} />
          <Route path="/admin/teacher-requests" element={<TeacherRequests />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
