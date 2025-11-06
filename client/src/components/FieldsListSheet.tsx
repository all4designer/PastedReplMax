import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SportField } from "@shared/schema";

interface FieldsListSheetProps {
  fields: SportField[];
  isOpen: boolean;
  onClose: () => void;
  onFieldClick: (field: SportField) => void;
}

export default function FieldsListSheet({
  fields,
  isOpen,
  onClose,
  onFieldClick,
}: FieldsListSheetProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        onClick={onClose}
        data-testid="fields-list-overlay"
      />
      <div
        className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-xl z-50 transform transition-transform duration-300 max-w-lg mx-auto"
        style={{ height: '50vh' }}
        data-testid="fields-list-sheet"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-bold">Доступные площадки</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              data-testid="button-close-fields-list"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="overflow-y-auto flex-1 p-4">
            <div className="space-y-3">
              {fields.map((field) => {
                const fullStars = Math.floor(field.rating);
                const hasHalfStar = field.rating % 1 >= 0.5;

                return (
                  <Card
                    key={field.id}
                    onClick={() => {
                      onFieldClick(field);
                      onClose();
                    }}
                    className="cursor-pointer hover:bg-accent/50 transition-colors p-3 flex gap-3"
                    data-testid={`field-list-item-${field.id}`}
                  >
                    <img
                      src={field.image}
                      alt={field.name}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1">
                        {field.name}
                      </h4>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < fullStars
                                ? 'fill-primary text-primary'
                                : i === fullStars && hasHalfStar
                                ? 'fill-primary/50 text-primary'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">
                          {field.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {field.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
