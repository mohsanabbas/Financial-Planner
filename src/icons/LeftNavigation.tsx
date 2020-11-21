import * as React from 'react';

interface LeftNavigationProps {
  fill?: string;
  height?: string;
  viewBox?: string;
  width?: string;
}

export const LeftNavigation: React.FC<LeftNavigationProps> = ({
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
        <path data-name="Rectangle 535" fill="none" d="M0 0h42v42H0z" />
        <path
          data-name="Path 2181"
          d="M24.41 16.41L23 15l-6 6 6 6 1.41-1.41L19.83 21z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
