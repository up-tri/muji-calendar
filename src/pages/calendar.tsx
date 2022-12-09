import { useRouter } from "next/router";
import { Calendar } from "../components/organisms/Calendar";
import { Paper } from "../components/organisms/Paper";
import { PreviewNote } from "../components/organisms/PreviewNote";
import { PaperTemplate } from "../components/templates/PaperTemplate";
import { getOldMonth } from "../lib/oldMonth";
import { months as defaultMonths } from "../lib/types/Month";
import { getYear } from "../lib/year";

export default function CalendarPage() {
  const router = useRouter();

  const { year, months } = router.query;

  if (!year) {
    return <p>レンダリング中...</p>;
  }

  const needMonths = (() => {
    if (months === undefined) return defaultMonths;

    const m = Array.isArray(months) ? months : months.split(",");
    const mm = m.map((month) => parseInt(month));
    return mm.length !== 0 ? mm : defaultMonths;
  })();

  const yearAsNumber = parseInt(`${year}`);
  if (yearAsNumber < 0 || year === "" || year?.includes(".")) {
    router.replace("/400.html", undefined, { shallow: false });
  }

  const yearTables = getYear(yearAsNumber, needMonths);

  return (
    <PaperTemplate title={`${yearAsNumber}年のカレンダー`}>
      <PreviewNote>
        <p>
          ブラウザからこのページを印刷すると、{needMonths.length}
          枚のカレンダーになります。
        </p>
        <p>右クリック→【印刷】で印刷画面が開きます。</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            display: "block",
            width: "400px",
            margin: "10px 0 0 0",
            border: "1px solid #808080",
          }}
          src='/images/print_menu.png'
          alt='印刷メニュー'
        />
      </PreviewNote>
      {yearTables.months.map((month, idx) => (
        <Paper key={idx}>
          <Calendar
            year={yearAsNumber}
            month={month.month}
            oldMonth={`${getOldMonth(month.month).en}（${
              getOldMonth(month.month).ja
            }）`}
            dates={month.days}
          />
        </Paper>
      ))}
    </PaperTemplate>
  );
}

// page-break-before
