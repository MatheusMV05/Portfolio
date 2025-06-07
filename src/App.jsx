import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-secondary">
            <main className="container mx-auto px-6 md:px-12">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Achievements />
            </main>
            <Footer />
        </div>
    );
}

export default App;