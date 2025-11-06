import { Filter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FloatingButtonsProps {
  userAvatar: string;
  userName: string;
  onProfileClick: () => void;
  onFilterClick: () => void;
}

export default function FloatingButtons({
  userAvatar,
  userName,
  onProfileClick,
  onFilterClick,
}: FloatingButtonsProps) {
  return (
    <>
      <button
        onClick={onProfileClick}
        className="fixed top-4 left-4 z-50 hover-elevate active-elevate-2 rounded-full bg-background/80 backdrop-blur-md p-1 border border-border shadow-lg"
        data-testid="button-profile-floating"
      >
        <Avatar className="w-10 h-10">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      </button>

      <Button
        size="icon"
        variant="secondary"
        onClick={onFilterClick}
        className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-md border border-border shadow-lg"
        data-testid="button-filter-floating"
      >
        <Filter className="w-5 h-5" />
      </Button>
    </>
  );
}
