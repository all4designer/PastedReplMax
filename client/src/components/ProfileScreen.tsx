import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import BookingListItem from "./BookingListItem";
import type { UserProfile } from "@shared/schema";

interface ProfileScreenProps {
  profile: UserProfile;
  onBack: () => void;
}

export default function ProfileScreen({ profile, onBack }: ProfileScreenProps) {
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
        <h1 className="text-lg font-bold">Профиль</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 flex flex-col items-center border-b border-border">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold" data-testid="text-user-name">
            {profile.name}
          </h2>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-3">Активные записи</h3>
          <div className="space-y-3 mb-6">
            {profile.activeBookings.length > 0 ? (
              profile.activeBookings.map((booking) => (
                <BookingListItem
                  key={booking.id}
                  field={booking.field}
                  date={booking.date}
                  time={booking.time}
                  weather={booking.weather}
                  showRouteButton={true}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Нет активных записей
              </p>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-3">История записей</h3>
          <div className="space-y-3">
            {profile.history.length > 0 ? (
              profile.history.map((booking) => (
                <BookingListItem
                  key={booking.id}
                  field={booking.field}
                  date={booking.date}
                  time={booking.time}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">
                История пуста
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
