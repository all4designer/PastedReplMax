import { z } from "zod";

export const timeSlotSchema = z.object({
  id: z.number(),
  date: z.string(),
  time: z.string(),
  availableSpots: z.number(),
  totalSpots: z.number(),
  price: z.number(),
});

export const sportFieldSchema = z.object({
  id: z.number(),
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
  rating: z.number(),
  image: z.string(),
  description: z.string(),
  sportType: z.enum(['football', 'basketball', 'tennis', 'volleyball', 'futsal']),
  timeSlots: z.array(timeSlotSchema),
});

export const userProfileSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  activeBookings: z.array(z.object({
    id: z.number(),
    field: z.string(),
    date: z.string(),
    time: z.string(),
    weather: z.enum(['sunny', 'cloudy', 'rainy']),
  })),
  history: z.array(z.object({
    id: z.number(),
    field: z.string(),
    date: z.string(),
    time: z.string(),
  })),
});

export const weatherDaySchema = z.object({
  day: z.string(),
  temp: z.string(),
  icon: z.enum(['sun', 'cloud', 'rain']),
});

export type TimeSlot = z.infer<typeof timeSlotSchema>;
export type SportField = z.infer<typeof sportFieldSchema>;
export type UserProfile = z.infer<typeof userProfileSchema>;
export type WeatherDay = z.infer<typeof weatherDaySchema>;

export const users = null;
export const insertUserSchema = z.object({});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };
