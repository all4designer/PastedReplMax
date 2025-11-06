import { MapPin } from "lucide-react";
import type { SportField } from "@shared/schema";

interface MapPlaceholderProps {
  fields: SportField[];
  onMarkerClick: (field: SportField) => void;
}

export default function MapPlaceholder({ fields, onMarkerClick }: MapPlaceholderProps) {
  return (
    <div className="relative w-full h-full bg-accent/30 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-muted-foreground text-lg">Yandex Maps</span>
      </div>
      
      {fields.map((field, index) => {
        const positions = [
          { top: '25%', left: '30%' },
          { top: '40%', left: '60%' },
          { top: '60%', left: '35%' },
          { top: '50%', left: '70%' },
          { top: '35%', left: '45%' },
        ];
        const pos = positions[index % positions.length];
        
        return (
          <button
            key={field.id}
            onClick={() => onMarkerClick(field)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 hover-elevate active-elevate-2 p-2 rounded-full bg-primary text-primary-foreground transition-transform"
            style={{ top: pos.top, left: pos.left }}
            data-testid={`marker-field-${field.id}`}
          >
            <MapPin className="w-6 h-6" />
          </button>
        );
      })}
    </div>
  );
}
