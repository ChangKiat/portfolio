
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Chang Kiat Portfolio',
    description: 'A high-performance digital showcase built with a focus on fluid user experience and modern aesthetic principles.',
    tags: ['VITE', 'TypeScript', 'Gemini'],
    imageUrl: 'https://picsum.photos/id/180/600/400', 
    githubUrl: 'https://github.com/ChangKiat', 
    link: 'https://github.com/ChangKiat/portfolio',
  },
  {
    id: '2',
    title: 'GenFit Fitness Platform',
    description: 'A professional web presence for a premium gym, featuring optimized performance and mobile-first responsive design.',
    tags: ['Next.js', 'SEO', 'UI/UX'],
    imageUrl: 'https://picsum.photos/id/319/600/400',
    githubUrl: '#', 
    link: 'https://www.genfitmy.com/',
  },
  {
    id: '3',
    title: 'AI Secretary',
    description: 'An intelligent automation agent bridging Telegram and Google Workspace to streamline scheduling and data management.',
    tags: ['TypeScript', 'Gemini AI', 'Telegram API'],
    imageUrl: 'https://picsum.photos/id/0/600/400', 
    githubUrl: 'https://github.com/ChangKiat/AI_Secretary',
    link: '#',
  },
  {
    id: '4',
    title: 'Polyglot gRPC Bridge',
    description: 'A technical proof-of-concept demonstrating high-speed, cross-language communication between Java and Go microservices.',
    tags: ['Java', 'Go Lang', 'gRPC'],
    imageUrl: 'https://picsum.photos/id/160/600/400',
    githubUrl: 'https://github.com/ChangKiat/GRPC/tree/main',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Work</h2>
          <p className="text-slate-400 max-w-md">A selection of projects where engineering meets artistry.</p>
        </div>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">View All Archive →</a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-blue-600/30 text-blue-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium hover:underline hover:text-blue-400"
                  >
                    Live Demo
                  </a>
                )}
                  {project.githubUrl !== '#' && (

                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium hover:underline hover:text-blue-400"
                >
                  GitHub
                </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
