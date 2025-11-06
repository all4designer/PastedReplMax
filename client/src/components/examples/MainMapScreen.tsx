import MainMapScreen from "../MainMapScreen";
import { mockWeather, mockSportsFields, mockUserProfile } from "@/lib/mockData";

export default function MainMapScreenExample() {
  return (
    <div className="h-screen">
      <MainMapScreen
        weather={mockWeather}
        fields={mockSportsFields}
        userProfile={mockUserProfile}
        onProfileClick={() => console.log('Profile clicked')}
        onFilterClick={() => console.log('Filter clicked')}
        selectedTypes={[]}
      />
    </div>
  );
}
