import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Palette, Monitor, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FloatingIcons } from '@/components/FloatingIcons';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce website with cart, checkout, and product management',
    tech: ['React', 'Redux', 'Tailwind CSS'],
    github: 'https://github.com/IbrahimHasssan1/E-commerce',
    demo: 'https://e-commerce-react-two-olive.vercel.app/',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'YouTube Clone',
    description: 'YouTube replica with video playback, search, and recommendations',
    tech: ['React', 'API Integration', 'CSS'],
    github: 'https://github.com/IbrahimHasssan1/youtube',
    demo: 'https://you-tube-mu-dusky.vercel.app/',
    gradient: 'from-red-500 to-red-600'
  },
  {
    title: 'TMDB Movies',
    description: 'Movie database app with search, filters, and detailed movie information',
    tech: ['React', 'TMDB API', 'Bootstrap'],
    github: 'https://github.com/IbrahimHasssan1/Tmdb',
    demo: 'https://tmdb-virid-eta.vercel.app/',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix-style streaming interface with browse and search features',
    tech: ['React', 'Firebase', 'Styled Components'],
    github: 'https://github.com/IbrahimHasssan1/netflix',
    demo: 'https://net-flix-ten-blue.vercel.app/',
    gradient: 'from-red-600 to-black'
  },
  {
    title: 'Spotify Clone',
    description: 'Music streaming app with playlist management and audio playback',
    tech: ['React', 'Spotify API', 'CSS3'],
    github: 'https://github.com/IbrahimHasssan1/Spotify',
    demo: 'https://spot-ify-one.vercel.app/',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Restaurant Website',
    description: 'Modern restaurant website with menu, reservations, and contact forms',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/IbrahimHasssan1/Restaurant',
    demo: 'https://res-taurant-sigma.vercel.app/',
    gradient: 'from-amber-500 to-orange-600'
  },
];

export const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <FloatingIcons icons={[Github, Monitor, Smartphone, Palette, Sparkles]} count={12} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('projects_title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group relative overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all card-hover h-full flex flex-col">
                  {/* Gradient header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/40 hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t('view_code')}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('live_demo')}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
