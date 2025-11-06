import WeatherCard from "../WeatherCard";

export default function WeatherCardExample() {
  return (
    <div className="flex gap-3 p-4">
      <WeatherCard weather={{ day: "Пн", temp: "+12°C", icon: "sun" }} />
      <WeatherCard weather={{ day: "Вт", temp: "+10°C", icon: "cloud" }} />
      <WeatherCard weather={{ day: "Ср", temp: "+8°C", icon: "rain" }} />
    </div>
  );
}
