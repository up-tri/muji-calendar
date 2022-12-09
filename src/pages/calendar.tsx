import { useRouter } from "next/router";
import { Calendar } from "../components/organisms/Calendar";
import { PaperTemplate } from "../components/templates/PaperTemplate";
import { getOldMonth } from "../lib/oldMonth";
import { getYear } from "../lib/year";

export default function CalendarPage() {
  const router = useRouter();

  const { year } = router.query;

  if (!year) {
    return <p>レンダリング中...</p>;
  }

  console.log({ year, "router.query": router.query });
  const yearAsNumber = parseInt(`${year}`);
  console.log(yearAsNumber);
  if (yearAsNumber < 0 || year === "" || year?.includes(".")) {
    router.replace("/400", undefined, { shallow: false });
  }

  console.log({ yearAsNumber });
  const yearTables = getYear(yearAsNumber);

  return (
    <PaperTemplate>
      {yearTables.months.map((month, idx) => (
        <Calendar
          key={idx}
          year={yearAsNumber}
          month={month.month}
          oldMonth={`${getOldMonth(month.month).en}（${
            getOldMonth(month.month).ja
          }）`}
          dates={month.days}
        />
      ))}
    </PaperTemplate>
  );
}

// page-break-before
