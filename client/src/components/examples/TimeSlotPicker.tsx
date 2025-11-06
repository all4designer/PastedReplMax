import { useState } from "react";
import TimeSlotPicker from "../TimeSlotPicker";
import type { TimeSlot } from "@shared/schema";

export default function TimeSlotPickerExample() {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  
  const mockSlots: TimeSlot[] = [
    { id: 1, date: "2025-11-10", time: "10:00", availableSpots: 5, totalSpots: 10, price: 800 },
    { id: 2, date: "2025-11-10", time: "12:00", availableSpots: 3, totalSpots: 10, price: 900 },
    { id: 3, date: "2025-11-10", time: "14:00", availableSpots: 0, totalSpots: 10, price: 1000 },
    { id: 4, date: "2025-11-10", time: "16:00", availableSpots: 7, totalSpots: 10, price: 1200 },
  ];

  return (
    <div className="bg-background">
      <TimeSlotPicker
        slots={mockSlots}
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      {selectedSlot && (
        <p className="p-4 text-center text-sm">
          Выбран слот: {selectedSlot.time} за {selectedSlot.price} ₽
        </p>
      )}
    </div>
  );
}
