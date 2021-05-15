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

        d="M650 28c-2.24 2.37-4.21 5.06-7 2l-3.22 5.92c-5.42 10.1-2.03 10.91-1.78 21.08 4.43.24 4.76 1.34 7 5l10 1 1-1-1-2 9-2c.39-3.84 1.83-4.13 5-6-1.5-5.29-.83-5.16 1-10l-5-3 2-4-17-7zm9 2v1l1-1h-1zm-24 9v1l1-1h-1zm33 12v1l-1-1h1zm-21 9v1l-1-1h1zm7 1v1l-1-1h1zm-21 6v1l1-1h-1zm188 61v1l1-1h-1z"
      />
    </svg>
  );
}

export default SvgComponent;
