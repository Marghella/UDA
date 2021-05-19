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
        d="M297 20c-.27 29.34-27.92 58.63-51 73.66-6.25 4.06-15.45 9.27-23 9.73-9 .55-14.6-3.98-13.66-13.39 1.05-10.67 9.94-22.04 16.58-30C243.38 39.08 268.6 20 297 20z"
      />
    </svg>
  );
}

export default SvgComponent;
