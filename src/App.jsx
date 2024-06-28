import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "944359357198-rkng9frt5okr78oobbf6jfefc17cn7sr.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
