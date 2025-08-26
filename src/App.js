import './App.css';
import Home from "./components/Home";
import Layout from "./components/Layout";
import './styles/Marquee.scoped.css';
import Skills from "./components/Skills";
import About from "./components/About";
import WorkEx from "./components/WorkEx";


function App() {
    return (
        <Layout>
            <Home/>
            <Skills/>
            <WorkEx />
            {/*<About/>*/}
        </Layout>
  );
}

export default App;
