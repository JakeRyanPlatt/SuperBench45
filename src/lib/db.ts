import { Video } from "./types";

// In-memory store (replace with a real DB in production)
const videos: Video[] = [
  {
    id: "1",
    title: "Perfect Neapolitan Pizza",
    description:
      "Watch Chef Marco craft an authentic Neapolitan pizza from scratch — hand-stretched dough, San Marzano tomatoes, fresh mozzarella, and a blazing wood-fired oven.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "Italian",
    chef: "Chef Marco",
    duration: "14:22",
    thumbsUp: 312,
    thumbsDown: 14,
    createdAt: "2025-01-10",
  },
  {
    id: "2",
    title: "Spicy Korean Fried Chicken",
    description:
      "Double-fried, sticky, and coated in a fiery gochujang glaze. Chef Ji-hoon shares every secret behind the crunchiest Korean fried chicken you've ever tasted.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "Korean",
    chef: "Chef Ji-hoon",
    duration: "18:05",
    thumbsUp: 487,
    thumbsDown: 21,
    createdAt: "2025-02-14",
  },
  {
    id: "3",
    title: "Classic French Croissants",
    description:
      "Achieve those impossibly flaky, buttery layers at home. Chef Sophie walks through the lamination process step by step so your croissants look — and taste — patisserie-worthy.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "French",
    chef: "Chef Sophie",
    duration: "22:50",
    thumbsUp: 654,
    thumbsDown: 8,
    createdAt: "2025-03-01",
  },
  {
    id: "4",
    title: "Authentic Beef Tacos al Pastor",
    description:
      "Marinated pork slow-cooked on a trompo, served with grilled pineapple, cilantro, and charred tortillas. Chef Rodrigo brings the taqueria to your kitchen.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "Mexican",
    chef: "Chef Rodrigo",
    duration: "16:30",
    thumbsUp: 298,
    thumbsDown: 19,
    createdAt: "2025-03-22",
  },
  {
    id: "5",
    title: "Silky Ramen from Scratch",
    description:
      "Rich tonkotsu broth, hand-pulled noodles, chashu pork, and a perfectly marinated soft-boiled egg. Chef Yuki reveals the 12-hour process behind a bowl of perfect ramen.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "Japanese",
    chef: "Chef Yuki",
    duration: "26:15",
    thumbsUp: 721,
    thumbsDown: 12,
    createdAt: "2025-04-05",
  },
  {
    id: "6",
    title: "Butter Chicken Masala",
    description:
      "Creamy, aromatic, and deeply spiced — Chef Priya's family recipe for butter chicken is the only one you'll ever need. Learn to make the perfect naan on the side.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=640&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    cuisine: "Indian",
    chef: "Chef Priya",
    duration: "19:48",
    thumbsUp: 543,
    thumbsDown: 17,
    createdAt: "2025-04-20",
  },
];

export function getAllVideos(): Video[] {
  return videos;
}

export function getVideoById(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function voteOnVideo(
  id: string,
  type: "up" | "down"
): Video | undefined {
  const video = videos.find((v) => v.id === id);
  if (!video) return undefined;
  if (type === "up") video.thumbsUp += 1;
  else video.thumbsDown += 1;
  return video;
}
