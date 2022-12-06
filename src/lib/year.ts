import { getMonth, Month } from "./month";

export type Year = {
  year: number;
  months: Month[];
};
export const getYear = (year: number): Year => {
  return {
    year,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) =>
      getMonth(year, m)
    ),
  };
};
