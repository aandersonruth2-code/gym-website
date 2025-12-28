// src/data/servicesData.js
import { Dumbbell, Users, Zap, Activity, Music, Heart } from "lucide-react";

const servicesData = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build strength and muscle with structured, professional training programs.",
    image:
      "https://images.unsplash.com/photo-1676989121400-63ba765d7f55?w=1200",
    features: [
      "Free weights & machines",
      "Personalized programs",
      "Guided progression",
      "Professional coaches",
    ],
  },
  {
    icon: Activity,
    title: "Fitness Classes",
    description:
      "High-energy group classes designed to keep you motivated and burn calories.",
    image:
      "https://images.unsplash.com/photo-1630415187908-39d6d209b15c?w=1200",
    features: [
      "All fitness levels",
      "Certified instructors",
      "Small group sessions",
      "Motivating atmosphere",
    ],
  },
  {
    icon: Zap,
    title: "Cross Training",
    description:
      "High-intensity functional training to improve performance and endurance.",
    image:
      "https://images.unsplash.com/photo-1639511205180-7b2865b2f467?w=1200",
    features: ["HIIT workouts", "Weightlifting", "Conditioning", "Team spirit"],
  },
  {
    icon: Users,
    title: "Boxing",
    description:
      "Improve strength, speed, and confidence through professional boxing training.",
    image:
      "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?w=1200",
    features: ["Technique & cardio", "Punching bags", "Agility training", "Sparring sessions"],
  },
  {
    icon: Music,
    title: "Dance Fitness",
    description:
      "Burn calories while having fun with energetic dance-based workouts.",
    image:
      "https://images.unsplash.com/photo-1630415187908-39d6d209b15c?w=1200",
    features: ["Zumba classes", "Dance cardio", "High-energy music", "Full-body workout"],
  },
  {
    icon: Heart,
    title: "Cardio Training",
    description:
      "Improve your endurance with a fully equipped, modern cardio zone.",
    image:
      "https://images.unsplash.com/photo-1761971976282-b2bb051a5474?w=1200",
    features: ["Treadmills & bikes", "HIIT cardio sessions", "Heart rate tracking", "Fat loss programs"],
  },
];

export default servicesData;
