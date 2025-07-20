import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Hero.css';

const Hero: React.FC = () => {
  // Show only one project - Glorious Golf for performance, or random if preferred
  const featuredProject = projects.find(project => project.title === "Glorious Golf") || projects.filter(project => project.featured)[0];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
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
        </div>
        <div className="hero-right-section">
          <div className="hero-stats">
            {/* Desktop version - no stat cards */}
            <div className="desktop-stats">
              <div className="stat-label">Years of Experience</div>
              <div className="stat-number">2+</div>
              
              <div className="stat-label">Projects Completed</div>
              <div className="stat-number">5+</div>
              
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
                <div className="stat-number">5+</div>
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
