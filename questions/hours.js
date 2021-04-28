/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

let dates = [
  [new Date("2020-01-01T09:00:00"), 3600],
  [new Date("2020-01-01T09:30:00"), 4300],
  [new Date("2020-01-01T09:15:00"), 2000],
  [new Date("2020-01-01T08:00:00"), 4100],
  [new Date("2020-01-01T11:00:00"), 1000],
  [new Date("2020-01-01T12:00:00"), 2000],
  [new Date("2020-01-01T10:10:00"), 3000],
  [new Date("2020-01-02T09:00:00"), 1200],
];
dates.sort(function (a, b) {
  return new Date(a[0]) - new Date(b[0]);
});

for (let i = 0; i < dates.length; i++) {
  let date = dates[i];
  let temp = new Date(date[0].getTime() + date[1] * 1000);
  date.push(temp);
}

let date1 = dates[0];
let newDates = [date1];

for (let i = 0; i < dates.length; i++) {
  let date2 = dates[i];
  if (date2[0] <= date1[2]) {
    date1[2] = new Date(Math.max(date1[2], date2[2]));
    date1[1] = (date1[2] - date1[0]) / 1000;
  } else {
    newDates.push(dates[i]);
    date1 = date2;
  }
}

let total = 0;

for (let i = 0; i < newDates.length; i++) {
  total += newDates[i][1];
}

console.log(newDates);
console.log(total);
