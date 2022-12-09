import dayjs from "dayjs";
import { suggestHoliday } from "./suggestHoliday";
import { WeekDay } from "./types/Day";
import { Month, MonthNumber } from "./types/Month";

const getWeekDays = (): WeekDay[] => [
  { label: "SUN", position: 0, isHoliday: true },
  { label: "MON", position: 1, isHoliday: false },
  { label: "TUE", position: 2, isHoliday: false },
  { label: "WED", position: 3, isHoliday: false },
  { label: "THU", position: 4, isHoliday: false },
  { label: "FRI", position: 5, isHoliday: false },
  { label: "SAT", position: 6, isHoliday: false },
];

export const getMonth = (year: number, month: MonthNumber): Month => {
  const monthTable: Month = {
    header: getWeekDays(),
    month,
    days: [],
  };

  const dateFirstOfMonth = dayjs(new Date(year, month - 1, 1));
  const daysInMonth = dateFirstOfMonth.daysInMonth();

  monthTable.days = [...Array(daysInMonth)].map((_: undefined, idx: number) => {
    const date = dateFirstOfMonth.add(idx, "day");
    const dayFirstOfMonth = dateFirstOfMonth.day();
    return {
      label: idx + 1,
      position: dayFirstOfMonth + idx,
      isWeekend: date.day() === 0, // 日曜日のときtrue
      ...suggestHoliday(date),
    };
  });

  return monthTable;
};
