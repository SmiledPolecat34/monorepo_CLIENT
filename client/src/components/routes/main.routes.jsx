import { Routes, Route } from "react-router-dom";
import LoginForm from "../model/LoginForm";
import RegisterForm from "../model/registerForm";
import Home from "../../pages/Home";
import Contacts from "../../pages/Contacts";
import ProtectedRoute from "../auth/ProtectedRoute";

export default function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
  );
}
