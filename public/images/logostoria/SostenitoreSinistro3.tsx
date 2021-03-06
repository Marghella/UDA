import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={100}
      viewBox="0 0 955 507"
      {...props}
    >
      <path
        d="M169 57v3c9.59 0 27.74 1.44 36-2l-15-1 6 1-23 1 16-1-20-1zm32 1v1l-1-1h1zm-78 0c-1.09 2.73-3.36 1.93-6 1.9-4.87-.34-11.45-1.15-16 0l31 1.1-6-3h-3zm-71 1c-5.29 3.9-14.78 1.62-21 1.18l-8 .56-9-.74-1 2c6.21 2.46 16.29.08 23 0h58l-9.42-1.76L63 59l4 1-6 1 1-2H52zm17 1v1l-1-1h1zm77-1l15 1-15-1zm16 0v1l1-1h-1zM2 60c2.17 3.24 3.28 2.87 7 3-2.24-3.34-3.29-2.62-7-3zm8 51c1.76 5.85 5.63 7.51 11 9.77 7.76 3.26 21.33 5.17 30 6.5l23 1.82 11 .91c28.98.14 49.24-.59 78-5.41 10.36-1.74 32.12-5.74 36-16.59l-18 1h-32l-17 1H89l-17 1H10zm180-1v1l-1-1h1zm-34 45v1l1-1h-1zm-3 14v1l1-1h-1zm1 5v1l1-1h-1zm1 3v1l1-1h-1zm1 4v1l1-1h-1zm1 3v1l1-1h-1zm8 0v1l1-1h-1zm276 3v1l1-1h-1zm-279 1v1l1-1h-1zm-3 1v1l1-1h-1zm273 0v1l1-1h-1zm12 1v1l1-1h-1zm-284 1v1l1-1h-1zm272 0v1l1-1h-1zm111 0v1l1-1h-1z"
      />
    </svg>
  );
}

export default SvgComponent;
