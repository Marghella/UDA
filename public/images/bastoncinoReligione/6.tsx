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
        d="M270 231c-6.23 2.6-12.32 3.07-19 3-29.19-.33-62.65-15.72-84-35.17-8.39-7.64-20.69-26.48-3-32.03 2.98-.93 6.86-.83 10-.8 10 .12 21.74 3.93 31 7.6 18.68 7.41 32.64 15 47 29.4 7.78 7.81 15.43 17.04 18 28z"
      />
    </svg>
  );
}

export default SvgComponent;
