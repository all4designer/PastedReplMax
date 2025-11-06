import { Sun, Cloud, CloudRain, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BookingListItemProps {
  field: string;
  date: string;
  time: string;
  weather?: 'sunny' | 'cloudy' | 'rainy';
  showRouteButton?: boolean;
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
};

export default function BookingListItem({
  field,
  date,
  time,
  weather,
  showRouteButton = false,
}: BookingListItemProps) {
  const WeatherIcon = weather ? weatherIcons[weather] : null;

  return (
    <Card className="p-4 flex items-center gap-3" data-testid={`booking-item-${field}`}>
      {WeatherIcon && (
        <div className="flex-shrink-0">
          <WeatherIcon className="w-6 h-6 text-primary" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate" data-testid="text-field-name">
          {field}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid="text-booking-time">
          {date} • {time}
        </p>
      </div>

      {showRouteButton && (
        <Button
          size="sm"
          variant="secondary"
          data-testid="button-build-route"
          onClick={() => console.log('Building route to:', field)}
        >
          <Navigation className="w-4 h-4 mr-1" />
          Маршрут
        </Button>
      )}
    </Card>
  );
}
