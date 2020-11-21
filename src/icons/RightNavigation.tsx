import * as React from 'react';

interface RightNavigationProps {
  fill?: string;
  height?: string;
  viewBox?: string;
  width?: string;
}

export const RightNavigation: React.FC<RightNavigationProps> = ({
  fill,
  height,
  viewBox = '0 0 42 42',
  width
}) => {
  return (
    <svg
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g xmlns="http://www.w3.org/2000/svg" data-name="Icon Arrow Right">
        <path data-name="Rectangle 534" fill="none" d="M0 0h42v42H0z" />
        <path
          data-name="Path 2182"
          d="M19 25.59L20.41 27l6-6-6-6L19 16.41 23.58 21z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
