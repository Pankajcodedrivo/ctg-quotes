import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import VerifyEmail from "../pages/auth/VerifyEmail"
import VerifySecurityCode from "../pages/auth/VerifySecurityCode"
import Register from "../pages/auth/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-security-code" element={<VerifySecurityCode />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}