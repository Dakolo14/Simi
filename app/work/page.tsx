"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Play, Folder, ArrowLeft } from "lucide-react";
import VideoModal from "@/components/VideoModal";

type WorkType = "still" | "motion";

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
  layout?: "portrait" | "landscape";
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<WorkType>("still");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const stillCollections: Collection[] = [
    // Portraits (3 per row)
    {
      id: "coke-still",
      title: "Coke",
      coverImage: "/images/still/Coke/coke-rema.jpg",
      layout: "portrait",
      projects: [
        { id: 1, src: "/images/still/Coke/coke-rema.jpg", title: "Coke Rema" },
        { id: 2, src: "/images/still/Coke/1.jpg", title: "Coke 1" },
        { id: 3, src: "/images/still/Coke/2.jpg", title: "Coke 2" },
        { id: 4, src: "/images/still/Coke/3.jpg", title: "Coke 3" },
        { id: 5, src: "/images/still/Coke/4.jpg", title: "Coke 4" },
        { id: 6, src: "/images/still/Coke/5.jpg", title: "Coke 5" },
        { id: 7, src: "/images/still/Coke/stickers.jpg", title: "Stickers" },
      ],
    },
    {
      id: "posters",
      title: "Posters",
      coverImage: "/images/still/posters/12 Hours Poster.jpg",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/still/posters/12 Hours Poster.jpg",
          title: "12 Hours",
        },
        {
          id: 2,
          src: "/images/still/posters/Bside25 1080x1350.jpg",
          title: "Bside 25",
        },
        {
          id: 3,
          src: "/images/still/posters/UEFAchamps.jpg",
          title: "UEFA Champs",
        },
      ],
    },
    {
      id: "pencil",
      title: "Pencil",
      coverImage: "/images/still/pencil/pencil.jpg",
      layout: "portrait",
      projects: [
        { id: 1, src: "/images/still/pencil/pencil.jpg", title: "Pencil" },
        { id: 2, src: "/images/still/pencil/pencil2.jpg", title: "Pencil 2" },
        { id: 3, src: "/images/still/pencil/klint.jpg", title: "Klint" },
        { id: 4, src: "/images/still/pencil/lasisi.jpg", title: "Lasisi" },
        { id: 5, src: "/images/still/pencil/nas.jpg", title: "Nas" },
      ],
    },
    {
      id: "adekunle-gold",
      title: "Adekunle Gold",
      coverImage:
        "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (3).jpg",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (3).jpg",
          title: "National Theatre 1",
        },
        {
          id: 2,
          src: "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (4).jpg",
          title: "National Theatre 2",
        },
        {
          id: 3,
          src: "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (5).jpg",
          title: "National Theatre 3",
        },
      ],
    },
    {
      id: "kcee-live",
      title: "Kcee Live",
      coverImage: "/images/still/Kcee Live/KCEE_live.jpg",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/still/Kcee Live/KCEE_live.jpg",
          title: "Kcee Live",
        },
      ],
    },
    {
      id: "manipulations",
      title: "Manipulations",
      coverImage: "/images/still/manipulations/odyssey.jpg",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/still/manipulations/odyssey.jpg",
          title: "Odyssey",
        },
        {
          id: 2,
          src: "/images/still/manipulations/coldstone.jpg",
          title: "Coldstone",
        },
        {
          id: 3,
          src: "/images/still/manipulations/creamy.jpg",
          title: "Creamy",
        },
        { id: 4, src: "/images/still/manipulations/fly.jpg", title: "Fly" },
        {
          id: 5,
          src: "/images/still/manipulations/gordon.jpg",
          title: "Gordon",
        },
        {
          id: 6,
          src: "/images/still/manipulations/swimmers.jpg",
          title: "Swimmers",
        },
      ],
    },
    {
      id: "digital-painting",
      title: "Digital Painting",
      coverImage: "/images/still/Digital painting/igbadun is important.jpg",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/still/Digital painting/THE EXHIBITION.jpg",
          title: "The Exhibition",
        },
        {
          id: 2,
          src: "/images/still/Digital painting/FallFromGrace.jpg",
          title: "Fall From Grace",
        },
        {
          id: 3,
          src: "/images/still/Digital painting/igbadun is important.jpg",
          title: "Igbadun",
        },
        { id: 4, src: "/images/still/Digital painting/pig1.jpg", title: "Pig" },
        {
          id: 5,
          src: "/images/still/Digital painting/سنة_2.jpg",
          title: "Arabic Art",
        },
      ],
    },
    // Landscapes (1 per row)
    {
      id: "trace",
      title: "Trace",
      coverImage: "/images/still/trace/adekunle-gold.jpg",
      layout: "landscape",
      projects: [
        {
          id: 1,
          src: "/images/still/trace/adekunle-gold.jpg",
          title: "Adekunle Gold",
        },
        { id: 2, src: "/images/still/trace/eazi.jpg", title: "Eazi" },
        { id: 3, src: "/images/still/trace/runtown.jpg", title: "Runtown" },
      ],
    },
    {
      id: "billboard",
      title: "Billboard",
      coverImage: "/images/still/billboard/AG BILLBOARD.jpg",
      layout: "landscape",
      projects: [
        {
          id: 1,
          src: "/images/still/billboard/AG BILLBOARD.jpg",
          title: "AG Billboard",
        },
        {
          id: 2,
          src: "/images/still/billboard/NEW COKE STUDIO BILLBOARDS (5).jpg",
          title: "Coke Billboard 1",
        },
        {
          id: 3,
          src: "/images/still/billboard/NEW COKE STUDIO BILLBOARDS (6).jpg",
          title: "Coke Billboard 2",
        },
        { id: 4, src: "/images/still/billboard/8.jpg", title: "Billboard 8" },
        { id: 5, src: "/images/still/billboard/S.jpg", title: "Billboard S" },
        {
          id: 6,
          src: "/images/still/billboard/BRKTech_1.gif",
          title: "BRKTech",
        },
      ],
    },
    {
      id: "bounce-web",
      title: "Bounce Web",
      coverImage: "/images/still/bounce web/fireboy.jpg",
      layout: "landscape",
      projects: [
        {
          id: 1,
          src: "/images/still/bounce web/fireboy.jpg",
          title: "Fireboy",
        },
        { id: 2, src: "/images/still/bounce web/kwame.jpg", title: "Kwame" },
        {
          id: 3,
          src: "/images/still/bounce web/peterObi.jpg",
          title: "Peter Obi",
        },
        { id: 4, src: "/images/still/bounce web/rema.jpg", title: "Rema" },
      ],
    },
    {
      id: "konga-web",
      title: "Konga Web",
      coverImage: "/images/still/konga web/NSF5.jpg",
      layout: "landscape",
      projects: [
        { id: 1, src: "/images/still/konga web/NSF5.jpg", title: "NSF5" },
      ],
    },
  ];

  const motionCollections: Collection[] = [
    {
      id: "davido",
      title: "Beer With Us Davido",
      coverImage: "/images/motion/Beer With Us Davido/davido.mp4",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/motion/Beer With Us Davido/davido.mp4",
          videoSrc: "/images/motion/Beer With Us Davido/davido.mp4",
          title: "Davido",
        },
      ],
    },
    {
      id: "coke-motion",
      title: "Coke",
      coverImage: "/images/motion/coke/ASAKE MTV Winner.mp4",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/motion/coke/ASAKE MTV Winner.mp4",
          videoSrc: "/images/motion/coke/ASAKE MTV Winner.mp4",
          title: "Asake MTV Winner",
        },
        {
          id: 2,
          src: "/images/motion/coke/AYRA STARR MTV Winner.mp4",
          videoSrc: "/images/motion/coke/AYRA STARR MTV Winner.mp4",
          title: "Ayra Starr MTV Winner",
        },
        {
          id: 3,
          src: "/images/motion/coke/REMA MTV Winner.mp4",
          videoSrc: "/images/motion/coke/REMA MTV Winner.mp4",
          title: "Rema MTV Winner",
        },
        {
          id: 4,
          src: "/images/motion/coke/COKE25 (11).mp4",
          videoSrc: "/images/motion/coke/COKE25 (11).mp4",
          title: "Coke 11",
        },
        {
          id: 5,
          src: "/images/motion/coke/COKE25 (12).mp4",
          videoSrc: "/images/motion/coke/COKE25 (12).mp4",
          title: "Coke 12",
        },
        {
          id: 6,
          src: "/images/motion/coke/COKE25 (13).mp4",
          videoSrc: "/images/motion/coke/COKE25 (13).mp4",
          title: "Coke 13",
        },
        {
          id: 7,
          src: "/images/motion/coke/COKE25 (14).mp4",
          videoSrc: "/images/motion/coke/COKE25 (14).mp4",
          title: "Coke 14",
        },
        {
          id: 8,
          src: "/images/motion/coke/COKE25 (15).mp4",
          videoSrc: "/images/motion/coke/COKE25 (15).mp4",
          title: "Coke 15",
        },
        {
          id: 9,
          src: "/images/motion/coke/COKE25 (16).mp4",
          videoSrc: "/images/motion/coke/COKE25 (16).mp4",
          title: "Coke 16",
        },
      ],
    },
    {
      id: "villager",
      title: "Villager",
      coverImage: "/images/motion/villager/villager_3.mp4",
      layout: "portrait",
      projects: [
        {
          id: 1,
          src: "/images/motion/villager/villager_3.mp4",
          videoSrc: "/images/motion/villager/villager_3.mp4",
          title: "Villager 3",
        },
        {
          id: 2,
          src: "/images/motion/villager/villager_4.mp4",
          videoSrc: "/images/motion/villager/villager_4.mp4",
          title: "Villager 4",
        },
      ],
    },
    {
      id: "konga-motion",
      title: "Konga",
      coverImage: "/images/motion/konga/BLACK FRIDAY YAKATA (1).gif",
      layout: "landscape",
      projects: [
        {
          id: 1,
          src: "/images/motion/konga/BLACK FRIDAY YAKATA (1).gif",
          videoSrc: "/images/motion/konga/BLACK FRIDAY YAKATA (1).gif",
          title: "Black Friday Yakata",
        },
        {
          id: 2,
          src: "/images/motion/konga/BRKTech_1.gif",
          videoSrc: "/images/motion/konga/BRKTech_1.gif",
          title: "BRKTech",
        },
        {
          id: 3,
          src: "/images/motion/konga/KFS.gif",
          videoSrc: "/images/motion/konga/KFS.gif",
          title: "KFS",
        },
        {
          id: 4,
          src: "/images/motion/konga/Premium Bannner (3).gif",
          videoSrc: "/images/motion/konga/Premium Bannner (3).gif",
          title: "Premium Banner",
        },
      ],
    },
  ];

  const currentCollections =
    activeTab === "still" ? stillCollections : motionCollections;
  const activeCollection = currentCollections.find(
    (c) => c.id === activeCategory
  );

  const isVideo = (src: string) =>
    src.toLowerCase().endsWith(".mp4") || src.toLowerCase().endsWith(".webm");

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
          <h1 className="font-serif text-5xl md:text-7xl italic">
            Selected Work
          </h1>

          {/* Toggle */}
          <div className="relative inline-flex items-center p-1 bg-secondary/30 rounded-full backdrop-blur-sm border border-border/50">
            <button
              onClick={() => {
                setActiveTab("still");
                setActiveCategory(null);
              }}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                activeTab === "still"
                  ? "text-background"
                  : "text-foreground hover:text-foreground/70"
              )}
            >
              Still
            </button>
            <button
              onClick={() => {
                setActiveTab("motion");
                setActiveCategory(null);
              }}
              className={cn(
                "relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                activeTab === "motion"
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
                activeTab === "still"
                  ? "left-1 w-[calc(50%-4px)]"
                  : "left-[50%] w-[calc(50%-4px)]"
              )}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[50vh]">
          {!activeCategory ? (
            // FOLDER VIEW (Shared for both tabs)
            <div
              className={cn(
                "grid gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500",
                "grid-cols-1 md:grid-cols-3"
              )}
            >
              {currentCollections.map((collection) => (
                <div
                  key={collection.id}
                  onClick={() => setActiveCategory(collection.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-lg bg-muted cursor-pointer border border-border/50",
                    collection.layout === "landscape"
                      ? "col-span-1 md:col-span-3 aspect-[21/9]"
                      : collection.layout === "portrait"
                      ? "col-span-1 aspect-[3/4]"
                      : "aspect-[16/9]" // Default for motion or unspecified
                  )}
                >
                  {isVideo(collection.coverImage) ? (
                    <video
                      src={collection.coverImage}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <Image
                      src={collection.coverImage}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/20 group-hover:bg-black/40 transition-colors">
                    <Folder className="w-12 h-12 text-white mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-3xl text-white italic text-center">
                      {collection.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 uppercase tracking-widest">
                      {collection.projects.length} Projects
                    </p>
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
                <h2 className="font-serif text-4xl italic">
                  {activeCollection?.title}
                </h2>
                <span className="text-muted-foreground text-sm">
                  {activeCollection?.projects.length} items
                </span>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {activeCollection?.projects.map((project) => (
                  <div
                    key={project.id}
                    className="break-inside-avoid group relative rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => {
                      if (activeTab === "motion" && project.videoSrc) {
                        setSelectedVideo(project.videoSrc);
                      }
                    }}
                  >
                    {isVideo(project.src) ? (
                      <video
                        src={project.src}
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <Image
                        src={project.src}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                    {/* Play Icon for Motion */}
                    {activeTab === "motion" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent">
                      {project.category && (
                        <p className="text-xs font-medium text-white/80 uppercase tracking-widest mb-1">
                          {project.category}
                        </p>
                      )}
                      <h3 className="font-serif text-xl text-white italic">
                        {project.title}
                      </h3>
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
