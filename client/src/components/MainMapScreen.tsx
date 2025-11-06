import { useState } from "react";
import AppHeader from "./AppHeader";
import WeatherCard from "./WeatherCard";
import MapPlaceholder from "./MapPlaceholder";
import FieldDetailSheet from "./FieldDetailSheet";
import type { SportField, WeatherDay, UserProfile } from "@shared/schema";

interface MainMapScreenProps {
  weather: WeatherDay[];
  fields: SportField[];
  userProfile: UserProfile;
  onProfileClick: () => void;
  onFilterClick: () => void;
  selectedTypes: string[];
}

export default function MainMapScreen({
  weather,
  fields,
  userProfile,
  onProfileClick,
  onFilterClick,
  selectedTypes,
}: MainMapScreenProps) {
  const [selectedField, setSelectedField] = useState<SportField | null>(null);

  const filteredFields = selectedTypes.length > 0
    ? fields.filter(f => selectedTypes.includes(f.sportType))
    : fields;

  return (
    <div className="flex flex-col h-full bg-background">
      <AppHeader
        userAvatar={userProfile.avatar}
        userName={userProfile.name}
        onProfileClick={onProfileClick}
        onFilterClick={onFilterClick}
      />

      <div className="overflow-x-auto px-4 py-3 border-b border-border">
        <div className="flex gap-3" data-testid="weather-carousel">
          {weather.map((day) => (
            <WeatherCard key={day.day} weather={day} />
          ))}
        </div>
      </div>

      <div className="flex-1 relative" data-testid="map-container">
        <MapPlaceholder
          fields={filteredFields}
          onMarkerClick={setSelectedField}
        />
      </div>

      <FieldDetailSheet
        field={selectedField}
        isOpen={selectedField !== null}
        onClose={() => setSelectedField(null)}
      />
    </div>
  );
}
