 import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CareerCoach from "./pages/CareerCoach";
import CareerRoadmap from "./pages/CareerRoadmap";
import ResumeReview from "./pages/ResumeReview";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import JobRecommendations
from "./pages/JobRecommendations";
import CareerCopilot from "./pages/CareerCopilot";

import ProtectedRoute from "./routes/ProtectedRoute";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
  }
/>
        <Route
        path="/resume-review"
        element={
          <ProtectedRoute>
            <ResumeReview />
          </ProtectedRoute>
        }
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
       <Route
        path="/career-coach"
        element={
          <ProtectedRoute>
            <CareerCoach />
          </ProtectedRoute>
  }
/>
           
        <Route
        path="/career-roadmap"
        element={
          <ProtectedRoute>
            <CareerRoadmap />
          </ProtectedRoute>
  }
/>
        <Route
  path="/reports"
  element={
    <ProtectedRoute>
      <Reports />
    </ProtectedRoute>
  }
/>    
          <Route
  path="/job-recommendations"
  element={
    <ProtectedRoute>
      <JobRecommendations />
    </ProtectedRoute>
  }
/>

      <Route
  path="/career-copilot"
  element={
    <ProtectedRoute>
      <CareerCopilot />
    </ProtectedRoute>
  }
/>

<Route
  path="/skills"
  element={
    <ProtectedRoute>
      <Skills />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;