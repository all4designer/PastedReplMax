import { Filter, User } from "lucide-react";
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
        className="fixed top-4 left-4 z-50 hover-elevate active-elevate-2 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg w-14 h-14 p-0 flex items-center justify-center"
        data-testid="button-profile-floating"
      >
        <Avatar className="w-12 h-12">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>
            <User className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
      </button>

      <button
        onClick={onFilterClick}
        className="fixed top-4 right-4 z-50 hover-elevate active-elevate-2 rounded-full w-14 h-14 flex items-center justify-center bg-background/90 backdrop-blur-md border border-border shadow-lg"
        data-testid="button-filter-floating"
      >
        <Filter className="w-6 h-6" />
      </button>
    </>
  );
}
