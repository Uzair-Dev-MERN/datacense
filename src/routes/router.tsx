import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { LoginForm } from "../pages/auth/Login/Login";
import { SignupForm } from "../pages/auth/Signup/Signup";
import DashboardLayout from "../components/layout/DashboardLayout";

import User from "../pages/users/User";
import Dashboard from "../pages/dashboard/Dashboard";
import AddUsers from "../pages/users/addUsers/AddUsers";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignupForm />} />

      {/* Dashboard Layout Routes */}
      <Route
        path="*"
        element={
          <DashboardLayout>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<User />} />
              <Route path="users/adduser" element={<AddUsers />} />
            </Routes>
          </DashboardLayout>
        }
      />
    </Routes>
  );
};
