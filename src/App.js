import './App.css';
import Dashboard from "./components/Dashboard";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./components/NoPage";

function App() {
  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="*" element={<NoPage/>}/>
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
