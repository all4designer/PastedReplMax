import { ArrowLeft, Volleyball, Dribbble, Trophy, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FilterScreenProps {
  selectedTypes: string[];
  onToggleType: (type: string) => void;
  onBack: () => void;
}

const sportTypes = [
  { id: 'football', label: 'Футбол', icon: Volleyball },
  { id: 'basketball', label: 'Баскетбол', icon: Dribbble },
  { id: 'tennis', label: 'Теннис', icon: Trophy },
  { id: 'volleyball', label: 'Волейбол', icon: User },
  { id: 'futsal', label: 'Футзал', icon: Volleyball },
];

export default function FilterScreen({ selectedTypes, onToggleType, onBack }: FilterScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <header className="flex items-center gap-3 p-4 border-b border-border">
        <Button
          size="icon"
          variant="ghost"
          onClick={onBack}
          data-testid="button-back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-bold">Фильтры</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">
          Тип спорта
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {sportTypes.map((sport) => {
            const Icon = sport.icon;
            const isSelected = selectedTypes.includes(sport.id);

            return (
              <Card
                key={sport.id}
                className={`p-4 cursor-pointer transition-all hover-elevate active-elevate-2 ${
                  isSelected ? 'border-primary border-2' : ''
                }`}
                onClick={() => onToggleType(sport.id)}
                data-testid={`filter-${sport.id}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className={`w-8 h-8 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`text-sm font-medium ${isSelected ? 'text-primary' : ''}`}>
                    {sport.label}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-6">
          <Button
            className="w-full"
            onClick={onBack}
            data-testid="button-apply-filters"
          >
            Применить фильтры
          </Button>
        </div>
      </div>
    </div>
  );
}
