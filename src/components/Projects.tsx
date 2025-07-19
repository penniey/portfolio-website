import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'HTML/CSS',
    'Node.js', 'Python', 'C#',
    'AWS', 'Git', 'Unity', 'P4V'
  ];

  // Helper function to get CSS class name from tech name
  const getTechClassName = (tech: string): string => {
    const techMap: { [key: string]: string } = {
      'JavaScript': 'javascript',
      'TypeScript': 'typescript',
      'React': 'react',
      'HTML/CSS': 'html css',
      'Node.js': 'nodejs',
      'Python': 'python',
      'C#': 'csharp',
      'AWS': 'aws',
      'Git': 'github',
      'Unity': 'unity',
      'P4V': 'p4v'
    };
    
    return techMap[tech] || tech.toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  // Helper function to get filter class name
  const getFilterClassName = (category: string): string => {
    return `filter-${category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => {
      const maxIndex = Math.max(0, filteredProjects.length - 3);
      return prev >= maxIndex ? 0 : prev + 3;
    });
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => {
      if (prev === 0) {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        return maxIndex;
      }
      return prev - 3;
    });
  };

  // Reset carousel when filter changes
  const handleFilterChange = (category: string) => {
    setFilter(category);
    setCurrentProjectIndex(0);
  };

  return (
    <section id="projects" className="projects">
      <div className={`projects-container ${filter !== 'All' ? getFilterClassName(filter) : ''}`}>
        <h2 className="section-title">Projects & Skills</h2>
        
        {/* Skills Section */}
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill} className={`skill-tag ${getTechClassName(skill)}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        {filter === 'All' ? (
          // Carousel for "All" projects
          <>
            <div className="projects-carousel">
              <div className="carousel-container">
                {Math.ceil(filteredProjects.length / 3) > 1 && (
                  <>
                    <button 
                      onClick={prevProject} 
                      className={`carousel-btn prev ${currentProjectIndex === 0 ? 'disabled' : ''}`}
                      disabled={currentProjectIndex === 0}
                    >
                      ‹
                    </button>
                    <button onClick={nextProject} className="carousel-btn next">›</button>
                  </>
                )}
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${(currentProjectIndex / 3) * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(filteredProjects.length / 3) }, (_, slideIndex) => (
                    <div key={slideIndex} className="carousel-slide">
                      <div className="projects-grid">
                        {filteredProjects
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map(project => (
                            <div key={project.id} className="project-item">
                              <div className="project-image">
                                <img src={project.images[0]} alt={project.title} />
                              </div>
                              <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                  {project.technologies.map(tech => (
                                    <span key={tech} className="tech-badge">{tech}</span>
                                  ))}
                                </div>
                                <div className="project-links">
                                  {project.githubUrl && (
                                    <a 
                                      href={project.githubUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="project-link github-link"
                                      title="GitHub"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                      </svg>
                                    </a>
                                  )}
                                  {project.liveUrl && project.slug !== 'portfolio-website' && (
                                    <a 
                                      href={project.liveUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className={`project-link ${project.liveUrl.includes('steam') ? 'steam-link' : 'live-link'}`}
                                      title={project.liveUrl.includes('steam') ? 'Steam' : 'Live Demo'}
                                    >
                                      {project.liveUrl.includes('steam') ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                                        </svg>
                                      ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                      )}
                                    </a>
                                  )}
                                  <Link 
                                    to={`/project/${project.slug}`} 
                                    className="project-link"
                                    title="Details"
                                  >
                                    Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="carousel-indicators">
              {Array.from({ length: Math.ceil(filteredProjects.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index * 3)}
                  className={`indicator ${Math.floor(currentProjectIndex / 3) === index ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* Mobile grid for "All" projects */}
            <div className="mobile-all-projects projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-item">
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link github-link"
                          title="GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && project.slug !== 'portfolio-website' && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`project-link ${project.liveUrl.includes('steam') ? 'steam-link' : 'live-link'}`}
                          title={project.liveUrl.includes('steam') ? 'Steam' : 'Live Demo'}
                        >
                          {project.liveUrl.includes('steam') ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          )}
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.slug}`} 
                        className="project-link"
                        title="Details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Grid for filtered projects
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-item">
                <div className="project-image">
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">{project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        title="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && project.slug !== 'portfolio-website' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`project-link ${project.liveUrl.includes('steam') ? 'steam-link' : 'live-link'}`}
                        title={project.liveUrl.includes('steam') ? 'Steam' : 'Live Demo'}
                      >
                        {project.liveUrl.includes('steam') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        )}
                      </a>
                    )}
                    <Link 
                      to={`/project/${project.slug}`} 
                      className="project-link"
                      title="Details"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
