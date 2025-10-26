// Centralized event seed data for the app
// Import directly where needed: `import events, { events as namedEvents } from "@/lib/constants";`
// Notes:
// - Each event provides: title, image, slug, location, date, time.
// - `EventCard` already supports these props, so you can spread objects directly.

export const events = [
  {
    title: "GitHub Universe 2025",
    image: "/images/event1.png",
    slug: "github-universe-2025",
    location: "San Francisco, USA",
    date: "2025-11-05",
    time: "09:00 - 17:30",
  },
  {
    title: "Web Summit Lisbon 2025",
    image: "/images/event2.png",
    slug: "web-summit-lisbon-2025",
    location: "Lisbon, Portugal",
    date: "2025-11-10",
    time: "10:00 - 18:00",
  },
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, USA",
    date: "2025-12-02",
    time: "08:30 - 17:00",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event2.png",
    slug: "google-cloud-next-2026",
    location: "San Jose, USA",
    date: "2026-04-07",
    time: "09:00 - 17:00",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event1.png",
    slug: "hackmit-2026",
    location: "Cambridge, USA",
    date: "2026-09-19",
    time: "24-hour hackathon",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-06-12",
    time: "09:30 - 18:30",
  },
];

export default events;