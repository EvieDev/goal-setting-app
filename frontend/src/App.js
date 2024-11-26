import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelocmePage";
import DashboardPage from "./pages/DashboardPage";
import CreateGoalPage from "./pages/CreateGoalPage.jsx";
import CreateTasksPage from "./pages/CreateTasksPage.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-goal" element={<CreateGoalPage />} />
          <Route path="/create-tasks" element={<CreateTasksPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
