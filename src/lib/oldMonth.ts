import { MonthNumber } from "./types/Month";

const OLD_MONTHS: {
  [key in MonthNumber]: { ja: string; en: string };
} = {
  "1": { ja: "睦月", en: "January" },
  "2": { ja: "如月", en: "February" },
  "3": { ja: "弥生", en: "March" },
  "4": { ja: "卯月", en: "April" },
  "5": { ja: "皐月", en: "May" },
  "6": { ja: "水無月", en: "June" },
  "7": { ja: "文月", en: "July" },
  "8": { ja: "葉月", en: "August" },
  "9": { ja: "長月", en: "September" },
  "10": { ja: "神無月", en: "October" },
  "11": { ja: "霜月", en: "November" },
  "12": { ja: "師走", en: "December" },
};

export const getOldMonth = (month: MonthNumber): { ja: string; en: string } => {
  return OLD_MONTHS[month];
};
