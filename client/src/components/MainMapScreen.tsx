import { useState } from "react";
import FloatingButtons from "./FloatingButtons";
import VerticalWeatherWidget from "./VerticalWeatherWidget";
import MapPlaceholder from "./MapPlaceholder";
import FieldDetailSheet from "./FieldDetailSheet";
import BookingInterface from "./BookingInterface";
import BottomFieldsList from "./BottomFieldsList";
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
  const [showBooking, setShowBooking] = useState(false);

  const filteredFields = selectedTypes.length > 0
    ? fields.filter(f => selectedTypes.includes(f.sportType))
    : fields;

  const handleBookClick = () => {
    setShowBooking(true);
  };

  const handleCloseBooking = () => {
    setShowBooking(false);
    setSelectedField(null);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <FloatingButtons
        userAvatar={userProfile.avatar}
        userName={userProfile.name}
        onProfileClick={onProfileClick}
        onFilterClick={onFilterClick}
      />

      <VerticalWeatherWidget weather={weather} />

      <div className="flex-1 relative" data-testid="map-container">
        <MapPlaceholder
          fields={filteredFields}
          onMarkerClick={setSelectedField}
        />
      </div>

      <BottomFieldsList
        fields={filteredFields}
        onFieldClick={setSelectedField}
      />

      <FieldDetailSheet
        field={selectedField}
        isOpen={selectedField !== null && !showBooking}
        onClose={() => setSelectedField(null)}
        onBookClick={handleBookClick}
      />

      {selectedField && (
        <BookingInterface
          field={selectedField}
          isOpen={showBooking}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  );
}
