import './App.css';
import Home from "./components/Home";
import Layout from "./components/Layout";
import './styles/Marquee.scoped.css';
import Skills from "./components/Skills";
import About from "./components/About";
import Main from "./components/Main";
import Contact from "./components/Contact";
import {useEffect, useState} from "react";



function App() {
    return (
        <Layout>
            <Home/>
            <Skills/>
            <Main />
            <Contact />
            <Mascot />
            {/*<About/>*/}
        </Layout>
  );
}


const Mascot = () => {

    const [mascot, setMascot] = useState({
        reaction: "🙂",
        x:"0",
        y:"0",
    });

    useEffect(()=>{

    },[])

    return(
        <div className="mascot" style={{
            transform: `translate(-${mascot.x}px, -${mascot.y}px)`,
        }}>
            {mascot.reaction}
        </div>
    )
}


export default App;


