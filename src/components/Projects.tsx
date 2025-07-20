export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Glorious Golf",
    description: "A published physics based golf game, fully released on steam with multiple controller support.",
    detailedDescription: "Glorious Golf is a fully-featured physics-based golf game that has been successfully published on Steam. The game features realistic physics simulation, multiple controller support for enhanced gameplay experience, and polished mechanics that provide hours of entertainment. Developed using Unity and C#, with collaborative development managed through Perforce (P4V).\n\n## Key Features\n• Realistic physics-based mechanics\n• Rebindable controls for various input devices\n• Controller and keyboard support\n• Steam achievements and leaderboards\n• Polished UI and user experience\n• Save files and player progress\n\n## Challenges & Solutions\n• Implementing realistic golf ball physics\n• Optimizing performance for LOD groups and obstacles\n• Implementation of rebindable controls\n• Steam integration and publishing process\n\n## What I Learned\n• Advanced Unity physics systems\n• Game publishing and marketing\n• Performance optimization techniques\n• User experience design for games",
    technologies: ["C#", "P4V", "Unity"],
    images: [
      "/Golf_Colored.svg"
    ],
    githubUrl: "https://github.com/penniey/Glorious-Golf",
    liveUrl: "https://store.steampowered.com/app/3757360/Glorious_Golf/",
    featured: true,
    category: "Game Development",
    slug: "glorious-golf"
  },
  {
    id: 2,
    title: "Mage Roguelike",
    description: "A collaborative project using P4V and Unity. This project was made in school during a one month development period.",
    detailedDescription: "Mage Roguelike is an intensive collaborative game development project completed during a one-month development cycle at school. The project emphasized teamwork, version control with Perforce (P4V), and rapid prototyping in Unity. This roguelike features magical combat mechanics, procedural generation, and dynamic gameplay elements that showcase both technical skills and creative game design.\n\n## Key Features\n• Magic-based combat system\n• Multiple enemy types and behaviors\n• Collaborative development workflow\n\n## Challenges & Solutions\n• Coordinating team development using P4V\n• Balancing gameplay mechanics in limited time\n• Managing scope within tight deadline\n\n## What I Learned\n• Team collaboration and communication\n• Version control best practices\n• Rapid prototyping and iteration\n• Game design and balancing",
    technologies: ["C#", "P4V", "Unity"],
    images: [
      "/Mage_Core.svg"
    ],
    githubUrl: "https://github.com/penniey/MageCore",
    featured: true,
    category: "Game Development",
    slug: "mage-roguelike"
  },
  {
    id: 3,
    title: "Unity Categorization Tool",
    description: "A tool to help developers with categorization and sorting in Unity's hierarchy.",
    detailedDescription: "The Unity Categorization Tool is a developer utility designed to streamline workflow efficiency within Unity's hierarchy system. This tool provides automated categorization and sorting capabilities, helping developers organize complex projects with multiple assets and game objects. Built as an open-source solution, it demonstrates practical tool development skills and understanding of Unity's editor scripting capabilities.\n\n## Key Features\n• Custom categorization rules\n• Batch object manipulation\n• Integration with Unity's editor\n• User-friendly interface\n\n## Challenges & Solutions\n• Understanding Unity's editor scripting system\n• Creating intuitive user interfaces\n\n## What I Learned\n• Unity editor scripting and customization\n• Tool development best practices\n• User interface design for developers",
    technologies: ["Unity", "C#", "GitHub"],
    images: [
      "/Tool_Colored.svg"
    ],
    githubUrl: "https://github.com/penniey",
    featured: true,
    category: "Development Tools",
    slug: "unity-categorization-tool"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This stunning website which is selfmade and connected with AWS.",
    detailedDescription: "This portfolio website is a completely self-made web application showcasing modern web development practices and cloud deployment. Built with React and TypeScript for robust functionality, it features a responsive design with glassmorphism effects and smooth animations. The site is deployed on AWS infrastructure using S3 for hosting and CloudFront for global content delivery, demonstrating full-stack development and cloud deployment capabilities.\n\n## Key Features\n• Modern React with TypeScript\n• AWS cloud deployment\n• SEO optimization\n• Smooth animations and interactions\n\n## Challenges & Solutions\n• Learning modern React patterns\n• Implementing responsive design\n• Setting up AWS deployment pipeline\n• Optimizing performance and accessibility\n\n## What I Learned\n• Modern web development practices\n• React ecosystem and tooling\n• Cloud deployment strategies\n• Web performance optimization",
    technologies: ["AWS", "React", "JavaScript", "TypeScript", "GitHub", "CSS", "HTML", "Vite", "Node.js"],
    images: [
      "/Website_Colored.svg"
    ],
    githubUrl: "https://github.com/penniey/portfolio-website",
    liveUrl: "https://d8ebcyzmxxit3.cloudfront.net",
    featured: true,
    category: "Web Development",
    slug: "portfolio-website"
  }
];
