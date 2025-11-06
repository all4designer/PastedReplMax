import ProfileScreen from "../ProfileScreen";
import { mockUserProfile } from "@/lib/mockData";

export default function ProfileScreenExample() {
  return (
    <div className="h-screen">
      <ProfileScreen
        profile={mockUserProfile}
        onBack={() => console.log('Back clicked')}
      />
    </div>
  );
}
