// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Import components
import Home from "./components/Home";
import FindJobs from "./components/FindJobs";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import UserDashboard from "./components/UserDashboard";
import UserNavbar from "./components/UserNavbar";
import UserJobs from "./components/UserJobs";
import UserProfile from "./components/UserProfile";
import UserJobDetails from "./components/UserJobDetails";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgotPasswordCodes from "./components/ForgotPasswordCodes";
import ChangePassword from "./components/ChangePassword";
import ForgottenPassword from "./components/ForgottenPassword";
import ForgottenPasswordNumber from "./components/ForgottenPasswordNumber";
import SuccessPage from "./components/SuccessPage";
import RegisteredSuccess from "./components/RegisteredSuccess";
import AdminNavbar from "./components/AdminNavbar";
import EmployerLogin from "./components/EmployerLogin";
import EmployerSignUp from "./components/EmployerSignUp";
import EmployerSuccess from "./components/EmployerSuccess";
import EmployerNavbar from "./components/EmployerNavbar";
import EmployerDashboard from "./components/EmployerDashboard";
import EmployerApplicants from "./components/EmployerApplicants";
import AdminJobSeekers from "./components/AdminJobSeekers";
import ApproveJobs from "./components/ApproveJobs";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();

  // ✅ ADD THIS: Check for existing user on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ✅ UPDATE THIS: Add loading check to protected routes
  const ProtectedRoute = ({ children, requiredRole }) => {
    if (loading) {
      return <div>Loading...</div>; // Show loading while checking auth
    }

    if (!user) {
      return <Navigate to="/signin" replace />;
    }
    if (requiredRole && user.role !== requiredRole) {
      switch (user.role) {
        case "user":
          return <Navigate to="/userdashboard" replace />;
        case "employer":
          return <Navigate to="/employerdashboard" replace />;
        case "admin":
          return <Navigate to="/admindashboard" replace />;
        default:
          return <Navigate to="/" replace />;
      }
    }
    return children;
  };

  // ✅ UPDATE THIS: Add loading check to public routes
  const PublicRoute = ({ children }) => {
    if (loading) {
      return <div>Loading...</div>; // Show loading while checking auth
    }

    if (user) {
      switch (user.role) {
        case "user":
          return <Navigate to="/userdashboard" replace />;
        case "employer":
          return <Navigate to="/employerdashboard" replace />;
        case "admin":
          return <Navigate to="/admindashboard" replace />;
        default:
          return <Navigate to="/" replace />;
      }
    }
    return children;
  };

  // 📌 Navbar rendering
  const renderNavbar = () => {
    const noNavbarRoutes = [
      "/signup",
      "/signin",
      "/Employersignup",
      "/Employersignin",
      "/forgotpassword",
      "/forgotpasswordnumber",
      "/forgotpasswordcodesemail",
      "/forgotpasswordcodesnumber",
      "/changepasswords",
      "/success",
      "/register/success",
      "/Employersuccess",
    ];

    if (noNavbarRoutes.includes(location.pathname)) return null;

    if (user) {
      switch (user.role) {
        case "user":
          if (location.pathname.startsWith("/user"))
            return <UserNavbar user={user} />;
          break;
        case "employer":
          if (location.pathname.startsWith("/employer"))
            return <EmployerNavbar user={user} />;
          break;
        case "admin":
          if (location.pathname.startsWith("/admin"))
            return <AdminNavbar user={user} />;
          break;
      }
    }

    return <Navbar />;
  };

  // ✅ ADD THIS: Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {renderNavbar()}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/register/success" element={<RegisteredSuccess />} />
        <Route path="/Employersuccess" element={<EmployerSuccess />} />

        {/* Auth */}
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route
          path="/Employersignin"
          element={
            <PublicRoute>
              <EmployerLogin setUser={setUser} />
            </PublicRoute>
          }
        />
        <Route
          path="/Employersignup"
          element={
            <PublicRoute>
              <EmployerSignUp setUser={setUser} />
            </PublicRoute>
          }
        />

        {/* Forgot Password */}
        <Route path="/forgotpassword" element={<ForgottenPassword />} />
        <Route path="/forgotpasswordnumber" element={<ForgottenPasswordNumber />} />
        <Route path="/forgotpasswordcodesemail" element={<ForgotPasswordCodes />} />
        <Route path="/changepasswords" element={<ChangePassword />} />

        {/* User */}
        <Route
          path="/userdashboard"
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userjobs"
          element={
            <ProtectedRoute requiredRole="user">
              <UserJobs user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userjobsdetails/:id"
          element={
            <ProtectedRoute requiredRole="user">
              <UserJobDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute requiredRole="user">
              <UserProfile user={user} />
            </ProtectedRoute>
          }
        />

        {/* Employer */}
        <Route
          path="/employerdashboard"
          element={
            <ProtectedRoute requiredRole="employer">
              <EmployerDashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employerapplicants"
          element={
            <ProtectedRoute requiredRole="employer">
              <EmployerApplicants user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employerprofile"
          element={
            <ProtectedRoute requiredRole="employer">
              <EmployerDashboard user={user} />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/adminjobseekers"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminJobSeekers user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/approvejobs"
          element={
            <ProtectedRoute requiredRole="admin">
              <ApproveJobs user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <div>Admin Dashboard</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;