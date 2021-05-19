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
        d="M55.6 52.06c6.41-2.14 19.47 3.73 25.4 6.7 22.24 11.12 41.77 30.73 54.13 52.24 4.57 7.95 14.59 27.81 4.65 35.26-8.92 6.7-24.28-2.11-31.78-7.28-21.43-14.8-39.47-35.64-49-59.98-2.44-6.24-7.65-21.15-3.4-26.94z"
      />
    </svg>
  );
}

export default SvgComponent;
