import { motion } from 'framer-motion';
import { Linkedin, Briefcase, Award, GraduationCap, ExternalLink, Download } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { GitHubIcon } from '@/components/icons/SocialIcons';

/**
 * About page with developer biography and professional information
 * Features split layout with avatar and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}. ${developerInfo.biography.split('\n\n')[0]}`}
        image={developerInfo.avatarImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {developerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Avatar Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                  <img
                    src={developerInfo.avatarImage}
                    alt={developerInfo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Social Links & Resume */}
                <div className="flex items-center gap-4 flex-wrap">
                  {developerInfo.socialLinks.github && (
                    <a
                      href={developerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="size-5 fill-current" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a
                      href={developerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  <a
                    href="/resume.pdf"
                    download="Siddu_Nyamagoud_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors font-medium text-sm"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {developerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {developerInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* Biography */}
                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{developerInfo.location}</span>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Education: </span>
                    <span className="text-foreground">{developerInfo.education}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Briefcase className="size-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Work Experience
              </h2>
            </motion.div>
            
            <div className="space-y-12">
              {developerInfo.workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-border"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-wide">
                        {job.title}
                      </h3>
                      <p className="text-lg text-primary font-light">{job.company}</p>
                      <p className="text-sm text-muted-foreground font-light">
                        {job.location} • {job.period}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground font-light leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Award className="size-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Certifications
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerInfo.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <GraduationCap className="size-6 text-primary" />
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="View credential"
                        >
                          <ExternalLink className="size-4 text-muted-foreground hover:text-primary" />
                        </a>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium tracking-wide">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground font-light">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground font-light mt-1">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-wide mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developerInfo.skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-medium tracking-wide">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground font-light"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
