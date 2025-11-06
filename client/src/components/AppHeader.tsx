import { Filter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AppHeaderProps {
  userAvatar: string;
  userName: string;
  onProfileClick: () => void;
  onFilterClick: () => void;
}

export default function AppHeader({ userAvatar, userName, onProfileClick, onFilterClick }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-background border-b border-border">
      <button
        onClick={onProfileClick}
        className="hover-elevate active-elevate-2 rounded-full"
        data-testid="button-profile"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      </button>

      <h1 className="text-lg font-bold">Sportpath</h1>

      <Button
        size="icon"
        variant="ghost"
        onClick={onFilterClick}
        data-testid="button-filter"
      >
        <Filter className="w-5 h-5" />
      </Button>
    </header>
  );
}
