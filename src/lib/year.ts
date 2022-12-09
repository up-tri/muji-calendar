import { getMonth } from "./month";
import { Month, months } from "./types/Month";

export type Year = {
  year: number;
  months: Month[];
};
export const getYear = (year: number, includesMonths: number[]): Year => {
  return {
    year,
    months: months
      .map((m) => getMonth(year, m))
      .filter((m) =>
        includesMonths && includesMonths.length !== 0
          ? includesMonths.includes(m.month)
          : true
      ),
  };
};
