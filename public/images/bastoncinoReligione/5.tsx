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
        d="M239 120.43c12.37-1.24 34.73 3.97 46 9.35 3.16 1.51 12.42 6.15 11.97 10.27-.42 3.86-9.67 8.59-12.97 10.17-12.98 6.19-31.63 9.94-46 9.78-10.98-.13-28.81-2.18-39-6.06-5.47-2.09-11.64-5.58-12.62-11.94-1.14-7.39 5.69-12.23 11.62-14.77 7.78-3.33 19.53-5.56 28-6.14l13-.66z"
      />
    </svg>
  );
}

export default SvgComponent;
