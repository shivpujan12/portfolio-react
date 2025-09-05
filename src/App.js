import './App.css';
import Home from "./components/Home";
import Layout from "./components/Layout";
import './styles/Marquee.scoped.css';
import Skills from "./components/Skills";
import About from "./components/About";
import WorkEx from "./components/WorkEx";
import Contact from "./components/Contact";



function App() {
    return (
        <Layout>
            <Home/>
            <Skills/>
            <WorkEx />
            <Contact />
            {/*<About/>*/}
        </Layout>
  );
}



export default App;


