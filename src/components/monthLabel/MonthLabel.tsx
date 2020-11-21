import * as React from 'react';

interface MonthLabelProps {
  year: number;
  monthName: string;
}

export const MonthLabel: React.FC<MonthLabelProps> = ({ year, monthName }) => {
  return (
    <div className="monthlabel">
      <div className="monthlabel__month">{monthName}</div>
      <div className="monthlabel__year">{year}</div>
    </div>
  );
};
