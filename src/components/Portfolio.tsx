import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project #1',
    description: 'My project #1 description.',
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/BlaztiBoi',
    demo: '#'
  },
  {
    title: 'Project #2',
    description: 'My project #2 description.',
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    tech: ['React', 'TailwindCSS', 'Weather API'],
    github: 'https://github.com/BlaztiBoi',
    demo: '#'
  },
  {
    title: 'Tabs Saver',
    description: 'Tabs Saver is a user-friendly browser extension that streamlines your web browsing experience. With Tabs Saver, you can effortlessly manage your open tabs, saving them for later reference and decluttering your workspace.',
    image: 'https://media.discordapp.net/attachments/1235919914846650378/1325785812218019891/icon128.png?ex=677d0dc1&is=677bbc41&hm=fef034fb29390dd6257b52541c5ff50ff5facb14ca6d8bc376025bf85427570e&=&format=webp&quality=lossless&width=160&height=160',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/BlaztiBoi/tab-saver',
    demo: '#'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2E5077] mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E5077] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-[#F6F4F0] text-[#2E5077] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#2E5077] transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#2E5077] transition-colors"
                  >
                    {/* <ExternalLink size={20} />
                    <span>Demo</span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}