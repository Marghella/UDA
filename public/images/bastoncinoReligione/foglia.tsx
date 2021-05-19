import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.14in"
      height={66.24}
      viewBox="0 0 114 69"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        d="M4.06.57C9.11-.37 17.61-.06 23 0c24.73.29 52.87 15.08 72 29.89 6.33 4.9 15.13 13.41 17.75 21.11 2.54 7.45.18 14.33-7.75 16.7-8.6 2.57-19.56.09-28-2.42C57.23 59.39 35.72 48.54 21 34 13.72 26.8 8.28 21.12 3.31 12 .79 7.36-1.9 3.31 4.06.57z"
      />
    </svg>
  );
}

export default SvgComponent;
