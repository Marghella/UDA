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
        d="M128 210.53c10.52-1.64 20.72 4.38 29 10.19 17.56 12.33 35.28 30.87 44.74 50.28 3.5 7.18 8.44 20.12 9.09 28 .46 5.62-1.17 7.33-6.83 6.82-7.42-.66-17.37-5.21-24-8.58-21.8-11.08-37.42-28.07-50.79-48.24-6.39-9.63-18.1-32.93-1.21-38.47z"
      />
    </svg>
  );
}

export default SvgComponent;
