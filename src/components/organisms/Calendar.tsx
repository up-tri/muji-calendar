import React from "react";
import { Day } from "../../lib/types/Day";
import { MonthNumber } from "../../lib/types/Month";
import { SvgDate } from "../svg/Date";
import { Frame } from "../svg/Frame";
import { Group } from "../svg/Group";
import { SvgHoliday } from "../svg/Holiday";
import { Month } from "../svg/Month";
import { OldMonth } from "../svg/OldMonth";
import { Year } from "../svg/Year";

export type CalendarProps = {
  year: number;
  month: MonthNumber;
  oldMonth: string;
  dates: Day[];
};
export const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  oldMonth,
  dates,
}) => {
  return (
    <Frame>
      <Year>{year}</Year>
      <Month>{month}</Month>
      <OldMonth>{oldMonth}</OldMonth>
      {dates.map((date, index) => (
        <Group key={index}>
          <SvgHoliday date={date} />
          <SvgDate date={date} />
        </Group>
      ))}
    </Frame>
  );
};
