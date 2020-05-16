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

export const getSelectedMonth = (stringMonth: string) =>
  stringMonth
    ? months.findIndex((month) => month === stringMonth.toLowerCase()) + 1
    : '';
