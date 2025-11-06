import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import type { TimeSlot } from "@shared/schema";

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export default function TimeSlotPicker({
  slots,
  selectedSlot,
  onSelectSlot,
}: TimeSlotPickerProps) {
  if (slots.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Нет доступных слотов на эту дату
      </div>
    );
  }

  return (
    <div className="p-4" data-testid="time-slot-picker">
      <h3 className="text-sm font-semibold mb-3">Выберите время</h3>
      <div className="grid grid-cols-2 gap-2">
        {slots.map((slot) => {
          const isSelected = selectedSlot?.id === slot.id;
          const isAvailable = slot.availableSpots > 0;

          return (
            <Card
              key={slot.id}
              onClick={() => isAvailable && onSelectSlot(slot)}
              className={`
                p-3 cursor-pointer transition-all
                ${isSelected
                  ? 'border-primary border-2 bg-primary/10'
                  : isAvailable
                  ? 'hover-elevate active-elevate-2'
                  : 'opacity-50 cursor-not-allowed'
                }
              `}
              data-testid={`time-slot-${slot.id}`}
            >
              <div className="flex flex-col gap-1">
                <span className={`text-sm font-semibold ${isSelected ? 'text-primary' : ''}`}>
                  {slot.time}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  <span>{slot.availableSpots}/{slot.totalSpots}</span>
                </div>
                <span className="text-xs font-medium text-foreground">
                  {slot.price} ₽
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
