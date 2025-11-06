import { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainMapScreen from "@/components/MainMapScreen";
import ProfileScreen from "@/components/ProfileScreen";
import FilterScreen from "@/components/FilterScreen";
import { mockWeather, mockSportsFields, mockUserProfile } from "@/lib/mockData";

type Screen = 'map' | 'profile' | 'filter';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('map');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleToggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="h-screen overflow-hidden bg-background">
          {currentScreen === 'map' && (
            <MainMapScreen
              weather={mockWeather}
              fields={mockSportsFields}
              userProfile={mockUserProfile}
              onProfileClick={() => setCurrentScreen('profile')}
              onFilterClick={() => setCurrentScreen('filter')}
              selectedTypes={selectedTypes}
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen
              profile={mockUserProfile}
              onBack={() => setCurrentScreen('map')}
            />
          )}

          {currentScreen === 'filter' && (
            <FilterScreen
              selectedTypes={selectedTypes}
              onToggleType={handleToggleType}
              onBack={() => setCurrentScreen('map')}
            />
          )}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
