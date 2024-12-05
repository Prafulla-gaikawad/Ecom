import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   Navigate,
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
import "./App.css";
import { Login } from "./features/auth/components/Login";
import { LoginPage, SignupPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
