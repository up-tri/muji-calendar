import classNames from "classnames";
import React from "react";
import { Day } from "../../lib/types/Day";
import styles from "./Holiday.module.scss";

import * as positions from "../../lib/position";
import * as positionsYoko from "../../lib/positionYoko";

type Props = {
  isTate: boolean;
  date: Day;
};
export const SvgHoliday: React.FC<Props> = ({ isTate, date }) => {
  if (!date.isHoliday) return null;

  const labelPositions = isTate
    ? positions.labelPositions
    : positionsYoko.labelPositions;

  return (
    <text
      x={labelPositions[date.position].x}
      y={labelPositions[date.position].y}
      className={classNames(styles.Holiday, "weight--normal")}
    >
      {date.holidayName}
    </text>
  );
};
