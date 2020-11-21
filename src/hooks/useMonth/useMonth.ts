import format from 'date-fns/format';

export const monthLabelFormatFn = (date: Date) => format(date, 'MMMM yyyy');

export interface UseMonthResult {
  monthLabel: string;
}

export interface UseMonthProps {
  year: number;
  month: number;
  monthLabelFormat?(date: Date): string;
}

export function useMonth({
  year,
  month,
  monthLabelFormat = monthLabelFormatFn
}: UseMonthProps): UseMonthResult {
  return {
    monthLabel: monthLabelFormat(new Date(year, month))
  };
}
function differenceInYears(dateLeft: Date, dateRight: Date) {
  const differenceInYears =
    new Date(dateRight).getFullYear() - new Date(dateLeft).getFullYear();
  return differenceInYears;
}
export function differenceInMonths(dateLeft: Date, dateRight: Date) {
  const years = differenceInYears(dateLeft, dateRight);
  const months =
    years * 12 +
    (new Date(dateRight).getMonth() - new Date(dateLeft).getMonth());
  return months;
}
