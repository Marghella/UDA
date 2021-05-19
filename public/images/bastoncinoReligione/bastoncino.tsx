import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.98in"
      height="3.21in"
      viewBox="0 0 298 321"
      {...props}
    >
      <path
        d="M208 89l-17 15.17-12 11.79-7.83 7.13C133.66 161.72 99.92 204.66 75.75 253c-8.02 16.05-21.29 46.85-24.75 64 2.94 1.25 11.69 4.71 14.49 2.94 2.44-1.55 5.45-12.75 6.51-15.94 4.45-13.34 9.96-26.42 16.25-39 23.52-47.06 55.6-89.85 92.75-127 10.65-10.65 24.24-25.1 36-34-9.66-8.55-4.95-6.23-9-15z"
      />
    </svg>
  );
}

export default SvgComponent;
