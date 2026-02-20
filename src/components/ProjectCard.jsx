import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-blue-300">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="inline-block w-full text-center py-2 bg-blue-600/20 border border-blue-500/50 rounded-lg hover:bg-blue-600 transition text-sm font-semibold">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;