const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");

const csv = fs.readFileSync(
  path.join(__dirname, "./../src/lib/assets/syukujitsu.csv"),
  "utf-8"
);
const data = parse(csv, { from: 2 });
const holidayjson = JSON.stringify(
  data.map((line) => ({ date: line[0], holiday_name: line[1] })),
  undefined,
  2
);
fs.writeFileSync(
  path.join(__dirname, "./../src/lib/assets/holiday.json"),
  holidayjson,
  "utf-8"
);
