import classNames from "classnames";
import React from "react";
import { Day } from "../../lib/month";
import { datePositions } from "../../lib/position";
import styles from "./Date.module.scss";

type Props = {
  date: Day;
};
export const Date: React.FC<Props> = ({ date }) => (
  <text
    x={datePositions[date.position].x}
    y={datePositions[date.position].y}
    className={classNames(
      date.isHoliday ? styles["Date--holiday"] : styles["Date--workday"],
      "weight--normal"
    )}
    font-size='12px'
  >
    {/*  */}
  </text>
);
