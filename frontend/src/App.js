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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
