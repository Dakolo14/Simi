'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Play, Folder, ArrowLeft } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

type WorkType = 'still' | 'motion';

interface Project {
  id: number;
  src: string;
  title: string;
  category?: string;
  videoSrc?: string;
}

interface Collection {
  id: string;
  title: string;
  coverImage: string;
  projects: Project[];
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<WorkType>('still');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const stillCollections: Collection[] = [
    {
      id: 'coke',
      title: 'Coke-Studios Work',
      coverImage: '/images/coke-rema.jpg',
      projects: [
        { id: 1, src: '/images/coke-rema.jpg', title: 'Rema x Coke Studio' },
        { id: 2, src: '/images/NEW COKE STUDIO BILLBOARDS (5).jpg', title: 'Billboard Campaign' },
        { id: 3, src: '/images/NEW COKE STUDIO BILLBOARDS (6).jpg', title: 'Street Ads' },
      ]
    },
    {
      id: 'pencil',
      title: 'Pencil Unbroken',
      coverImage: '/images/pencil.jpg',
      projects: [
        { id: 1, src: '/images/pencil.jpg', title: 'Pencil Unbroken Main' },
        { id: 2, src: '/images/pencil2.jpg', title: 'Character Study' },
      ]
    },
    {
      id: 'freestyles',
      title: 'Freestyles',
      coverImage: '/images/kcee-live.jpg',
      projects: [
        { id: 1, src: '/images/kcee-live.jpg', title: 'Kcee Live' },
        { id: 2, src: '/images/klint.jpg', title: 'Klint da Drunk' },
        { id: 3, src: '/images/lasisi.jpg', title: 'Lasisi Elenu' },
        { id: 4, src: '/images/nas.jpg', title: 'Nas Boi' },
      ]
    },
    {
      id: 'konga',
      title: 'Konga',
      coverImage: '/images/BLACK FRIDAY YAKATA (1).gif',
      projects: [
        { id: 1, src: '/images/BLACK FRIDAY YAKATA (1).gif', title: 'Yakata Black Friday' },
        { id: 2, src: '/images/Premium Bannner (4).gif', title: 'Premium Banner' },
      ]
    }
  ];

  const motionCollections: Collection[] = [
    {
      id: 'coke-motion',
      title: 'Coke Studios',
      coverImage: '/images/coke-rema.jpg',
      projects: [
        { id: 1, src: '/images/coke-rema.jpg', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', title: 'Coke Studio TVC', category: 'Commercial' },
        { id: 2, src: '/images/NEW COKE STUDIO BILLBOARDS (5).jpg', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', title: 'Digital Billboard', category: 'OOH' },
      ]
    },
    {
      id: 'konga-motion',
      title: 'Konga',
      coverImage: '/images/BLACK FRIDAY YAKATA (1).gif',
      projects: [
        { id: 1, src: '/images/BLACK FRIDAY YAKATA (1).gif', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', title: 'Yakata Promo', category: 'Social Media' },
        { id: 2, src: '/images/Premium Bannner (4).gif', videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', title: 'Konga Premium', category: 'Animation' },
      ]
    }
  ];

  const currentCollections = activeTab === 'still' ? stillCollections : motionCollections;
  const activeCollection = currentCollections.find(c => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-background pt-32 px-6 pb-20">
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoSrc={selectedVideo || ""} 
      />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20 space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl italic">Selected Work</h1>
          
          {/* Toggle */}
          <div className="relative inline-flex items-center p-1 bg-secondary/30 rounded-full backdrop-blur-sm border border-border/50">
            <button
              onClick={() => { setActiveTab('still'); setActiveCategory(null); }}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                activeTab === 'still' 
                  ? "text-background" 
                  : "text-foreground hover:text-foreground/70"
              )}
            >
              Still
            </button>
            <button
              onClick={() => { setActiveTab('motion'); setActiveCategory(null); }}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                activeTab === 'motion' 
                  ? "text-background" 
                  : "text-foreground hover:text-foreground/70"
              )}
            >
              Motion
            </button>
            
            {/* Sliding Background */}
            <div 
              className={cn(
                "absolute top-1 bottom-1 rounded-full bg-foreground transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                activeTab === 'still' ? "left-1 w-[calc(50%-4px)]" : "left-[50%] w-[calc(50%-4px)]"
              )}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[50vh]">
          {!activeCategory ? (
            // FOLDER VIEW (Shared for both tabs)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {currentCollections.map((collection) => (
                <div 
                  key={collection.id}
                  onClick={() => setActiveCategory(collection.id)}
                  className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-muted cursor-pointer border border-border/50"
                >
                  <Image
                    src={collection.coverImage}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/20 group-hover:bg-black/40 transition-colors">
                    <Folder className="w-12 h-12 text-white mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-3xl text-white italic text-center">{collection.title}</h3>
                    <p className="text-white/70 text-sm mt-2 uppercase tracking-widest">{collection.projects.length} Projects</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // INSIDE FOLDER VIEW (Masonry Layout for mixed aspect ratios)
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button 
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Folders
              </button>
              
              <div className="flex items-baseline gap-4 border-b border-border/50 pb-4">
                 <h2 className="font-serif text-4xl italic">{activeCollection?.title}</h2>
                 <span className="text-muted-foreground text-sm">{activeCollection?.projects.length} items</span>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {activeCollection?.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="break-inside-avoid group relative rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => {
                      if (activeTab === 'motion' && project.videoSrc) {
                        setSelectedVideo(project.videoSrc);
                      }
                    }}
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                    
                    {/* Play Icon for Motion */}
                    {activeTab === 'motion' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent">
                      {project.category && (
                        <p className="text-xs font-medium text-white/80 uppercase tracking-widest mb-1">{project.category}</p>
                      )}
                      <h3 className="font-serif text-xl text-white italic">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
