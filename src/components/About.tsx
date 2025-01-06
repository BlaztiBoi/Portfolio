import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Layout, level: 90 },
  { name: 'Backend Development', icon: Server, level: 85 },
  { name: 'Database Design', icon: Database, level: 80 },
  { name: 'Clean Code', icon: Code2, level: 95 },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-[#F6F4F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#2E5077] mb-6">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for creating beautiful,
              functional, and user-friendly websites. With expertise in modern web technologies,
              I transform ideas into reality through clean and efficient code.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <skill.icon className="text-[#4DA1A9]" size={20} />
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-[#4DA1A9] to-[#79D7BE] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80"
                alt="Developer workspace"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#2E5077]">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}