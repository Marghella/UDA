import * as React from 'react';
import { a } from 'react-spring';

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
        d="M4.06 120.57c5.05-.94 13.55-.63 18.94-.57 24.73.29 52.87 15.08 72 29.89 6.33 4.9 15.13 13.41 17.75 21.11 2.54 7.45.18 14.33-7.75 16.7-8.6 2.57-19.56.09-28-2.42-19.77-5.89-41.28-16.74-56-31.28-7.28-7.2-12.72-12.88-17.69-22-2.52-4.64-5.21-8.69.75-11.43z"
      />
    </svg>
  );
}

export default SvgComponent;
