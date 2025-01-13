import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { LoginForm } from "../pages/auth/Login/Login";
import { SignupForm } from "../pages/auth/Signup/Signup";
import DashboardLayout from "../components/layout/DashboardLayout";
import User from "../pages/users/User";
import Dashboard from "../pages/dashboard/Dashboard";
import AddUsers from "../pages/users/addUsers/AddUsers";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignupForm />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="users/adduser" element={<AddUsers />} />
      </Route>
    </Routes>
  );
};
