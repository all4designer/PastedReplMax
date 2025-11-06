import VerticalWeatherWidget from "../VerticalWeatherWidget";
import { mockWeather } from "@/lib/mockData";

export default function VerticalWeatherWidgetExample() {
  return (
    <div className="relative h-96 bg-accent/30">
      <VerticalWeatherWidget weather={mockWeather} />
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Vertical weather widget on the left</p>
      </div>
    </div>
  );
}
