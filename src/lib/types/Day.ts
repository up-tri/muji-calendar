import { WeekDays } from "./Month";

export type Holiday = {
  isHoliday: true;
  holidayName: string;
};

export type Workday = {
  isHoliday: false;
};

export type Day = {
  label: number;
  position: number;
  isWeekend: boolean;
} & (Holiday | Workday);

export type WeekDay = {
  label: WeekDays;
  position: number;
  isHoliday: boolean;
};
