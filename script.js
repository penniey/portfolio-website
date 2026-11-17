// ===== PORTFOLIO DATA & RENDERING =====

// Skills Data with Categories
const skillsData = [
    // Primary Skills (appear in all categories)
    { id: 1, name: 'C#', categories: ['game', 'software'], primary: true },
    { id: 2, name: 'JavaScript', categories: ['cloud', 'software'], primary: true },
    { id: 3, name: 'TypeScript', categories: ['cloud', 'software'], primary: true },
    { id: 4, name: 'Python', categories: ['software'], primary: false },
    { id: 5, name: 'Dart', categories: ['software'], primary: false },
    
    // Game Development
    { id: 6, name: 'Unity', categories: ['game'], primary: false },
    { id: 7, name: 'P4V', categories: ['game'], primary: false },
    { id: 8, name: 'ECS - Unity', categories: ['game'], primary: false },
    
    // Cloud Development
    { id: 9, name: 'Snowflake', categories: ['cloud'], primary: false },
    { id: 10, name: 'AWS', categories: ['cloud'], primary: false },
    { id: 11, name: 'Azure', categories: ['cloud'], primary: false },
    { id: 12, name: 'Node.js', categories: ['cloud'], primary: false },
    { id: 13, name: 'Firebase', categories: ['cloud'], primary: false },
    { id: 14, name: 'ECS - AWS', categories: ['cloud'], primary: false },
    { id: 15, name: 'CloudFront', categories: ['cloud'], primary: false },
    { id: 16, name: 'Django', categories: ['cloud'], primary: false },
    
    // Software Development
    { id: 17, name: 'Flutter', categories: ['software'], primary: false },
    { id: 18, name: 'Hive', categories: ['software'], primary: false },
    { id: 19, name: 'Git', categories: ['software'], primary: false },
    { id: 20, name: 'tkinter', categories: ['software'], primary: false },
    { id: 21, name: 'FFmpeg', categories: ['software'], primary: false },
    { id: 22, name: 'WebExtension API', categories: ['software'], primary: false },
    { id: 23, name: 'CI/CD', categories: ['software'], primary: false }
];

// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'Glorious Golf',
        type: 'Game Dev',
        status: 'published',
        statusLabel: 'Published',
        description: 'Physics-based golf game published on Steam, with realistic physics simulation, controller support and Steam achievements. Resolved performance issues with LOD groups and memory-leak debugging.',
        technologies: ['C#', 'Unity', 'P4V', 'Steam API'],
        links: [
            { type: 'steam', url: 'https://store.steampowered.com/app/3757360/Glorious_Golf/', label: 'Steam' }
        ]
    },
    {
        id: 2,
        title: 'ECS Navigation & Attack',
        type: 'Game Dev',
        status: 'opensource',
        statusLabel: 'Open Source',
        description: 'Unity Entity-Component-System framework for pathfinding and enemy attack behaviors. Handles 10,000+ entities at 60+ FPS, with slope detection, multithreading and modular attacks.',
        technologies: ['C#', 'Unity', 'ECS', 'Multithreading'],
        links: [
            { type: 'github', url: 'https://github.com/penniey/ECS-System', label: 'GitHub' }
        ]
    },
    {
        id: 4,
        title: 'YT DDL Wrapper',
        type: 'Software',
        status: 'tool',
        statusLabel: 'Tool',
        description: 'Python desktop interface for yt-dlp with real-time progress tracking, multiple output formats, automatic dependency management and audio conversion through FFmpeg.',
        technologies: ['Python', 'tkinter', 'yt-dlp', 'FFmpeg'],
        links: [
            { type: 'github', url: 'https://github.com/penniey/youtube-downloader-gui', label: 'GitHub' }
        ]
    },
    {
        id: 7,
        title: 'Mage Roguelike',
        type: 'Game Dev',
        status: 'school',
        statusLabel: 'School Project',
        description: 'Collaborative one-month game jam with 3 designers and 3 artists. Features magic-based combat with distinct elemental weapons, procedural generation, and cyberpunk atmosphere with custom lighting systems.',
        technologies: ['C#', 'Unity', 'P4V', 'Lighting'],
        links: [
            {type: 'github', url: 'https://github.com/penniey/MageCore', label: 'GitHub' }
        ]
    },
    {
        id: 6,
        title: 'Portfolio Website',
        type: 'Web Dev',
        status: 'live',
        statusLabel: 'Live',
        description: 'This website: a lightweight, responsive portfolio built with HTML, CSS and JavaScript. Hosted on S3, delivered through CloudFront and deployed with GitHub Actions.',
        technologies: ['HTML/CSS', 'JavaScript', 'S3', 'CloudFront'],
        links: [
            { type: 'live', url: 'https://penniey.com/', label: 'Live Site' }
        ]
    },
    {
        id: 8,
        title: 'Unity Categorization Tool',
        type: 'Tool',
        status: 'utility',
        statusLabel: 'Utility',
        description: 'Developer utility for Unity Editor workflow optimization. Provides automated categorization, custom sorting rules, and batch object manipulation. Inspired by professional game development tools like Odin.',
        technologies: ['Unity', 'C#', 'Editor Scripting'],
        links: [
            { type: 'private', url: '#', label: 'Private' }
        ]
    },
    {
        id: 3,
        title: 'Track Life',
        type: 'Mobile',
        status: 'published',
        statusLabel: 'Published',
        description: 'Android workout logger with a database of 1,000 exercises. Local Hive storage keeps data on-device, while Firebase provides cloud backup. Built with Flutter, GoRouter and Riverpod.',
        technologies: ['Flutter', 'Dart', 'Hive', 'Firebase'],
        links: [
            { type: 'store', url: 'https://play.google.com/store/apps/details?id=com.trackinglife.app', label: 'Play Store' }
        ]
    },
    {
        id: 5,
        title: 'WEBP Converter',
        type: 'Extension',
        status: 'utility',
        statusLabel: 'Utility',
        description: 'Firefox extension for instant WEBP to JPG or PNG conversion directly from the browser context menu, streamlining image workflows without a separate conversion website.',
        technologies: ['JavaScript', 'WebExtension API', 'HTML/CSS'],
        links: [
            { type: 'firefox', url: 'https://github.com/penniey/webp-converter', label: 'GitHub' }
        ]
    }
];

