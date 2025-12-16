"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50"
        aria-label="Close video"
      >
        <X className="w-8 h-8" />
      </button>

      <div
        className="relative w-full max-w-6xl aspect-video mx-4 md:mx-10 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {videoSrc.toLowerCase().endsWith(".gif") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={videoSrc}
            alt="Full screen preview"
            className="w-full h-full object-contain rounded-lg shadow-2xl"
          />
        ) : (
          <video
            src={videoSrc}
            className="w-full h-full rounded-lg shadow-2xl"
            controls
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Click backdrop to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>,
    document.body
  );
}
