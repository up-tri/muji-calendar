import { Day, WeekDay } from "./Day";

export type WeekDays = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export type WeekStartDays = "SUN" | "MON";
export const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type Months = typeof months[number];

export type Month = {
  header: WeekDay[];
  month: Months;
  days: Day[];
};
