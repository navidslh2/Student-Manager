import "./App.css";
import "./component/students/student/student.css";
import Toolbar from "./container/header/toolbar/Toolbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EditStudentPage from "./pages/EditStudentPage";
import NotFoundPage from "./component/404page/NotFoundPage";
import React, { Suspense, useContext } from "react";
import AuthContextProvider from "./context/auth/authContext";
import StudentContextProvider from "./context/students/studentContext";
import SigninPage from "./pages/SigninPage";
const AddStudentPage = React.lazy(() => import("./pages/AddStudentPage"));

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <StudentContextProvider>
          <div className="App">
            <Toolbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/add-student"
                element={
                  <Suspense fallback={<div>...loading</div>}>
                    <AddStudentPage />
                  </Suspense>
                }
              />
              <Route path="students/:id" element={<EditStudentPage />} />
              <Route path="/login" element={<SigninPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </StudentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
