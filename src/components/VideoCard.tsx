import Link from "next/link";
import Image from "next/image";
import { Video } from "@/lib/types";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const total = video.thumbsUp + video.thumbsDown;
  const upPct = total > 0 ? Math.round((video.thumbsUp / total) * 100) : 0;

  return (
    <Link href={`/videos/${video.id}`} className="group block">
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-800 overflow-hidden">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Duration badge */}
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-0.5 rounded">
            {video.duration}
          </span>
          {/* Cuisine badge */}
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            {video.cuisine}
          </span>
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          <h2 className="text-white font-semibold text-base leading-snug line-clamp-2 group-hover:text-orange-400 transition-colors">
            {video.title}
          </h2>
          <p className="text-gray-500 text-xs">{video.chef}</p>

          {/* Approval mini-bar */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-green-400 text-sm">👍 {video.thumbsUp.toLocaleString()}</span>
            <span className="text-red-400 text-sm">👎 {video.thumbsDown.toLocaleString()}</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden ml-1">
              <div
                className="h-full bg-green-500"
                style={{ width: `${upPct}%` }}
              />
            </div>
            <span className="text-gray-500 text-xs">{upPct}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
