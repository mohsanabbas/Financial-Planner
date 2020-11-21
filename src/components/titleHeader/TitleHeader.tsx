import * as React from 'react';
import academy from '../../icons/missing.png';

interface TitleHeaderProps {
  titleHeading?: string;
  titleText?: string;
}

export const TitleHeader: React.FC<TitleHeaderProps> = ({
  titleHeading,
  titleText
}) => {
  return (
    <div className="TitleHeader">
      <div className="TitleHeader__icon">
        <img src={academy} alt={'home_img'} />
      </div>
      <div className="TitleHeader__title">
        <div className="TitleHeader__title__heading">{titleHeading}</div>
        <div className="TitleHeader__title__text">{titleText}</div>
      </div>
    </div>
  );
};