// Experience Data
const experienceData = [
    {
        id: 1,
        company: 'VetFamily',
        role: 'Full-Stack Developer',
        startDate: 'May 2026',
        endDate: 'Present',
        location: 'Stockholm, Sweden',
        description: 'Full-stack development for VetFamily’s multi-country members portal, focused on Django and Python services and data integrations for users across markets.',
        technologies: ['Django', 'Snowflake', 'Python', 'PostgreSQL']
    }
];

// SVG Icons for links
const icons = {
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    steam: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    live: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    store: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    firefox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    private: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
};

// Current filter state
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    // Render initial content
    renderSkills();
    renderExperience();
    renderProjects();

    // Initialize entrance animations
    initEntranceAnimations();

    // Initialize skill filters
    initSkillFilters();

    // Initialize project card tilt effect
    initProjectTilt();

    // Initialize smooth scrolling for projects
    initSmoothScroll();

    // Keep the skills grid at its fully-expanded height so filtering never shifts the page.
    updateSkillsHeight();
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateSkillsHeight);
    }
    window.addEventListener('resize', debounce(updateSkillsHeight, 150));
});

// Measure the skills grid with every skill visible and pin that height, so hiding
// skills during filtering does not change the section height (no layout shift).
function updateSkillsHeight() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    const items = Array.from(grid.querySelectorAll('.skill-item'));
    if (!items.length) return;

    const hiddenState = items.map(item => item.classList.contains('hidden'));
    grid.style.minHeight = '';
    items.forEach(item => item.classList.remove('hidden'));
    const fullHeight = grid.getBoundingClientRect().height;
    grid.style.minHeight = `${fullHeight}px`;
    items.forEach((item, i) => item.classList.toggle('hidden', hiddenState[i]));
}

// ===== RENDER FUNCTIONS =====

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = skillsData.map(skill => {
        // Always use first category color (even for multi-category skills)
        const categoryClass = `cat-${skill.categories[0]}`;

        return `
            <div class="skill-item ${categoryClass} ${skill.primary ? 'primary' : ''}" data-categories="${skill.categories.join(' ')}" data-id="${skill.id}">
                <span class="skill-name">${skill.name}</span>
            </div>
        `;
    }).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    // Sort projects by ID (you can change this order by reordering the array)
    const sortedProjects = [...projectsData].sort((a, b) => a.id - b.id);
    
    container.innerHTML = sortedProjects.map(project => {
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const projectLinks = project.links.map(link => {
            const icon = icons[link.type] || icons.live;
            if (link.type === 'private') {
                return `<span class="project-link disabled">${icon} Private code</span>`;
            }
            return `
                <a href="${link.url}" class="project-link" target="_blank" rel="noopener">
                    ${icon}
                    ${link.label}
                </a>
            `;
        }).join('');
        
        return `
            <article class="project-card" data-project-id="${project.id}">
                <div class="project-header">
                    <div class="project-meta">
                        <span class="project-type">${project.type}</span>
                        <span class="project-status ${project.status}">${project.statusLabel}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <div class="project-links">
                    ${projectLinks}
                </div>
            </article>
        `;
    }).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = experienceData.map(exp => {
        const techTags = exp.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        return `
            <article class="experience-card">
                <div class="experience-header">
                    <span class="experience-date">${exp.startDate} — ${exp.endDate}</span>
                    <h3 class="experience-company">${exp.company}</h3>
                    <p class="experience-role">${exp.role} · ${exp.location}</p>
                </div>
                <p class="experience-description">${exp.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </article>
        `;
    }).join('');
}

