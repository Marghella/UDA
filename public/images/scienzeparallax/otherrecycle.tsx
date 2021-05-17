import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      height={512}
      viewBox="0 0 512 512"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M272.959.015h-13.5c-1.199 0-2.401.3-3.6.3-77.999 1.5-145.499 54.901-164.399 131.1l-4.801 18.6h59.401c30.298 0 60.599 7.2 87.599 20.7 7.2 3.6 14.7 6 22.2 7.5 5.7 1.199 11.4 1.8 17.1 1.8 117.176 0 117.225-180 0-180z"
        fill="#a0e65c"
      />
      <path
        d="M272.959 180.015c-5.7 0-11.4-.601-17.1-1.8V.315c1.199 0 2.401-.3 3.6-.3h13.5c117.176 0 117.225 180 0 180z"
        fill="#79cc52"
      />
      <path
        d="M418.158 113.714l-18.898 23.401c-40.201-32.401-92.1-48.6-143.401-46.5-18.9.599-37.5 3.9-55.499 9.6l-9.001-28.801c21-6.601 42.902-10.201 64.501-10.8 58.198-2.099 116.399 16.501 162.298 53.1zM326.065 353.152c6.797-11.748 16.362-21.899 27.671-29.37 25.298-16.699 46.685-39.404 61.846-65.684l29.663-51.372 13.813 13.359c57.305 55.415 69.507 142.339 29.648 211.392l-6.768 11.689c-58.101 100.789-214.223 11.025-155.873-90.014z"
        fill="#79cc52"
      />
      <path
        d="M311.065 511.985l-10.928-27.949c45.205-17.666 83.467-50.537 107.725-92.549 13.696-23.701 22.617-49.482 26.528-76.611l29.707 4.277c-4.468 30.923-14.648 60.308-30.249 87.334-27.656 47.901-71.264 85.357-122.783 105.498z"
        fill="#59b348"
      />
      <path
        d="M30.043 443.152l-6.738-11.66c-39.873-69.067-27.671-155.991 29.634-211.406l13.813-13.359 29.663 51.372c15.161 26.279 36.548 48.984 61.846 65.684 11.309 7.471 20.874 17.622 27.671 29.37C244.31 454.24 88.233 544.04 30.043 443.152z"
        fill="#a0e65c"
      />
      <path
        d="M200.932 511.985c-51.519-20.142-95.127-57.598-122.783-105.498-15.601-27.026-25.781-56.411-30.249-87.334l29.707-4.277c3.911 27.129 12.832 52.91 26.528 76.611 24.258 42.012 62.52 74.883 107.725 92.549z"
        fill="#79cc52"
      />
      <g>
        <path
          d="M240.858 382.226v-56.938l-70.327-35.156 100.327-100.327v56.938l70.327 35.156z"
          fill="#ffdf40"
        />
      </g>
      <path
        d="M270.858 246.742v-56.938l-15 15v162.422l85.328-85.328z"
        fill="#ffbe40"
      />
      <path
        d="M418.158 113.714l-18.898 23.401c-40.201-32.401-92.1-48.6-143.401-46.5v-30c58.199-2.1 116.4 16.5 162.299 53.099z"
        fill="#59b348"
      />
    </svg>
  );
}

export default SvgComponent;
