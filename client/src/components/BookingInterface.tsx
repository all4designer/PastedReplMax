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
        className="fixed inset-0 z-50 flex items-end justify-center max-w-lg mx-auto"
        data-testid="booking-interface"
      >
        <div
          className="w-full bg-background rounded-t-3xl shadow-xl transform transition-transform duration-300 flex flex-col"
          style={{ maxHeight: '90vh' }}
        >
          <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
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

          <div className="flex-1 overflow-y-auto">
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

            {selectedSlot && (
              <div className="p-4">
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
      </div>
    </>
  );
}
