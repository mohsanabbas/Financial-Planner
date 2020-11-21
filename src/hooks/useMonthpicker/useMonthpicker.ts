import { useState } from 'react';

import { getInitialMonths, getNextActiveMonth } from './useMonthpicker.utils';

export const START_DATE = 'startDate';
export const END_DATE = 'endDate';

export type FocusedInput = 'startDate' | 'endDate' | null;

export interface OnDatesChangeProps {
  focusedInput: FocusedInput;
  startDate: Date | null;
  endDate: Date | null;
}

export interface UseMonthpickerProps {
  onDatesChange?(data: OnDatesChangeProps): void;
  startDate?: Date | null;
  endDate?: Date | null;
  focusedInput?: FocusedInput;
  numberOfMonths?: number;
  exactMinBookingDays?: boolean;
  initialVisibleMonth?: Date;
}

export function useMonthpicker({
  startDate,
  onDatesChange,
  initialVisibleMonth,
  numberOfMonths = 2
}: UseMonthpickerProps) {
  const [activeMonths, setActiveMonths] = useState(() =>
    startDate
      ? getInitialMonths(numberOfMonths, startDate)
      : getInitialMonths(numberOfMonths, initialVisibleMonth || null)
  );

  function onResetDates() {
    onDatesChange({
      startDate: null,
      endDate: null,
      focusedInput: START_DATE
    });
  }

  function goToPreviousMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1));
  }

  function goToPreviousMonthsByOneMonth() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, -1, 1));
  }

  function goToNextMonths() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1));
  }

  function goToNextMonthsByOneMonth() {
    setActiveMonths(getNextActiveMonth(activeMonths, numberOfMonths, 1, 1));
  }

  function goToDate(date: Date) {
    setActiveMonths(getInitialMonths(numberOfMonths, date));
  }

  function goToPreviousYear(numYears = 1) {
    setActiveMonths(
      getNextActiveMonth(
        activeMonths,
        numberOfMonths,
        -(numYears * 12 - numberOfMonths + 1)
      )
    );
  }

  function goToNextYear(numYears = 1) {
    setActiveMonths(
      getNextActiveMonth(
        activeMonths,
        numberOfMonths,
        numYears * 12 - numberOfMonths + 1
      )
    );
  }

  return {
    activeMonths,
    numberOfMonths,
    onResetDates,
    goToPreviousMonths,
    goToPreviousMonthsByOneMonth,
    goToNextMonths,
    goToNextMonthsByOneMonth,
    goToDate,
    goToPreviousYear,
    goToNextYear
  };
}
