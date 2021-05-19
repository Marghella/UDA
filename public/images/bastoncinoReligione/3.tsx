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
        d="M134 0c9 2.87 16.13 12.29 21.14 20 13.77 21.22 16.79 41.45 18.35 66 .64 10.15-3.15 25.24-16.49 21.43-2.01-.57-3.37-1.39-4.99-2.71-7.3-5.94-12.79-17.97-16.06-26.72-8.57-22.91-14.41-55.49-1.95-78z"
      />
    </svg>
  );
}

export default SvgComponent;
