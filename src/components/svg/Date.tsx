import classNames from "classnames";
import React from "react";
import { Day } from "../../lib/types/Day";
import styles from "./Date.module.scss";

import * as positions from "../../lib/position";
import * as positionsYoko from "../../lib/positionYoko";

type Props = {
  isTate: boolean;
  date: Day;
};
export const SvgDate: React.FC<Props> = ({ isTate, date }) => {
  const datePositions = isTate
    ? positions.datePositions
    : positionsYoko.datePositions;

  return (
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
};
