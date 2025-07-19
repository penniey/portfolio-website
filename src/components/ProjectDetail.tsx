import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { formatDescription } from '../utils/formatDescription';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  useEffect(() => {
    //Delay is needed as it might render before the route is fully loaded >:
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  }, [slug]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== project.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-btn">← Back to Home</Link>
        
        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="project-category">{project.category}</p>
        </div>

        <div className="project-images">
          <div className="image-carousel">
            <button onClick={prevImage} className="carousel-btn prev">‹</button>
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="main-image"
            />
            <button onClick={nextImage} className="carousel-btn next">›</button>
          </div>
          
          <div className="image-thumbnails">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>About This Project</h2>
            <div className="formatted-description">
              {formatDescription(project.detailedDescription)}
            </div>
            
            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-links">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>

        <div className="related-projects">
          <h3>Other Projects</h3>
          <div className="related-grid">
            {relatedProjects.map((relatedProject) => (
              <Link 
                key={relatedProject.id}
                to={`/project/${relatedProject.slug}`}
                className="related-project"
              >
                <div className="project-info">
                  <h4>{relatedProject.title}</h4>
                  <p>{relatedProject.description}</p>
                  <div className="project-tech">
                    {relatedProject.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
