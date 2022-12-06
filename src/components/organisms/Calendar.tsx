import classNames from "classnames";
import React from "react";
import { Day, Months } from "../../lib/month";
import { Frame } from "../svg/Frame";
import { Month } from "../svg/Month";
import { OldMonth } from "../svg/OldMonth";
import { Year } from "../svg/Year";
import styles from "./Calendar.module.scss";

export type CalendarProps = {
  year: number;
  month: Months;
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
      <Year className={classNames("weight--thin", styles.year)}>{year}</Year>
      <Month className={classNames("weight--normal", styles.month)}>
        {month}
      </Month>
      <OldMonth className={classNames("weight--thin", styles.oldMonth)}>
        {oldMonth}
      </OldMonth>
    </Frame>
  );
};
