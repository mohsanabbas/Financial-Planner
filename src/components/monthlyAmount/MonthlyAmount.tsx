import * as React from 'react';
import { useMonth } from '../../hooks/useMonth';

interface MonthlyAmountProps {
  monthlyDeposit: Istate;
  year: number;
  month: number;
  monthLabelFormat?(date: Date): string;
  moneyAmount: string;
}

interface Istate {
  months: number;
  totalAmount: number;
}
export const MonthlyAmount: React.FC<MonthlyAmountProps> = ({
  monthlyDeposit,
  monthLabelFormat,
  year,
  month,
  moneyAmount
}) => {
  const { monthLabel } = useMonth({
    monthLabelFormat,
    year,
    month
  });
  return (
    <div className="montlyAmount">
      <div className="montlyAmount__amount">
        <div className="montlyAmount__amount-text">Monthly amount</div>
        <div className="montlyAmount__amount-value">
          ${monthlyDeposit.totalAmount}
        </div>
      </div>
      {monthlyDeposit.totalAmount > 0 && moneyAmount.length > 0 ? (
        <div className="montlyAmount__plan">
          <span>
            You’re planning
            <strong> {monthlyDeposit.months} monthly deposits </strong> to reach
            your
            <strong> $ {moneyAmount} </strong>
            goal by
            <strong> {monthLabel}.</strong>
          </span>
        </div>
      ) : (
        <div className="montlyAmount__plan">
          <span>Please insert amount and set your goal!</span>
        </div>
      )}
    </div>
  );
};
