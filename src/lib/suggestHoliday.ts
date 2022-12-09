import dayjs from "dayjs";
import holidays from "./assets/holiday.json";
import { Holiday, Workday } from "./types/Day";

export const suggestHoliday = (date: dayjs.Dayjs): Holiday | Workday => {
  const formattedDay = date.format("YYYY/M/D");
  const holiday = holidays.find((table) => table.date === formattedDay);
  if (holiday === undefined) {
    const isHoliday = date.day() === 0;
    return isHoliday ? { isHoliday, holidayName: "" } : { isHoliday };
  }

  return {
    isHoliday: true,
    holidayName: holiday.holiday_name,
  };
};
