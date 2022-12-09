import classNames from "classnames";
import React from "react";
import { labelPositions } from "../../lib/position";
import { Day } from "../../lib/types/Day";
import styles from "./Holiday.module.scss";

type Props = {
  date: Day;
};
export const SvgHoliday: React.FC<Props> = ({ date }) =>
  date.isHoliday ? (
    <text
      x={labelPositions[date.position].x}
      y={labelPositions[date.position].y}
      className={classNames(styles.Holiday, "weight--normal")}
    >
      {date.holidayName}
    </text>
  ) : null;
