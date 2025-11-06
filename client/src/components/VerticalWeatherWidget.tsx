import { Sun, Cloud, CloudRain } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { WeatherDay } from "@shared/schema";

interface VerticalWeatherWidgetProps {
  weather: WeatherDay[];
}

const weatherIcons = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
};

export default function VerticalWeatherWidget({ weather }: VerticalWeatherWidgetProps) {
  return (
    <Card className="fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-background/80 backdrop-blur-md border border-border shadow-lg p-2 flex flex-col gap-2" data-testid="weather-widget-vertical">
      {weather.map((day) => {
        const Icon = weatherIcons[day.icon];
        return (
          <div
            key={day.day}
            className="flex flex-col items-center gap-1 p-2 rounded hover-elevate"
            data-testid={`weather-day-${day.day}`}
          >
            <span className="text-xs font-medium text-foreground">{day.day}</span>
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-xs text-muted-foreground">{day.temp}</span>
          </div>
        );
      })}
    </Card>
  );
}
