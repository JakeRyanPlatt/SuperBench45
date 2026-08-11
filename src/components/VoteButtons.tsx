"use client";

import { useState } from "react";
import { Video } from "@/lib/types";

interface VoteButtonsProps {
  video: Video;
  className?: string;
}

export default function VoteButtons({ video, className = "" }: VoteButtonsProps) {
  const [thumbsUp, setThumbsUp] = useState(video.thumbsUp);
  const [thumbsDown, setThumbsDown] = useState(video.thumbsDown);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const [loading, setLoading] = useState(false);

  const total = thumbsUp + thumbsDown;
  const upPct = total > 0 ? Math.round((thumbsUp / total) * 100) : 0;

  async function handleVote(type: "up" | "down") {
    if (voted || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/videos/${video.id}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });
      if (res.ok) {
        const updated = await res.json();
        setThumbsUp(updated.thumbsUp);
        setThumbsDown(updated.thumbsDown);
        setVoted(type);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex gap-3">
        <button
          onClick={() => handleVote("up")}
          disabled={!!voted || loading}
          aria-label="Thumbs up"
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all
            ${voted === "up"
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-white/10 hover:bg-green-500 hover:text-white text-gray-200 border border-white/20"}
            disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          <span className="text-xl">👍</span>
          <span>{thumbsUp.toLocaleString()}</span>
        </button>

        <button
          onClick={() => handleVote("down")}
          disabled={!!voted || loading}
          aria-label="Thumbs down"
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all
            ${voted === "down"
              ? "bg-red-500 text-white shadow-lg scale-105"
              : "bg-white/10 hover:bg-red-500 hover:text-white text-gray-200 border border-white/20"}
            disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          <span className="text-xl">👎</span>
          <span>{thumbsDown.toLocaleString()}</span>
        </button>
      </div>

      {/* Approval bar */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${upPct}%` }}
          />
        </div>
        <span>{upPct}% approve</span>
      </div>

      {voted && (
        <p className="text-xs text-gray-400">
          Thanks for your vote!
        </p>
      )}
    </div>
  );
}
