import type { SportField, UserProfile, WeatherDay } from "@shared/schema";
import footballFieldImage from "@assets/generated_images/Football_field_exterior_view_e1753e5c.png";
import basketballCourtImage from "@assets/generated_images/Basketball_court_outdoor_view_07cde2b1.png";
import tennisCourtImage from "@assets/generated_images/Tennis_court_aerial_view_7918f2d1.png";
import volleyballCourtImage from "@assets/generated_images/Volleyball_sand_court_view_96606708.png";
import futsalCourtImage from "@assets/generated_images/Indoor_futsal_court_view_bf1f3543.png";

export const mockSportsFields: SportField[] = [
  {
    id: 1,
    name: "Футбольное поле Центральное",
    lat: 55.7558,
    lng: 37.6173,
    rating: 4.5,
    image: footballFieldImage,
    description: "Профессиональное покрытие, отличное освещение",
    sportType: "football",
    status: "Сегодня 16:00, 5 человек",
    bookings: [{ date: "2025-11-10", time: "16:00", players: 5 }],
  },
  {
    id: 2,
    name: "Баскетбольная площадка Парковая",
    lat: 55.7518,
    lng: 37.6235,
    rating: 4.2,
    image: basketballCourtImage,
    description: "Открытая площадка с новым покрытием",
    sportType: "basketball",
    status: "Сегодня 18:00, 8 человек",
    bookings: [{ date: "2025-11-10", time: "18:00", players: 8 }],
  },
  {
    id: 3,
    name: "Теннисный корт Спортивный",
    lat: 55.7598,
    lng: 37.6113,
    rating: 4.8,
    image: tennisCourtImage,
    description: "Хард покрытие, профессиональное обслуживание",
    sportType: "tennis",
    status: "Сегодня 14:00, 4 человека",
    bookings: [{ date: "2025-11-10", time: "14:00", players: 4 }],
  },
  {
    id: 4,
    name: "Волейбольная площадка Пляжная",
    lat: 55.7538,
    lng: 37.6193,
    rating: 4.3,
    image: volleyballCourtImage,
    description: "Песчаное покрытие, отличный вид",
    sportType: "volleyball",
    status: "Сегодня 17:00, 6 человек",
    bookings: [{ date: "2025-11-10", time: "17:00", players: 6 }],
  },
  {
    id: 5,
    name: "Футзальный зал Арена",
    lat: 55.7578,
    lng: 37.6153,
    rating: 4.7,
    image: futsalCourtImage,
    description: "Крытый зал, климат-контроль, раздевалки",
    sportType: "futsal",
    status: "Сегодня 19:00, 10 человек",
    bookings: [{ date: "2025-11-10", time: "19:00", players: 10 }],
  },
];

export const mockUserProfile: UserProfile = {
  name: "Иван Иванов",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
  activeBookings: [
    {
      id: 1,
      field: "Футбольное поле Центральное",
      date: "2025-11-10",
      time: "16:00",
      weather: "sunny",
    },
    {
      id: 3,
      field: "Теннисный корт Спортивный",
      date: "2025-11-12",
      time: "14:00",
      weather: "cloudy",
    },
  ],
  history: [
    {
      id: 2,
      field: "Баскетбольная площадка Парковая",
      date: "2025-11-05",
      time: "18:00",
    },
    {
      id: 4,
      field: "Волейбольная площадка Пляжная",
      date: "2025-11-03",
      time: "17:00",
    },
  ],
};

export const mockWeather: WeatherDay[] = [
  { day: "Пн", temp: "+12°C", icon: "sun" },
  { day: "Вт", temp: "+10°C", icon: "cloud" },
  { day: "Ср", temp: "+8°C", icon: "rain" },
  { day: "Чт", temp: "+11°C", icon: "cloud" },
  { day: "Пт", temp: "+13°C", icon: "sun" },
];
