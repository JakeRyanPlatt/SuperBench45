import VideoCard from "@/components/VideoCard";
import { getAllVideos } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  const videos = getAllVideos();

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <header className="border-b border-white/10 bg-gray-900/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-extrabold text-lg tracking-tight">
              FoodFlicks
            </span>
          </div>
          <p className="text-sm text-gray-400 hidden sm:block">
            Food review videos · Rate with 👍 or 👎
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Food Review Gallery
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            {videos.length} videos · Watch, taste, and cast your vote
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
