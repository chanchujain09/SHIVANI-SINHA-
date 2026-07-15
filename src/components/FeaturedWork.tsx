import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  youtubeUrl: string;
  description: string;
}

// Storing all real YouTube Shorts portfolio videos in a single dynamic array
const featuredProjects: Project[] = [
  {
    title: "Content Creation Project 01",
    description: "High-fidelity vertical production showcasing compelling storytelling and visual rhythm.",
    youtubeUrl: "https://youtube.com/shorts/SYFiT7dhM14",
  },
  {
    title: "Content Creation Project 02",
    description: "Aesthetic styling, dynamic editing transitions, and natural pacing optimized for modern formats.",
    youtubeUrl: "https://youtube.com/shorts/IPDQUtBYIpY",
  },
  {
    title: "Content Creation Project 03",
    description: "Immersive sensory angles, tactical product close-ups, and professional color grading.",
    youtubeUrl: "https://youtube.com/shorts/f8Pp3HKLBIk",
  },
  {
    title: "Content Creation Project 04",
    description: "Engaging commercial content built to captivate audiences instantly and drive engagement.",
    youtubeUrl: "https://youtube.com/shorts/nMCAT9hDLP4",
  },
  {
    title: "Content Creation Project 05",
    description: "Clean spatial flow, elegant framing, and cozy lighting details suited for luxury lifestyle brands.",
    youtubeUrl: "https://youtube.com/shorts/6UTrCAITxiw",
  },
  {
    title: "Content Creation Project 06",
    description: "Authentic narrative storytelling featuring seamless cuts and crisp creative direction.",
    youtubeUrl: "https://youtube.com/shorts/iEOOFJUt1s4",
  }
];

// Helper to reliably parse YouTube Short or standard Video ID
function getYouTubeVideoId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:shorts\/|v=|\/|embed\/|youtu.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
}

export default function FeaturedWork() {
  // Dynamically split into 2 columns for a clean masonry staggered layout
  const column1 = featuredProjects.filter((_, idx) => idx % 2 === 0);
  const column2 = featuredProjects.filter((_, idx) => idx % 2 !== 0);

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work" className="py-16 md:py-24 lg:py-36 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 min-h-auto">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12 md:mb-24 lg:mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-6 text-text-dark/40 font-bold"
        >
          Featured Work
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-text-dark tracking-tight leading-[1.1] mb-6"
        >
          Selected Video Creations
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-dark/70 font-sans font-light leading-relaxed text-lg md:text-xl"
        >
          Explore a curated collection of high-fidelity UGC, aesthetic storytelling, and commercial video assets engineered to build authentic community engagement.
        </motion.p>
      </div>

      {/* 2-Column Staggered Masonry Layout (Tablet: 2-column grid, Desktop: staggered, Mobile: single column) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {column1.map((project, idx) => (
            <ProjectCard 
              key={project.youtubeUrl} 
              project={project} 
              index={idx * 2} 
              onClick={handleVideoClick} 
            />
          ))}
        </div>

        {/* Right Column (Staggered offset for desktop, aligned for tablet) */}
        <div className="flex flex-col gap-12 lg:gap-20 md:pt-28">
          {column2.map((project, idx) => (
            <ProjectCard 
              key={project.youtubeUrl} 
              project={project} 
              index={idx * 2 + 1} 
              onClick={handleVideoClick} 
            />
          ))}
        </div>

      </div>

    </section>
  );
}

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  index: number;
  onClick: (url: string) => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const videoId = getYouTubeVideoId(project.youtubeUrl);
  // Default to maxresdefault for crisp clarity, fall back to hqdefault on error
  const [imgSrc, setImgSrc] = React.useState(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);

  const handleImgError = () => {
    if (imgSrc !== `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`) {
      setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(project.youtubeUrl)}
      className="group cursor-pointer flex flex-col w-full relative"
    >
      
      {/* Large Thumbnail Card - Natively 9:16 aspect ratio to match vertical shorts perfectly without black bars */}
      <div className="relative aspect-[9/16] w-full rounded-[28px] overflow-hidden glass-panel shadow-sm hover:shadow-2xl transition-all duration-500 bg-stone-100 mb-4">
        
        {/* Soft elegant overlay */}
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />

        {/* Thumbnail Image with smooth zoom on hover & lazy loading & auto high-res fallback */}
        {videoId && (
          <img 
            src={imgSrc} 
            alt={project.title} 
            loading="lazy"
            onError={handleImgError}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.04]"
          />
        )}

        {/* Play Icon Overlay in center */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div 
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-white/45 group-hover:border-white/50"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.96 }}
          >
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </motion.div>
        </div>

        {/* YouTube Shorts badge pill */}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-3.5 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-sans font-bold tracking-widest text-white uppercase border border-white/10">
            YouTube Shorts
          </span>
        </div>

      </div>

      {/* Card Typography Content with Watch Video button */}
      <div className="px-1 flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-2xl md:text-3xl text-text-dark tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-dark/60 font-sans font-light text-base leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>

        {/* Minimal Watch Video Button */}
        <div className="shrink-0 mt-2 md:mt-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-wider text-text-dark uppercase py-2.5 px-5 rounded-full border border-text-dark/10 group-hover:bg-text-dark group-hover:text-cream transition-all duration-500">
            Watch Video
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

    </motion.div>
  );
}
