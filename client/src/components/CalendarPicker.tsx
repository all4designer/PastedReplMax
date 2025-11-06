import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CalendarPickerProps {
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  availableDates: string[];
}

export default function CalendarPicker({
  selectedDate,
  onSelectDate,
  availableDates,
}: CalendarPickerProps) {
  const [currentMonth] = useState(new Date(2025, 10, 1));

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthName = currentMonth.toLocaleDateString('ru-RU', {
    month: 'long',
    year: 'numeric',
  });

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const formatDate = (day: number) => {
    return `2025-11-${day.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4" data-testid="calendar-picker">
      <div className="flex items-center justify-between mb-4">
        <Button size="icon" variant="ghost" disabled>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h3 className="text-base font-semibold capitalize">{monthName}</h3>
        <Button size="icon" variant="ghost" disabled>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day) {
            return <div key={`empty-${index}`} />;
          }

          const dateStr = formatDate(day);
          const isAvailable = availableDates.includes(dateStr);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={day}
              onClick={() => isAvailable && onSelectDate(dateStr)}
              disabled={!isAvailable}
              className={`
                aspect-square rounded-md text-sm font-medium transition-all
                ${isSelected
                  ? 'bg-primary text-primary-foreground'
                  : isAvailable
                  ? 'bg-card hover-elevate active-elevate-2 text-foreground'
                  : 'text-muted-foreground/30 cursor-not-allowed'
                }
              `}
              data-testid={`calendar-day-${day}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
