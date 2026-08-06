"use client";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-video shadow-2xl">
      <video
        className="w-full h-full"
        controls
        preload="metadata"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
