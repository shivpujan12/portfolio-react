import '../styles/About.scoped.css';
import {useEffect} from "react";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

    useEffect(()=>{
        gsap.registerPlugin(SplitText,ScrollTrigger);

        const split = SplitText.create(".text",{
            type: "chars",
            charsClass: "char",
        })

        gsap.from(split.chars, {
            scrollTrigger:{
                trigger: '.text',
                start: 'top 50%',
                end: 'bottom 10%',
                scrub: true,
                markers: false,
            },
            opacity:0.4,
            stagger: 1.5,
        })

    },[])

    return (
        <div id={"about-me"} className={'about-me'} data-spy="scroll" data-target="#navbar">
            <div className={'container'}>
                <p className={'text'}>
                    👋 Hi, I’m Shivpujan. A software developer who enjoys turning ideas into clean, efficient code.
                    I thrive on solving real-world problems and building products that make an impact.
                    Whether it’s designing intuitive user experiences or crafting robust backend systems, I love seeing
                    my work ship to production.
                </p>
                <p className={'text'}>
                    I am a Software Engineer with hands-on experience building scalable web applications using React,
                    Next.js, Node.js, and LangChain. Experienced on development of backend systems including REST APIs, GPT-powered RAG
                    pipelines, and automation tools, alongside frontend architectures focused on performance,
                    accessibility, and seamless user experiences. Adept at translating product goals into reliable and
                    optimized code in <b>fast-paced, agile environments.</b>
                </p>

            </div>

        </div>
    );
}

export default About;