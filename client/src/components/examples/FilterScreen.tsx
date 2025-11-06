import { useState } from "react";
import FilterScreen from "../FilterScreen";

export default function FilterScreenExample() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['football']);

  const handleToggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="h-screen">
      <FilterScreen
        selectedTypes={selectedTypes}
        onToggleType={handleToggleType}
        onBack={() => console.log('Back clicked')}
      />
    </div>
  );
}
