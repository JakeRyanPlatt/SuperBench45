export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  cuisine: string;
  chef: string;
  duration: string; // e.g. "12:34"
  thumbsUp: number;
  thumbsDown: number;
  createdAt: string;
}

export type VoteType = "up" | "down";
