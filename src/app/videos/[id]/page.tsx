import Link from "next/link";
import { notFound } from "next/navigation";
import { getVideoById, getAllVideos } from "@/lib/db";
import VideoPlayer from "@/components/VideoPlayer";
import VoteButtons from "@/components/VoteButtons";

export function generateStaticParams() {
  return getAllVideos().map((v) => ({ id: v.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function VideoDetailPage({ params }: Props) {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) notFound();

  const related = getAllVideos()
    .filter((v) => v.id !== video.id && v.cuisine === video.cuisine)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <header className="border-b border-white/10 bg-gray-900/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
          >
            ← Back to Gallery
          </Link>
          <span className="text-gray-700">|</span>
          <span className="text-2xl">🍽️</span>
          <span className="font-extrabold text-base tracking-tight">
            FoodFlicks
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Player */}
        <VideoPlayer videoUrl={video.videoUrl} title={video.title} />

        {/* Meta + vote */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div className="space-y-1">
            <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
              {video.cuisine}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {video.title}
            </h1>
            <p className="text-gray-400 text-sm">
              {video.chef} · {video.duration} · {video.createdAt}
            </p>
          </div>

          <VoteButtons video={video} className="shrink-0" />
        </div>

        {/* Description */}
        <div className="bg-gray-900 rounded-xl p-6 border border-white/10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
            About this video
          </h2>
          <p className="text-gray-300 leading-relaxed">{video.description}</p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4">
              More {video.cuisine} recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((v) => (
                <Link
                  key={v.id}
                  href={`/videos/${v.id}`}
                  className="group bg-gray-900 rounded-lg overflow-hidden border border-white/10 hover:border-orange-400/60 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.thumbnailUrl}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-white line-clamp-2 group-hover:text-orange-400 transition-colors">
                      {v.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{v.chef}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
