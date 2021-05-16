import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 671 671"
      {...props}
    >
      <path
        fill= '#e1a929'
        d="M0 1v670h671V1H0zm88 173h37v18H67c0-15.01-2.38-32.8 5.45-46 8.68-14.64 26.55-27.51 30.6-38 1.77-4.6 1.94-9.15 1.95-14 .01-5 .64-12.63-2.09-16.89-4.04-6.33-11.59-4.09-14.6 1.91C86.28 83.06 87 95.91 87 101H67c0-12.77-1.84-30.4 9.09-39.47 10.1-8.38 34.54-8.18 43.7 1.57 5.38 5.73 6.2 12.45 6.21 19.9.02 14.08 1.77 25.33-5.93 38-7.06 11.64-26.41 26.46-30.59 37-2 5.04-1.48 10.67-1.48 16zM218 71h-8c-.25-2.7-.52-6.47-3.27-7.92-3.35-1.76-7.66 1.97-5.97 6.92 1.25 3.69 7.37 9.02 10.2 12 5.72 6.02 8.59 12.58 6.65 21-2.13 9.24-15.79 12.12-22.38 5.72C190.92 104.55 192 97.55 192 92h8c0 3.44-.76 10.2 3.14 11.83 4.58 1.92 6.29-4.58 5.54-7.83-.94-4.07-5.79-8.01-8.64-11-5.89-6.18-10.05-13.12-7.61-22 2.61-9.49 16.17-9.69 21.34-5.35 3.54 2.96 3.88 9.02 4.23 13.35zm32 4h-7c-.07-3.04-.15-7.25-1.93-9.85-2.86-4.16-6.76-2.08-8.33 1.87-1.26 3.14-.75 20.42-.74 24.98.01 3.54.39 14.48 6.86 11.83 4.56-1.86 4.14-10.8 4.14-14.83h7c0 5.96 1.18 15.27-3.28 19.72-5.27 5.27-22.49 6.13-22.72-10.72V69c.25-18.19 18.47-15.04 22.61-11.35C251.04 61.6 250 69.54 250 75zm16-19.74c2.34-.19 4.65-.39 7 0 12.15 1.58 11 13.63 11 22.74v18c-.09 7.27-1.95 13.76-10 15.75-1.64.23-4.32.3-6 0-13.08-1.09-12-13.07-12-22.75V73c0-2.99-.1-6.12.8-9 1.59-5.06 4.28-7.22 9.2-8.74zM310 87V55h7v56l-7.49-1.02-4.23-9.98L298 76l-1 35h-7V55c2.15.01 5.7-.23 7.49 1.02 2.08 1.46 3.36 6.54 4.18 8.98 2.02 6.06 4.49 17.54 8.33 22zm34-32v7c-2.65 0-8.59-.38-10.69 1.02C329.9 65.3 331 75.14 331 79h10v7l-8.4 1.6L331 94v17h-9V62c.13-6.84 1.57-6.96 8-7h14zm13 0v56h-8V55h8zm33 18h-8c-.01-2.33.2-5.82-1.02-7.85-2.22-3.7-8.82-4.55-8.98 6.85v22c.01 2.04-.07 5.02.74 6.89 1.64 3.8 5.82 4.52 8.09.88C382.45 99.16 382 92.23 382 89h-4v-7h12v29h-6v-5c-6.34 7.88-15.87 8.44-19.74-2-2-5.42-1.27-23.27-1.26-30 .01-4.18-.02-9.22 2.14-12.96 4.18-7.26 17.14-8.4 22.43-1.93C390.72 62.96 390 68.32 390 73zm33 0h-8c-.01-2.33.2-5.82-1.02-7.85-2.22-3.7-8.82-4.55-8.98 6.85v22c.01 2.04-.07 5.02.74 6.89 1.64 3.8 5.82 4.52 8.09.88C415.45 99.16 415 92.23 415 89h-4v-7h12v29h-6v-5c-6.35 7.9-16.08 8.54-19.75-2-2.01-5.76-1.26-23.01-1.25-30 .01-4.18-.02-9.22 2.14-12.96 4.14-7.19 17.15-8.37 22.35-1.91C423.55 62.94 423 68.4 423 73zm28-18v7h-13v17h9v7h-9v18h13v7h-22V55h22zm24 31l9 25-8.49-1.02-3.7-6.98L466 86l-1 25h-8V55c5.59 0 17.16-.35 21.66 3.01 5.28 3.94 5.72 18.64 2.25 23.78-1.58 2.36-3.46 3.07-5.91 4.21zm35-31v7c-2.65 0-8.59-.38-10.69 1.02C495.9 65.3 497 75.14 497 79h9v7h-9v18h13v7h-22V55h22zm-241.78 7.78c-3.48 2.44-3.16 4.15-3.22 8.22v23c.01 3.96-.02 12.92 6.78 10.22 3.3-1.31 3.18-5.27 3.22-8.22V73c-.01-5.4.61-11.35-6.78-10.22zM465 81c2.4-.06 5.42.1 7.33-1.74 2.4-2.47 2.33-12.25 0-14.83-4.67-5.42-7.24 0-7.33 4.57v12zm-264 53v49h11v7h-20v-56h9zm46 56c-2.48 0-7.14.52-8.83-1.57-1.54-1.91-.9-5.56-3.6-7.41-1.99-1.37-7.09-1.02-9.57-1.02l-1 10h-8l10-56c2.64 0 8.05-.6 9.84 1.57 1.45 1.75 3.41 13.53 3.91 16.43l7.25 38zm34-56v7c-2.65 0-8.59-.38-10.69 1.02C266.9 144.3 268 154.14 268 158h10v7l-8.4 1.6-1.6 6.4v17h-8v-56h21zm21 0l10 56h-9l-1-10-9.57 1.02-3.6 7.41L281 190l7.08-38c.5-2.91 2.4-14.66 3.9-16.4 1.86-2.16 7.32-1.6 10.02-1.6zm31 32l4.92-22 2.67-8.98L351 134v56h-8v-36c-2.47 5.9-6.44 29.07-7 36-6.01-1.06-5.13-4.61-6.2-10l-4.8-26-1 36h-7v-56l9.27.99L329 143l4 23zm46-32v7c-2.78 0-9.52-.42-11.69 1.02C363.9 144.3 365 154.14 365 158h10v7c-2.19.01-5.83-.21-7.69 1.02-3.45 2.3-2.31 13.02-2.31 16.98h14v7h-22v-56h22zm-149 16l-3 23h8c-.76-5.77-2.07-18.49-5-23zm66 0l-4 23h8c-.11-5.24-1.9-18.44-4-23zm-37 267c.96-4.24 2.49-8.66 2.82-13 1.48-19.57-17.95-33.24-25.51-50-4.91-10.89-4.44-18.47-4.31-30 .13-10.94 5.57-26.58 11.01-36 2.9-5.01 5.67-9.96 11.99-10.77 7.09-.91 13.44 4.32 11.5 11.77-.8 3.06-4.08 7.73-5.61 11-3.77 8.02-7.29 19.13-7.8 28-.51 9.02 3.51 20.71 8.7 28l11.69 15c6.01 8.98 9.5 19.2 9.52 30 .01 3.53.4 12.71-2.58 14.98-1.65 1.26-5.38 1.02-7.42 1.02h-14zm93 0h-23c1.46-4.45 2.77-8.26 2.96-13 .86-21.38-16.76-31.15-24.64-48-8.71-18.61-6.28-41.66 1.99-60 2.29-5.07 6.91-14.9 11.78-17.55 6.03-3.27 16.04-.21 16.24 7.55.1 3.69-5.22 12.17-7.07 16-3.86 7.98-6.17 17.15-6.75 26-1.47 22.56 13.76 30.74 23.18 48 7.86 14.39 7.37 25.37 5.31 41zm70 0h-23c2.33-6.98 3.16-8.45 2.99-16-.44-18.96-17.39-29.83-24.68-46-9.83-21.8-5.04-49.13 7.31-69 6.8-10.93 17.9-11.82 22.19-2.98 2.44 5.02-2.23 10.67-4.49 14.98-4.23 8.07-8.21 19.87-8.32 29-.12 10.26.74 16.98 6.27 26l15.42 21c8.91 16.13 9.5 25.28 6.31 43zm-35 152v6c-.01 2.53.34 6.36-1.6 8.26-1.82 1.78-5.03 1.7-7.4 1.74h-19-80c-2.13 0-5.89.14-7.77-.74-4.38-2.04-3.23-10.14-3.23-14.26-11.04-1.71-29.14-10.52-39-16.15-30.47-17.42-53.56-41.47-69.25-72.85-5.41-10.82-12.6-29-13.58-41-.9-11.01 11.04-8 18.83-8h331c1.93 0 5.2-.11 6.94.6 5.94 2.42 2.33 11.83 1.19 16.4-3.9 15.59-7.97 24.85-15.38 39-14.62 27.88-39.66 50.91-66.75 66.42-8.7 4.98-25.29 13.08-35 14.58z"
      />
    </svg>
  );
}

export default SvgComponent;
