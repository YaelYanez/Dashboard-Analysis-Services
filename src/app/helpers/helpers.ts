const months: string[] = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

export const getSelectedMonth = (stringMonth: string) => {
  return stringMonth
    ? months.findIndex((month) => month === stringMonth.toLowerCase()) + 1
    : '';
};

export const getSelectedMonthFromYearIndex = (indexMonth: number) =>
  months[indexMonth - 1];

export const fromNumberToMoney = (number: number): string => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number);
};
