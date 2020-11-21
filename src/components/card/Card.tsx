import * as React from 'react';
import { InputField } from '../input/InputField';
import { TitleHeader } from '../titleHeader/TitleHeader';
import { MonthPicker } from '../monthPicker/MonthPicker';
import { startOfToday } from 'date-fns';

import {
  useMonthpicker,
  MonthType,
  monthLabelFormat as monthLabelFormatFn,
  differenceInMonths
} from '../../hooks/index';
import useInput from '../../hooks/useInput';
import { MonthlyAmount } from '../monthlyAmount/MonthlyAmount';
import { Button } from '../button/Button';

interface MonthlyAmountProps {
  months: number;
  totalAmount: number;
}
export const Card: React.FC = () => {
  const [values, handleChange] = useInput({ amount: '' });
  const [monthlyDeposit, setMontlyAmount] = React.useState<MonthlyAmountProps>({
    months: 0,
    totalAmount: 0
  });
  const { activeMonths, goToNextMonths, goToPreviousMonths } = useMonthpicker({
    numberOfMonths: 1,
    startDate: startOfToday()
  });

  function handleGoToNextMonth() {
    goToNextMonths();
  }
  function handleGoToPreviousMonth() {
    if (startOfToday() < activeMonths[0].date) {
      goToPreviousMonths();
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    e.key === 'ArrowRight' && handleGoToNextMonth();
    e.key === 'ArrowLeft' && handleGoToPreviousMonth();
  }

  React.useEffect(() => {
    const totalSelectedMonths = differenceInMonths(
      startOfToday(),
      activeMonths[0].date
    );
    function getMonthlyAmount() {
      const givenAmount = values.amount;
      if (givenAmount > 0 && totalSelectedMonths > 0) {
        return Math.round(givenAmount / totalSelectedMonths);
      }
    }
    setMontlyAmount({
      ...monthlyDeposit,
      months: totalSelectedMonths,
      totalAmount: getMonthlyAmount()
    });
    if (typeof window !== 'undefined') {
      if (window.addEventListener) {
        window.addEventListener('keydown', handleKeyDown);
      }
    }
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [activeMonths, values.amount]);

  return (
    <div className="card">
      <div className="card__header">
        <TitleHeader titleHeading="Buy a house" titleText="Saving goal" />
      </div>
      <div className="card__fields">
        <div className="card__fields-input">
          <InputField
            labelText="Total amount"
            values={values.amount}
            onChange={handleChange}
          />
        </div>
        <div className="card__fields-goal">
          {activeMonths.map((month: MonthType) => (
            <MonthPicker
              key={`month-${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              monthLabelFormat={monthLabelFormatFn}
              onClickNext={handleGoToNextMonth}
              onClickPrevious={handleGoToPreviousMonth}
            />
          ))}
        </div>
      </div>
      <div className="card__exhibition">
        {activeMonths.map((month: MonthType) => (
          <MonthlyAmount
            monthlyDeposit={monthlyDeposit}
            key={`month-${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            monthLabelFormat={monthLabelFormatFn}
            moneyAmount={values.amount}
          />
        ))}
      </div>
      <div className="card__btn">
        <Button />
      </div>
    </div>
  );
};
