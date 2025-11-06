import AppHeader from "../AppHeader";

export default function AppHeaderExample() {
  return (
    <AppHeader
      userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan"
      userName="Иван Иванов"
      onProfileClick={() => console.log('Profile clicked')}
      onFilterClick={() => console.log('Filter clicked')}
    />
  );
}
