import { Sun, Cloud, CloudRain } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { WeatherDay } from "@shared/schema";

interface WeatherCardProps {
  weather: WeatherDay;
}

const weatherIcons = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
};

export default function WeatherCard({ weather }: WeatherCardProps) {
  const Icon = weatherIcons[weather.icon];

  return (
    <Card className="flex-shrink-0 w-20 p-3 flex flex-col items-center gap-2" data-testid={`weather-card-${weather.day}`}>
      <span className="text-sm font-medium text-foreground">{weather.day}</span>
      <Icon className="w-6 h-6 text-primary" />
      <span className="text-xs text-muted-foreground">{weather.temp}</span>
    </Card>
  );
}
