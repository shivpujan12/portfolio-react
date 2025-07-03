import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import {useEffect, useRef, useState} from "react";

function App() {
    const scrollRef = useRef();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const activeLink = document.querySelector("#navbar a.active");
            if (activeLink) {
                const sectionId = activeLink.getAttribute("href").replace("#", "");
                setActiveSection(sectionId);
            }
        });

        const nav = document.querySelector("#navbar");
        if (nav) {
            observer.observe(nav, {
                subtree: true,
                attributes: true,
                attributeFilter: ["class"],
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
      <div>
          <Header activeSection={activeSection} />
          <div
              data-bs-spy="scroll"
              data-bs-target="#navbar"
              data-bs-offset="0"
              ref={scrollRef}
          >
              <Home/>
              <About/>
          </div>


      </div>
  );
}

export default App;
