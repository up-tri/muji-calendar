import { Day, WeekDay } from "./Day";

export type WeekDays = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export type WeekStartDays = "SUN" | "MON";
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Months = MonthNumber[];
export const months: Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export type Month = {
  header: WeekDay[];
  month: MonthNumber;
  days: Day[];
};
