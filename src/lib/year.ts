import { getMonth } from "./month";
import { Month, months } from "./types/Month";

export type Year = {
  year: number;
  months: Month[];
};
export const getYear = (year: number): Year => {
  return {
    year,
    months: months.map((m) => getMonth(year, m)),
  };
};
