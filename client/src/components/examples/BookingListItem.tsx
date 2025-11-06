import BookingListItem from "../BookingListItem";

export default function BookingListItemExample() {
  return (
    <div className="p-4 space-y-3">
      <BookingListItem
        field="Футбольное поле Центральное"
        date="2025-11-10"
        time="16:00"
        weather="sunny"
        showRouteButton={true}
      />
      <BookingListItem
        field="Баскетбольная площадка Парковая"
        date="2025-11-05"
        time="18:00"
      />
    </div>
  );
}
