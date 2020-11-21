import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import startOfToday from 'date-fns/startOfToday';
import startOfMonth from 'date-fns/startOfMonth';
import addMonths from 'date-fns/addMonths';

export interface MonthType {
  year: number;
  month: number;
  date: Date;
}

export function getDateMonthAndYear(date: Date): MonthType {
  const today = startOfMonth(date);
  const year = getYear(today);
  const month = getMonth(today);
  return {
    year,
    month,
    date: today
  };
}

export function getCurrentYearMonthAndDate(): MonthType {
  return getDateMonthAndYear(startOfToday());
}

export function getInitialMonths(
  numberOfMonths: number,
  startDate: Date | null
): MonthType[] {
  const firstMonth = startDate
    ? getDateMonthAndYear(startDate)
    : getCurrentYearMonthAndDate();
  let prevMonthDate = firstMonth.date;
  let months = [firstMonth];

  if (numberOfMonths > 1) {
    months = Array.from(Array(numberOfMonths - 1).keys()).reduce(
      (m: MonthType[]) => {
        prevMonthDate = addMonths(m[m.length - 1].date, 1);
        return m.concat([getDateMonthAndYear(prevMonthDate)]);
      },
      months
    );
  }

  return months;
}

export function getNextActiveMonth(
  activeMonth: MonthType[],
  numberOfMonths: number,
  counter: number,
  step?: number
): MonthType[] {
  let prevMonth;

  if (step) {
    prevMonth = counter > 0 ? 0 : activeMonth.length - step;
  } else {
    prevMonth = counter > 0 ? activeMonth.length - 1 : 0;
  }

  let prevMonthDate = activeMonth[prevMonth].date;

  return Array.from(Array(numberOfMonths).keys()).reduce((m: MonthType[]) => {
    if (m.length === 0) {
      prevMonthDate = addMonths(prevMonthDate, counter);
    } else {
      prevMonthDate = addMonths(prevMonthDate, counter >= 0 ? 1 : -1);
    }

    return counter > 0
      ? m.concat([getDateMonthAndYear(prevMonthDate)])
      : [getDateMonthAndYear(prevMonthDate)].concat(m);
  }, []);
}
