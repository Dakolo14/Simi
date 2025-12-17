import Link from "next/link";
import InfiniteGallery from "@/components/InfiniteGallery";

export default function Home() {
  const sampleImages = [
    {
      src: "/images/still/posters/12 Hours Poster.jpg",
      alt: "12 Hours Poster",
    },
    {
      src: "/images/still/posters/UEFAchamps.jpg",
      alt: "UEFA Champions League",
    },
    {
      src: "/images/still/Digital painting/THE EXHIBITION.jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/Coke/3.jpg", alt: "Project Image 3" },
    {
      src: "/images/still/manipulations/creamy.jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/Coke/coke-rema.jpg", alt: "Coke x Rema" },
    {
      src: "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (4).jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/Kcee Live/KCEE_live.jpg", alt: "Kcee Live" },
    { src: "/images/still/pencil/klint.jpg", alt: "Klint da Drunk" },
    {
      src: "/images/still/manipulations/coldstone.jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/Coke/1.jpg", alt: "Project Image 1" },
    { src: "/images/still/pencil/lasisi.jpg", alt: "Lasisi Elenu" },
    { src: "/images/still/pencil/nas.jpg", alt: "Nas Boi" },
    {
      src: "/images/still/Digital painting/FallFromGrace.jpg",
      alt: "Project Image 4",
    },
    {
      src: "/images/still/manipulations/fly.jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/Coke/5.jpg", alt: "Project Image 5" },
    {
      src: "/images/still/Digital painting/pig1.jpg",
      alt: "Project Image 4",
    },
    { src: "/images/still/bounce web/rema.jpg", alt: "BNet Design" },
    { src: "/images/still/bounce web/fireboy.jpg", alt: "Bside 25" },
    { src: "/images/still/Coke/2.jpg", alt: "Project Image 2" },
    { src: "/images/still/Coke/4.jpg", alt: "Project Image 4" },
    { src: "/images/still/konga web/NSF5.jpg", alt: "Project Image 4" },
    {
      src: "/images/still/manipulations/gordon.jpg",
      alt: "Project Image 4",
    },
    {
      src: "/images/still/Adekunle Gold/Adekunle Gold at the National Theatre (3).jpg",
      alt: "Project Image 4",
    },
    {
      src: "/images/still/posters/Bside25 1080x1350.jpg",
      alt: "Project Image 4",
    },
    {
      src: "/images/still/Digital painting/igbadun is important.jpg",
      alt: "Project Image 4",
    },
  ];

  return (
    <main className="min-h-screen ">
      <InfiniteGallery
        images={sampleImages}
        speed={1.2}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      <div className="h-screen inset-0 pointer-events-none fixed flex flex-col items-center justify-center text-center px-3 mix-blend-exclusion text-white gap-8">
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
          <span className="italic">Engineer</span> Moments of Wonder
        </h1>
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link
            href="/about"
            className="px-8 py-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-95"
          >
            About Me
          </Link>
          <Link
            href="/work"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
          >
            View My Work
          </Link>
        </div>
      </div>

      <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className=" opacity-60">
          Auto-play resumes after 3 seconds of inactivity
        </p>
      </div>
    </main>
  );
}
