import dayjs from "dayjs";
import { suggestHoliday } from "./suggestHoliday";

export type Months = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Day = {
  position: number;
  isWeekend: boolean;
} & {
  isHoliday: boolean;
  holidayName?: string;
};

export type Month = {
  month: Months;
  days: number[];
  detail: {
    [key: string]: Day;
  };
};

export const getMonth = (year: number, month: Months): Month => {
  const monthTable: Month = {
    month,
    days: [],
    detail: {},
  };

  console.log({ year, month });
  const dateFirstOfMonth = dayjs(new Date(year, month - 1, 1));
  const daysInMonth = dateFirstOfMonth.daysInMonth();
  console.log({ daysInMonth });
  monthTable.days = [...Array(daysInMonth)].map(
    (_: undefined, idx: number) => idx + 1
  );
  const dayFirstOfMonth = dateFirstOfMonth.day();

  for (let i = 0; i < daysInMonth; i++) {
    const date = dateFirstOfMonth.add(i, "day");
    monthTable.detail = {
      ...monthTable.detail,
      ...{
        [`${i + 1}`]: {
          position: dayFirstOfMonth + i,
          isWeekend: date.day() === 0, // 日曜日のときtrue
          ...suggestHoliday(date),
        },
      },
    };
  }

  return monthTable;
};
