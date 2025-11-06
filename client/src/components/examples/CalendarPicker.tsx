import { useState } from "react";
import CalendarPicker from "../CalendarPicker";

export default function CalendarPickerExample() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const availableDates = [
    "2025-11-10", "2025-11-11", "2025-11-12", 
    "2025-11-13", "2025-11-14", "2025-11-15",
  ];

  return (
    <div className="p-4 bg-background">
      <CalendarPicker
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        availableDates={availableDates}
      />
      {selectedDate && (
        <p className="mt-4 text-center text-sm">Выбрано: {selectedDate}</p>
      )}
    </div>
  );
}
