import { useState } from "react";
import BookingInterface from "../BookingInterface";
import { mockSportsFields } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

export default function BookingInterfaceExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Booking Interface</Button>
      <BookingInterface
        field={mockSportsFields[0]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
