import FloatingButtons from "../FloatingButtons";

export default function FloatingButtonsExample() {
  return (
    <div className="relative h-96 bg-accent/30">
      <FloatingButtons
        userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan"
        userName="Иван Иванов"
        onProfileClick={() => console.log('Profile clicked')}
        onFilterClick={() => console.log('Filter clicked')}
      />
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Floating buttons over content</p>
      </div>
    </div>
  );
}
