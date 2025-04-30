import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Education from "./components/Education";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main parentToChild={{mode}}/>
            <Education/>
            <Skills/>
            <Timeline/>
            <Project/>
            <Highlights/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;