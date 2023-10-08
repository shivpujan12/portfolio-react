import './App.css';
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./components/NoPage";
import Header from "./components/Header";
import Home from "./components/Home";
import WebProject from "./components/WebProject";
import AndroidProject from "./components/AndroidProject";
import UpcomingProjects from "./components/UpcomingProjects";

function App() {
  return (
      <div className="parent">
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/resume" element={<Resume/>}/>
                  <Route path="/projects" element={<Projects/>}>
                      <Route path="" element={<WebProject/>}/>
                      <Route path="web" element={<WebProject/>}/>
                      <Route path="android" element={<AndroidProject/>}/>
                      <Route path="upcoming" element={<UpcomingProjects/>}/>
                  </Route>
                  <Route path="*" element={<NoPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
