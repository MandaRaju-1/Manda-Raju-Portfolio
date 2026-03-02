import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Download, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code2, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          {portfolioData.name.split(' ')[0]}<span className="text-blue-600">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={portfolioData.resumeUrl}
            className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={portfolioData.resumeUrl}
                className="inline-block px-5 py-3 bg-black text-white text-center font-medium rounded-xl"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Turning data into <span className="text-blue-600">decisions.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            {portfolioData.about}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin size={16} className="mr-2" />
              {portfolioData.location}
            </div>
            <a href={`mailto:${portfolioData.email}`} className="flex items-center text-gray-500 text-sm hover:text-blue-600 transition-colors">
              <Mail size={16} className="mr-2" />
              {portfolioData.email}
            </a>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            {portfolioData.socials.map((social) => {
              const Icon = social.platform === 'LinkedIn' ? Linkedin : social.platform === 'GitHub' ? Github : Twitter;
              return (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                  aria-label={social.platform}
                >
                  <Icon size={20} className="text-gray-700" />
                </a>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 border-8 border-white shadow-2xl">
            <img 
              src="https://picsum.photos/seed/portrait/800/800" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-500">The tools and technologies I use to solve complex problems.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100 hover:border-blue-200 transition-colors group"
            >
              <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {idx === 0 ? <Code2 size={24} /> : idx === 1 ? <Award size={24} /> : idx === 2 ? <Briefcase size={24} /> : <BookOpen size={24} />}
              </div>
              <h3 className="text-lg font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-600 group-hover:border-blue-100 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, idx }: any) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
    >
      <div className="aspect-video overflow-hidden relative group/carousel">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImage}
            src={project.images[currentImage]} 
            alt={`${project.title} - ${currentImage + 1}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronRight size={16} className="rotate-180" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_: any, i: number) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? 'bg-white w-4' : 'bg-white/50'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold flex items-center text-blue-600 hover:text-blue-700"
            >
              Live Demo <ExternalLink size={14} className="ml-1" />
            </a>
          )}
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold flex items-center text-gray-600 hover:text-black"
            >
              Repository <Github size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-500">Interactive showcase of my recent data analysis and visualization work.</p>
          </div>
          <a href="#" className="text-blue-600 font-medium flex items-center hover:underline">
            View all projects <ChevronRight size={18} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-12">
            {portfolioData.education.map((edu, idx) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-100"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-600 font-medium mb-3">{edu.institution}</p>
                {edu.description && <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>}
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 mt-20">Certifications</h2>
          <div className="grid gap-4">
            {portfolioData.certifications.map((cert) => (
              <div key={cert.name} className="p-6 rounded-2xl border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <h4 className="font-bold text-sm">{cert.name}</h4>
                  <p className="text-xs text-gray-500">{cert.issuer} • {cert.date}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-gray-400 hover:text-blue-600"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Achievements</h2>
          <div className="space-y-6">
            {portfolioData.achievements.map((ach) => (
              <motion.div 
                key={ach.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">{ach.date}</span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold mb-2">{ach.title}</h3>
                      {ach.link && (
                        <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-10 rounded-3xl bg-blue-600 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-blue-100 mb-8 max-w-xs">I'm always open to discussing new projects, data challenges or opportunities.</p>
              <a 
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get in touch <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <div className="text-2xl font-bold tracking-tighter mb-4">
            {portfolioData.name.split(' ')[0]}<span className="text-blue-600">.</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Helping businesses make sense of their data through advanced analytics and visualization.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {portfolioData.socials.map((social) => {
            const Icon = social.platform === 'LinkedIn' ? Linkedin : social.platform === 'GitHub' ? Github : Twitter;
            return (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-blue-600 transition-colors"
                aria-label={social.platform}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="text-right">
          <p className="text-sm font-medium mb-2">Contact</p>
          <a href={`mailto:${portfolioData.email}`} className="text-gray-500 hover:text-blue-600 transition-colors">
            {portfolioData.email}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved. Built with precision and passion.
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
