import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { TracingBeam } from './components/ui/tracing-beam';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Projects />
                  <Contact />
                </>
              } />
              <Route path="/project/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <TracingBeam />
      </div>
    </Router>
  );
}

export default App;