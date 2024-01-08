import classNames from "classnames";
import React from "react";
import { WeekDay } from "../../lib/types/Day";
import styles from "./Date.module.scss";

import * as positions from "../../lib/position";
import * as positionsYoko from "../../lib/positionYoko";

type Props = {
  isTate: boolean;
  date: WeekDay;
};
export const SvgWeekDay: React.FC<Props> = ({ isTate, date }) => {
  const weekDayPositions = isTate
    ? positions.weekDayPositions
    : positionsYoko.weekDayPositions;

  return (
    <text
      x={weekDayPositions[date.position].x}
      y={weekDayPositions[date.position].y}
      className={classNames(
        date.isHoliday ? styles["Date--holiday"] : styles["Date--workday"],
        "weight--normal"
      )}
    >
      {date.label}
    </text>
  );
};
