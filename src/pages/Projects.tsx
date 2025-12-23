import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Mobile"];

const projects = [
  {
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete visual identity system for a sustainable fashion brand, including logo, typography, and color palette.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Mobile App UI",
    category: "UI/UX Design",
    description: "Intuitive mobile application design for a fitness tracking app with gamification elements.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Comprehensive analytics dashboard with data visualization and real-time reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    description: "Modern restaurant website with online ordering system and table reservation functionality.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    title: "Fintech App Design",
    category: "Mobile",
    description: "Banking application design focused on simplicity and security for everyday transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Rebrand",
    category: "Branding",
    description: "Complete brand overhaul for a technology company, including new visual identity and brand guidelines.",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop",
  },
  {
    title: "Travel Booking Platform",
    category: "UI/UX Design",
    description: "User experience design for a travel booking platform with focus on discovery and seamless booking.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Portfolio
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[1.1]">
              Selected works &
              <br />
              <span className="italic text-primary">case studies</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A curated collection of projects showcasing my expertise in design, 
              development, and creative problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 border-y border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-x-8 gap-y-16"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
