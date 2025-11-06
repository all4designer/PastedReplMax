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

      <Button
        onClick={() => setShowFieldsList(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 shadow-xl"
        size="lg"
        data-testid="button-open-fields-list"
      >
        <List className="w-5 h-5 mr-2" />
        Список
      </Button>

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
