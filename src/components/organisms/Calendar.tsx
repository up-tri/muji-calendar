import React from "react";
import { Day, WeekDay } from "../../lib/types/Day";
import { MonthNumber } from "../../lib/types/Month";
import { SvgDate } from "../svg/Date";
import { Frame as TateFrame } from "../svg/Frame";
import { Frame as YokoFrame } from "../svg/FrameYoko";
import { Group } from "../svg/Group";
import { SvgHoliday } from "../svg/Holiday";
import { Month } from "../svg/Month";
import { OldMonth } from "../svg/OldMonth";
import { Year } from "../svg/Year";

import * as positions from "../../lib/position";
import * as positionsYoko from "../../lib/positionYoko";
import { SvgWeekDay } from "../svg/WeekDay";

export type CalendarProps = {
  isTate: boolean;
  year: number;
  month: MonthNumber;
  oldMonth: string;
  weekDays: WeekDay[];
  dates: Day[];
};
export const Calendar: React.FC<CalendarProps> = ({
  isTate,
  year,
  month,
  oldMonth,
  weekDays,
  dates,
}) => {
  const Frame = isTate ? TateFrame : YokoFrame;

  return (
    <Frame>
      <Year
        position={isTate ? positions.yearPosition : positionsYoko.yearPosition}
      >
        {year}
      </Year>
      <Month
        position={
          isTate ? positions.monthPosition : positionsYoko.monthPosition
        }
      >
        {month}
      </Month>
      <OldMonth
        position={
          isTate ? positions.oldMonthPosition : positionsYoko.oldMonthPosition
        }
      >
        {oldMonth}
      </OldMonth>
      {weekDays.map((weekDay, index) => (
        <SvgWeekDay key={index} isTate={isTate} date={weekDay} />
      ))}
      {dates.map((date, index) => (
        <Group key={index}>
          <SvgHoliday isTate={isTate} date={date} />
          <SvgDate isTate={isTate} date={date} />
        </Group>
      ))}
    </Frame>
  );
};
