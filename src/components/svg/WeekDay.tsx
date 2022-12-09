import classNames from "classnames";
import React from "react";
import { datePositions } from "../../lib/position";
import { WeekDay } from "../../lib/types/Day";
import styles from "./Date.module.scss";

type Props = {
  date: WeekDay;
};
export const SvgWeekDay: React.FC<Props> = ({ date }) => (
  <text
    x={datePositions[date.position].x}
    y={datePositions[date.position].y}
    className={classNames(
      date.isHoliday ? styles["Date--holiday"] : styles["Date--workday"],
      "weight--normal"
    )}
  >
    {date.label}
  </text>
);