// ===== SKILL FILTERS =====

function initSkillFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state for sighted users and assistive technology.
            filterButtons.forEach(btn => {
                const isActive = btn === button;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });
            
            // Get filter value
            const filter = button.dataset.filter;
            currentFilter = filter;
            
            // Apply filter
            filterSkills(filter);
        });
    });
}

function filterSkills(filter) {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    const skillItems = Array.from(container.querySelectorAll('.skill-item'));

    // Sort items: matching first, then non-matching. "All" restores the original order.
    const sortedItems = skillItems.sort((a, b) => {
        if (filter === 'all') return Number(a.dataset.id) - Number(b.dataset.id);

        const aCategories = a.dataset.categories.split(' ');
        const bCategories = b.dataset.categories.split(' ');
        const aMatches = aCategories.includes(filter);
        const bMatches = bCategories.includes(filter);

        if (aMatches && !bMatches) return -1;
        if (!aMatches && bMatches) return 1;
        return Number(a.dataset.id) - Number(b.dataset.id);
    });

    // Reorder and hide elements so filtered items reflow without blank rows.
    sortedItems.forEach(item => {
        container.appendChild(item);

        const categories = item.dataset.categories.split(' ');
        const isVisible = filter === 'all' || categories.includes(filter);
        item.classList.toggle('hidden', !isVisible);
        item.classList.remove('fade-out');
    });

    const visibleCount = skillItems.filter(item => !item.classList.contains('hidden')).length;
    const label = document.querySelector(`[data-filter="${filter}"]`).textContent.trim().toLowerCase();
    document.getElementById('filter-status').textContent = `Showing ${visibleCount} ${label} skills.`;
}

// ===== ENTRANCE ANIMATIONS =====

function initEntranceAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Check if mobile (≤1024px) - disable entrance animations on mobile
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    
    if (isMobile) {
        // Skip entrance animations on mobile - show immediately
        animatedElements.forEach(el => el.classList.add('animate-in'));
        return;
    }
    
    // Desktop: Use IntersectionObserver for staggered entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(animatedElements).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Fallback for desktop
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (!el.classList.contains('animate-in')) {
                el.classList.add('animate-in');
            }
        });
    }, 500);
}

// ===== SMOOTH SCROLL FOR PROJECTS =====

function initSmoothScroll() {
    const projectsContainer = document.querySelector('.projects-scroll');
    
    if (!projectsContainer) return;
    
    projectsContainer.addEventListener('wheel', (e) => {
        const isAtTop = projectsContainer.scrollTop === 0;
        const isAtBottom = projectsContainer.scrollTop + projectsContainer.clientHeight >= projectsContainer.scrollHeight - 1;
        
        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
            e.stopPropagation();
        }
    }, { passive: true });
    
    projectsContainer.setAttribute('tabindex', '0');
    projectsContainer.addEventListener('keydown', (e) => {
        const scrollAmount = 300;
        
        switch(e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                projectsContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                projectsContainer.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
                break;
            case 'Home':
                e.preventDefault();
                projectsContainer.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'End':
                e.preventDefault();
                projectsContainer.scrollTo({ top: projectsContainer.scrollHeight, behavior: 'smooth' });
                break;
        }
    });
}

// ===== PROJECT CARD TILT EFFECT =====

function initProjectTilt() {
    // Skip tilt effect on mobile (≤1024px)
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) return;

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (subtle, max 5 degrees)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    // Add tilting class to disable transition during mousemove
    card.classList.add('tilting');

    // Apply transform
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
}

function resetTilt(e) {
    const card = e.currentTarget;

    // Remove tilting class to enable transition
    card.classList.remove('tilting');

    // Reset transform with transition
    card.style.transform = '';
}

// ===== UTILITY FUNCTIONS =====

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== CONSOLE EASTER EGG =====
console.log('%c Hugo Lundell ', 'background: linear-gradient(90deg, #b87333, #cd853f); color: #0a0a0a; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
console.log('%c Developer & Designer ', 'color: #cd853f; font-size: 14px;');
