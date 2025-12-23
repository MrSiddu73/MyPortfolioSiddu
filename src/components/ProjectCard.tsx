import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  link = "#",
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
          
          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="text-primary-foreground" size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {category}
          </span>
          <h3 className="mt-2 font-display text-2xl font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </a>
    </motion.article>
  );
}
