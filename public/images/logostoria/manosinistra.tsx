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
        d="M169 125v1l1-1h-1zm-130 3.1c2.67 4.95 8 6.94 12.91 9.53 18.26 9.58 23.15 7.54 42.09 10.98 5.75 1.05 13.56 4.37 19 3.39 2.51 3.28 7.07 4.16 11 4.91 9.64 1.82 19.37.36 29-.91 1.18-3.79 3.52-3.25 7-3v-1h-2l4 1c3.22-1.58 10.45-4.87 12.63-7.34 2.38-2.68 3.1-10.29 1.19-13.37-.9-1.46-1.53-1.51-2.82-2.29 3.42.73 3.22 1.02 5 4 .48-4.77-3.22-6.26-7-8v1l2 2-11-3 1 2-2-2-14 3.51h-10l-6 1.02h-7l-7 .54H80l-29.99-2.97H39zm106-.1v1l1-1h-1zm34 8v1l1-1h-1zm-4 4v1l-1-1h1zm3 0v1l1-1h-1zm-15 11v1l-1-1h1zm-9 3v1l1-1h-1z"
      />
    </svg>
  );
}

export default SvgComponent;
