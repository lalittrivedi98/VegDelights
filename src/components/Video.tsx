"use client";
import { useState } from "react";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl cursor-pointer">
      {!playVideo && (
        <div
          onClick={() => setPlayVideo(true)}
          className="relative w-full h-[500px] pb-[56.25%] bg-black"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="absolute top-0 left-0 w-full h-full"
          />
          <button
            onClick={() => setPlayVideo(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 bg-red-600 rounded-full border-4 border-black flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white lg:w-12 lg:h-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        </div>
      )}
      {playVideo && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-[500px]"
        ></iframe>
      )}
    </div>
  );
}
