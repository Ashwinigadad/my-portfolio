"use client";
import { useRouter } from "next/navigation";
import { motion,useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ModeToggle } from "@/components/mode-toggle";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useTransform(x, [-100, 100], [0.2, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  };
  
  const skills = {
    frontend: [
      { name: "React", progress: 90 },
      { name: "Next.js", progress: 85 },
      { name: "TypeScript", progress: 80 },
    ],
    backend: [
      { name: "Node.js", progress: 85 },
      { name: "Python", progress: 30 },
      { name: "Java", progress: 70 },
    ],
    database: [
      { name: "PostgreSQL", progress: 30 },
      { name: "MongoDB", progress: 90 },
      { name: "prisma", progress: 30 },
    ],
    tools: [
      { name: "Git", progress: 80 },
      { name: "Docker", progress: 40 },
      { name: "AWS", progress: 40 },
    ],
  };

  const projects = [
    {
      name: "Tingu - The Chat Bot",
      image: "/images/tingulogo.png",
      description: "A smart chatbot powered by Gemini.",
      codeLink: "https://github.com/Ashwinigadad/TINGUtheChatbot.git",
      demoLink: "https://tingu-steel.vercel.app/",
    },
    {
      name: "E-commerce Store",
      image: "images/elogo.png",
      description: "A modern e-commerce platform with secure checkout.",
      codeLink: "https://github.com/Ashwinigadad/E-commerce",
      demoLink: "/ecommerce",
    },
    {
      name: "Pitch Directory",
      image: "images/loopitch.png",
      description: "A personal portfolio showcasing my projects and skills.",
      codeLink: "https://github.com/Ashwinigadad/Pitch-Directory",
      demoLink: "/pitch",
    },
    {
      name: "Degree ERP",
      image: "images/dproject.png",
      description: "The backend for degree ERP management",
      codeLink: "https://github.com/Ashwinigadad/D_Project",
      demoLink: "/D-project",
    },
    {
      name: "AIET.LOGO.surf",
      image: "images/logogen.png",
      description: "Generating logo from text",
      codeLink: "https://github.com/Ashwinigadad/Logo-generator",
      demoLink: "https://logo-generator-plum.vercel.app/",
    },
    {
      name: "Portfolio Website",
      image: "images/pf.png",
      description: "A personal portfolio showcasing my projects and skills.",
      codeLink: "https://github.com/yourusername/portfolio",
      demoLink: "portfolio",
    },
  ];

  const certificates = [
    {
      title: "Data Structures and Algorithms for Programmers",
      issuer: "Udemy",
      date: "March 13,2024",
      link: "https://res.cloudinary.com/dp9mcjmuu/image/upload/v1741798282/dsaudemy_nfh7nu.jpg",
    },
    {
      title: "JavaScript ES6!",
      issuer: "Udemy",
      date: "Feb.25,2024",
      link: "https://res.cloudinary.com/dp9mcjmuu/image/upload/v1741798479/es6_cpjbxk.jpg",
    },
    {
      title: "Many more",
      // issuer: "Coursera",
      // date: "December 2023",
      link: "https://console.cloudinary.com/console/c-5b6941c2c3fa49850461228124ff16/media_library/folders/cac5a62500891f726dfa6ec818d74f14ea?view_mode=mosaic",
    },
  ];
  

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" onMouseMove={handleMouseMove}
>      {/* Spotlight Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent)`,
        }}
      />
  
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
           Tangevva's Portfolio
          </motion.h1>
          <ModeToggle />
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        
        {/* Hero Section */}
        <motion.section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent)`,
        }}
      /> */}

      <motion.div className="text-center relative z-10">
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
          <motion.img
            src="/images/ash.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tangevva Gadad</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Full Stack Developer
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.button whileHover={{ scale: 1.1 }}>
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>


       {/* Skills Section */}
<motion.section 
  className="py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  
  <motion.h2 
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Skills
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Frontend */}
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Code2 className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Frontend</h3>
        </div>
        <div className="space-y-4">
          {skills.frontend.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>

    {/* Backend */}
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Server className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Backend</h3>
        </div>
        <div className="space-y-4">
          {skills.backend.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>

    {/* Database */}
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Database className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Database</h3>
        </div>
        <div className="space-y-4">
          {skills.database.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>

    {/* Tools */}
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center mb-4">
          <Wrench className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Tools</h3>
        </div>
        <div className="space-y-4">
          {skills.tools.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} />
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  </div>
</motion.section>


 {/* Projects Section */}
<section className="py-20">
  <motion.h2 
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Featured Projects
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="group"
      >
        <Card className="overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                asChild
              >
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
              <Button 
  size="sm" 
  onClick={() => router.push(project.demoLink)} 
>
  Live Demo
</Button>
            </div>
          </div>
        </Card>
      </motion.div>
    ))}
  </div>
</section>

{/* //certificates */}

<section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        {certificates.map((cert, index) => (
          <Card key={index} className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <BadgeCheck className="h-4 w-4 mr-2" /> View Certificate
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </section>


        {/* Contact Section */}
        <section className="py-20">
  <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
  <div className="max-w-2xl mx-auto">
    <Card className="p-8">
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/Ashwinigadad" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/tangevva-r-gadad-0b20a625a/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </a>
        <a href="mailto:ashwinigadad3@gmail.com">
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </a>
      </div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md border bg-background"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md border bg-background"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full p-3 rounded-md border bg-background"
        />
        <Button className="w-full">Send Message</Button>
      </form>
    </Card>
  </div>
</section>

      </main>

      <footer className="border-t py-8 text-center text-muted-foreground">
      </footer>
    </div>
  );
}