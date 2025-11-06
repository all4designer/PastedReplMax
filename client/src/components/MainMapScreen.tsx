import { useState } from "react";
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingButtons from "./FloatingButtons";
import VerticalWeatherWidget from "./VerticalWeatherWidget";
import MapPlaceholder from "./MapPlaceholder";
import FieldDetailSheet from "./FieldDetailSheet";
import BookingInterface from "./BookingInterface";
import FieldsListSheet from "./FieldsListSheet";
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
  const [showFieldsList, setShowFieldsList] = useState(false);

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

      <button
        onClick={() => setShowFieldsList(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 hover-elevate active-elevate-2 rounded-full w-14 h-14 flex items-center justify-center bg-background/90 backdrop-blur-md border border-border shadow-lg"
        data-testid="button-open-fields-list"
      >
        <List className="w-6 h-6" />
      </button>

      <FieldsListSheet
        fields={filteredFields}
        isOpen={showFieldsList}
        onClose={() => setShowFieldsList(false)}
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
