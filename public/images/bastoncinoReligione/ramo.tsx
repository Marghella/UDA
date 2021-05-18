import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.03in"
      height="3.22in"
      viewBox="0 0 303 322"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        d="M210 89c4.05 8.77-.66 6.45 9 15-11.76 8.9-25.35 23.35-36 34-37.15 37.15-69.23 79.94-92.75 127-6.29 12.58-11.8 25.66-16.25 39-1.06 3.19-4.07 14.39-6.51 15.94-2.8 1.77-11.55-1.69-14.49-2.94 3.15-15.63 17.33-49.15 24.75-64 24.17-48.34 57.91-91.28 95.42-129.91l7.83-7.13 12-11.79L210 89z"
      />
    </svg>
  );
}

export default SvgComponent;
