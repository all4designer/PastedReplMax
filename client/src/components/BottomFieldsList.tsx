import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { SportField } from "@shared/schema";

interface BottomFieldsListProps {
  fields: SportField[];
  onFieldClick: (field: SportField) => void;
}

export default function BottomFieldsList({ fields, onFieldClick }: BottomFieldsListProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
          Доступные площадки в городе
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {fields.map((field) => {
            const fullStars = Math.floor(field.rating);
            const hasHalfStar = field.rating % 1 >= 0.5;

            return (
              <Card
                key={field.id}
                onClick={() => onFieldClick(field)}
                className="min-w-[280px] cursor-pointer hover:bg-accent/50 transition-colors p-3 flex gap-3"
                data-testid={`field-card-${field.id}`}
              >
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate mb-1">
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
  );
}
