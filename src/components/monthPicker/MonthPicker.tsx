import * as React from 'react';
import { useMonth } from '../../hooks/useMonth';
import { LeftNavigation } from '../../icons/LeftNavigation';
import { RightNavigation } from '../../icons/RightNavigation';
import { MonthLabel } from '../monthLabel/MonthLabel';

interface MonthPickerProps {
  year: number;
  month: number;
  monthLabelFormat(date: Date): string;
  onClickNext(): void;
  onClickPrevious(): void;
}

export const MonthPicker: React.FC<MonthPickerProps> = ({
  year,
  month,
  monthLabelFormat,
  onClickNext,
  onClickPrevious
}) => {
  const { monthLabel } = useMonth({
    monthLabelFormat,
    year,
    month
  });
  const [monthName, _] = monthLabel.split(' ');
  return (
    <div className="month-goal">
      <div className="month-goal-text">Reach goal by</div>

      <div className="month-goal-picker">
        <div className="month-goal-picker__previous" onClick={onClickPrevious}>
          <LeftNavigation fill="#8A9CA9" height="56px" />
        </div>
        <div className="month-goal-picker__label">
          <MonthLabel year={year} monthName={monthName} />
        </div>
        <div className="month-goal-picker__next" onClick={onClickNext}>
          <RightNavigation fill="#8A9CA9" height="56px" />
        </div>
      </div>
    </div>
  );
};
