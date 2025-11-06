import { useState } from "react";
import FieldDetailSheet from "../FieldDetailSheet";
import { mockSportsFields } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

export default function FieldDetailSheetExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Field Details</Button>
      <FieldDetailSheet
        field={mockSportsFields[0]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
