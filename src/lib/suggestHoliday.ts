import dayjs from "dayjs";
import holidays from "./assets/holiday.json";

export const suggestHoliday = (
  date: dayjs.Dayjs
): {
  isHoliday: boolean;
  holidayName?: string;
} => {
  const formattedDay = date.format("YYYY/M/D");
  const holiday = holidays.find((table) => table.date === formattedDay);
  if (holiday === undefined) {
    return {
      isHoliday: date.day() === 0,
    };
  }

  return {
    isHoliday: true,
    holidayName: holiday.holiday_name,
  };
};
