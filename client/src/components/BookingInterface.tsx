import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendarPicker from "./CalendarPicker";
import TimeSlotPicker from "./TimeSlotPicker";
import type { SportField, TimeSlot } from "@shared/schema";

interface BookingInterfaceProps {
  field: SportField;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingInterface({
  field,
  isOpen,
  onClose,
}: BookingInterfaceProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  if (!isOpen) return null;

  const availableDates = Array.from(new Set(field.timeSlots.map(slot => slot.date)));
  const slotsForDate = selectedDate
    ? field.timeSlots.filter(slot => slot.date === selectedDate)
    : [];

  const handleConfirmBooking = () => {
    if (selectedSlot) {
      console.log('Booking confirmed:', {
        field: field.name,
        date: selectedDate,
        time: selectedSlot.time,
        price: selectedSlot.price,
      });
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={onClose}
        data-testid="booking-overlay"
      />
      <div
        className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-xl z-50 transform transition-transform duration-300 max-w-lg mx-auto"
        style={{ maxHeight: '90vh' }}
        data-testid="booking-interface"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-bold">Бронирование</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              data-testid="button-close-booking"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="p-4 border-b border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                Площадка
              </h3>
              <p className="font-semibold" data-testid="text-field-name">
                {field.name}
              </p>
            </div>

            <CalendarPicker
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              availableDates={availableDates}
            />

            {selectedDate && (
              <TimeSlotPicker
                slots={slotsForDate}
                selectedSlot={selectedSlot}
                onSelectSlot={setSelectedSlot}
              />
            )}
          </div>

          {selectedSlot && (
            <div className="p-4 border-t border-border bg-card/50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-muted-foreground">Итого:</span>
                <span className="text-xl font-bold">{selectedSlot.price} ₽</span>
              </div>
              <Button
                className="w-full"
                onClick={handleConfirmBooking}
                data-testid="button-confirm-booking"
              >
                Подтвердить бронирование
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
