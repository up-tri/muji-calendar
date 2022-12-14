import classNames from "classnames";
import React from "react";
import { datePositions } from "../../lib/position";
import { Day } from "../../lib/types/Day";
import styles from "./Date.module.scss";

type Props = {
  date: Day;
};
export const SvgDate: React.FC<Props> = ({ date }) => (
  <text
    x={datePositions[date.position].x}
    y={datePositions[date.position].y}
    textAnchor='end'
    className={classNames(
      styles.Date,
      date.isHoliday ? styles["Date--holiday"] : styles["Date--workday"],
      "weight--normal"
    )}
  >
    {date.label}
  </text>
);
