import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Rain from './Rain';
import './Hero.css';
import { useState } from 'react';

const Hero: React.FC = () => {
  // Show only one project - Glorious Golf for performance, or random if preferred
  const featuredProject = projects.find(project => project.title === "Glorious Golf") || projects.filter(project => project.featured)[0];

  // Separate state for each education card
  const [ltuExpanded, setLtuExpanded] = useState<boolean>(false);
  const [sodertornsExpanded, setSodertornsExpanded] = useState<boolean>(false);

  const toggleLtu = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Toggling LTU. Current state:', ltuExpanded);
    console.log('Sodertorns current state:', sodertornsExpanded);
    setLtuExpanded(prev => {
      const newState = !prev;
      console.log('LTU new state will be:', newState);
      return newState;
    });
    // Ensure the other one is closed
    if (sodertornsExpanded) {
      console.log('Closing Sodertorns');
      setSodertornsExpanded(false);
    }
  };

  const toggleSodertorns = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Toggling Södertörns. Current state:', sodertornsExpanded);
    console.log('LTU current state:', ltuExpanded);
    setSodertornsExpanded(prev => {
      const newState = !prev;
      console.log('Sodertorns new state will be:', newState);
      return newState;
    });
    // Ensure the other one is closed
    if (ltuExpanded) {
      console.log('Closing LTU');
      setLtuExpanded(false);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <Rain />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Hugo Lundell</span>
          </h1>
          <h2 className="hero-subtitle">
            Developer, Game Designer & Tools Developer
          </h2>
          <p className="hero-description">
           I'm a passionate developer currently studying game design and scripting. Most of my projects have been game centered and I have one published title on Steam. Even though I enjoy working on games, I also have a keen interest in web development and tools creation. <br></br>

            <br></br> Most of my projects have been collaborative experiences, so I am very comfortable working in teams. I have a deep understanding of different version control systems and project management tools such as P4V and Git. <br></br>

            <br></br> When I am not working on projects, you can find me playing games, taking walks in nature, exploring new technologies and reading books of any genre.
          </p>
          
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn-primary-blue">
              View My Work
            </button>
            <a 
              href="#contact" 
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-items">
              <div className="education-row">
                {/* LTU Container - Completely Isolated */}
                <div className="education-container">
                  <div 
                    className={`education-item ${ltuExpanded ? 'expanded' : ''}`}
                    onClick={toggleLtu}
                  >
                    <div className="education-header">
                      <div className="education-left">
                        <h4>Luleå University of Technology</h4>
                        <div className="education-date">2020 - 2022</div>
                      </div>
                      <div className="education-right">
                        <span className="education-location">Luleå, Sweden</span>
                        <span className="education-toggle">{ltuExpanded ? '−' : '+'}</span>
                      </div>
                    </div>
                    {ltuExpanded && (
                      <div className="education-details">
                        <p><strong>Program:</strong> Space Engineering</p>
                        <p><strong>Focus:</strong> How to apply math/physics to stimulate data and analyse it</p>
                        <p><strong>Key Courses Features:</strong> Math, Physics and Data Analytics</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Södertörns Container - Completely Isolated */}
                <div className="education-container">
                  <div 
                    className={`education-item ${sodertornsExpanded ? 'expanded' : ''}`}
                    onClick={toggleSodertorns}
                  >
                    <div className="education-header">
                      <div className="education-left">
                        <h4>Södertörns University</h4>
                        <div className="education-date">2023 - present</div>
                      </div>
                      <div className="education-right">
                        <span className="education-location">Stockholm, Sweden</span>
                        <span className="education-toggle">{sodertornsExpanded ? '−' : '+'}</span>
                      </div>
                    </div>
                    {sodertornsExpanded && (
                      <div className="education-details">
                        <p><strong>Program:</strong> Game Design & Scripting</p>
                        <p><strong>Focus:</strong> Strong focus on C# coding, design principles and game theory</p>
                        <p><strong>Key Course Features:</strong> Game Programming, Marketing, Algorithm design</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-section">
          <div className="hero-stats">
            {/* Desktop version - no stat cards */}
            <div className="desktop-stats">
              <div className="stat-label">Years of Experience</div>
              <div className="stat-number">2+</div>
              
              <div className="stat-label">Projects Completed</div>
              <div className="stat-number">11+</div>
              
              <div className="stat-label">Published Title</div>
              <div className="stat-number">1</div>
            </div>

            {/* Mobile version - with stat cards */}
            <div className="mobile-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">11+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">Published Title</div>
              </div>
            </div>
          </div>
          
          <div className="featured-projects">
            <h3>Featured Project</h3>
            <div className="project-cards">
              <Link 
                key={featuredProject.id} 
                to={`/project/${featuredProject.slug}`} 
                className="project-card"
              >
                <div className="project-info">
                  <h4>{featuredProject.title}</h4>
                  {/* Hard coding this for now */}
                  <p>A physics based Golf Game published on Steam!</p>
                  <div className="project-tech">
                    {featuredProject.technologies.slice(0, 3).map((tech: string) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
