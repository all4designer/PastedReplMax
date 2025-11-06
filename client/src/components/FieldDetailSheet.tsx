import { X, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SportField } from "@shared/schema";

interface FieldDetailSheetProps {
  field: SportField | null;
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export default function FieldDetailSheet({
  field,
  isOpen,
  onClose,
  onBookClick,
}: FieldDetailSheetProps) {
  if (!isOpen || !field) return null;

  const fullStars = Math.floor(field.rating);
  const hasHalfStar = field.rating % 1 >= 0.5;

  const nextAvailableSlots = field.timeSlots
    .filter(slot => slot.availableSpots > 0)
    .slice(0, 3);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        onClick={onClose}
        data-testid="sheet-overlay"
      />
      <div
        className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-xl z-50 transform transition-transform duration-300 max-w-lg mx-auto"
        style={{ maxHeight: '85vh' }}
        data-testid="field-detail-sheet"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4 pb-0">
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              data-testid="button-close-sheet"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="overflow-y-auto px-6 pb-6">
            <img
              src={field.image}
              alt={field.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              data-testid="img-field"
            />

            <h2 className="text-2xl font-bold mb-2" data-testid="text-field-name">
              {field.name}
            </h2>

            <div className="flex items-center gap-1 mb-3" data-testid="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < fullStars
                      ? 'fill-primary text-primary'
                      : i === fullStars && hasHalfStar
                      ? 'fill-primary/50 text-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {field.rating.toFixed(1)}
              </span>
            </div>

            <p className="text-muted-foreground mb-4" data-testid="text-description">
              {field.description}
            </p>

            {nextAvailableSlots.length > 0 && (
              <Card className="p-3 mb-6 bg-accent/30">
                <p className="text-sm font-medium mb-2">Ближайшие слоты:</p>
                <div className="flex flex-col gap-1">
                  {nextAvailableSlots.map((slot) => (
                    <p key={slot.id} className="text-xs text-muted-foreground">
                      {slot.date} в {slot.time} • {slot.availableSpots} мест
                    </p>
                  ))}
                </div>
              </Card>
            )}

            <div className="flex gap-3">
              <Button
                className="flex-1"
                data-testid="button-book"
                onClick={onBookClick}
              >
                Записаться
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                data-testid="button-route"
                onClick={() => console.log('Building route to:', field.name)}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Маршрут
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
