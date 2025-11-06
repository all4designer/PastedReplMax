import MapPlaceholder from "../MapPlaceholder";
import { mockSportsFields } from "@/lib/mockData";

export default function MapPlaceholderExample() {
  return (
    <div className="h-96">
      <MapPlaceholder
        fields={mockSportsFields}
        onMarkerClick={(field) => console.log('Marker clicked:', field.name)}
      />
    </div>
  );
}
