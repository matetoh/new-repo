import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Cpu, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text hover:scale-110 transition-transform">
              JD
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transition-transform">About</a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transition-transform">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transition-transform">Contact</a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        <div className="absolute inset-0 grid-background animate-pulse" />
        <div 
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full filter blur-[100px] animate-pulse"
          style={{
            left: '20%',
            top: '20%',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] animate-pulse"
          style={{
            right: '20%',
            bottom: '20%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Computer Science Student & Full Stack Developer
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                Contact Me
              </a>
              <a href="#projects" className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8" />, title: 'Frontend Development', desc: 'React, TypeScript, Tailwind' },
              { icon: <Terminal className="w-8 h-8" />, title: 'Backend Development', desc: 'Node.js, Python, Java' },
              { icon: <Database className="w-8 h-8" />, title: 'Database Design', desc: 'PostgreSQL, MongoDB' },
              { icon: <Cpu className="w-8 h-8" />, title: 'System Architecture', desc: 'AWS, Docker, CI/CD' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-black/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover-glow"
              >
                <div className="text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Chat Application',
                desc: 'Real-time chat application with AI-powered responses',
                tech: ['React', 'Node.js', 'OpenAI'],
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800'
              },
              {
                title: 'E-Commerce Platform',
                desc: 'Full-stack e-commerce solution with payment integration',
                tech: ['Next.js', 'Stripe', 'PostgreSQL'],
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800'
              },
              {
                title: 'Portfolio Generator',
                desc: 'Automated portfolio website generator for developers',
                tech: ['TypeScript', 'AWS', 'GraphQL'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover-glow"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-125">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-125">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:contact@example.com"
                className="text-gray-400 hover:text-purple-400 transition-all hover:scale-125">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;