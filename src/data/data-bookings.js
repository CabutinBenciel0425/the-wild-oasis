import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // Forest Haven
  {
    created_at: fromToday(-12, true),
    startDate: fromToday(0),
    endDate: fromToday(3),
    cabinId: 1,
    guestId: 5,
    hasBreakfast: true,
    observations: "Vegetarian breakfast preferred.",
    isPaid: false,
    numGuests: 2,
  },
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-20),
    endDate: fromToday(-15),
    cabinId: 1,
    guestId: 8,
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 2,
  },

  // Lakeside Retreat
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(10),
    endDate: fromToday(14),
    cabinId: 2,
    guestId: 12,
    hasBreakfast: true,
    observations: "Please arrange a crib for our baby.",
    isPaid: true,
    numGuests: 3,
  },
  {
    created_at: fromToday(-40, true),
    startDate: fromToday(-35),
    endDate: fromToday(-30),
    cabinId: 2,
    guestId: 3,
    hasBreakfast: false,
    observations: "",
    isPaid: true,
    numGuests: 4,
  },

  // Mountain View Lodge
  {
    created_at: fromToday(-15, true),
    startDate: fromToday(5),
    endDate: fromToday(12),
    cabinId: 3,
    guestId: 10,
    hasBreakfast: true,
    observations: "We’ll arrive late evening.",
    isPaid: false,
    numGuests: 6,
  },
  {
    created_at: fromToday(-60, true),
    startDate: fromToday(-50),
    endDate: fromToday(-45),
    cabinId: 3,
    guestId: 14,
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 5,
  },

  // Riverside Cabin
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(2),
    endDate: fromToday(5),
    cabinId: 4,
    guestId: 7,
    hasBreakfast: false,
    observations: "We’ll bring our dog.",
    isPaid: true,
    numGuests: 3,
  },

  // Cedarwood Chalet
  {
    created_at: fromToday(-25, true),
    startDate: fromToday(-10),
    endDate: fromToday(-5),
    cabinId: 5,
    guestId: 18,
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 6,
  },
  {
    created_at: fromToday(-1, true),
    startDate: fromToday(20),
    endDate: fromToday(25),
    cabinId: 5,
    guestId: 21,
    hasBreakfast: true,
    observations: "Celebrating a birthday — any decorations?",
    isPaid: false,
    numGuests: 8,
  },

  // Summit Lodge
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(30),
    endDate: fromToday(37),
    cabinId: 6,
    guestId: 2,
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 10,
  },

  // Birchwood Escape
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(4),
    cabinId: 7,
    guestId: 15,
    hasBreakfast: false,
    observations: "Need two extra pillows.",
    isPaid: true,
    numGuests: 5,
  },
];
