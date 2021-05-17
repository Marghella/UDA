import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 671 671"
      {...props}
    >
      <path
        fill ='#0d649b'
        d="M0 1v670h670V1H0zm168 95h-20c0-5.2.65-12.44-2.09-16.96-4.33-7.16-14.63-6.57-18.34.98C125.58 84.05 126 89.57 126 94v23c2.55-2.9 4.57-5.67 8.01-7.59 9.65-5.37 23.91-2.49 30.34 6.59 4.28 6.05 5.61 16.7 5.65 24 .07 14.28 2.11 35.04-9.18 45.67-11.28 10.62-38.14 9.93-48.61-1.71-6.43-7.15-8.2-17.68-8.21-26.96V92c.01-7.99 1.28-17.22 5.85-24 2.24-3.32 5.62-6.66 9.15-8.59 11.31-6.16 34.07-5 42.61 5.61C168.29 73.29 168 85.92 168 96zm52-3v19h-9V56c6.42 0 18.94-1.3 23.5 3.42 4.88 4.89 4.98 25.14 0 29.93-3.33 3.1-10.19 3.56-14.5 3.65zm38-37l7.2 37 3.8 19c-9.62-.01-9.49.36-11-11h-11l-1 11h-9l8.2-42c2.46-12.4 1.25-13.87 8.8-14h4zm40 19h-8c-.01-2.98.29-7.28-1.74-9.68-2.74-3.25-8.09-2.54-8.26 6.68v22c0 1.95-.11 5.18.6 6.94 1.6 3.98 5.92 4.79 8.23.91C290.44 99.14 290 92.31 290 89h8c0 5.36.04 15.47-3.65 19.61-4.65 5.22-16.17 4.46-20.38-.94-3.06-3.92-2.96-7.99-2.97-12.67V71c.04-3.41.21-6.92 2.09-9.9 3.82-6.06 16.73-7.22 21.48-1.87 2.9 3.26 3.34 11.46 3.43 15.77zm26-19v7h-13v17h9v7h-9v18h13v7h-22V56h22zm53 18h-8c-.01-2.72.29-6.49-1.6-8.68-2.76-3.2-8.22-2.65-8.4 6.68v22c0 1.95-.11 5.18.6 6.94 1.6 3.98 5.92 4.79 8.23.91C369.44 99.14 369 92.31 369 89h-5v-7h13v30h-6v-6c-1.47 1.73-3.06 3.88-5.09 4.98-5.69 3.06-12.51-.25-14.65-5.98-1.99-5.35-1.34-26.14-1.26-33 .05-3.86.36-7.5 2.41-10.9 3.76-6.22 16.35-7.13 21.17-1.87C377.31 63.28 377 68.9 377 74zm13-18v56h-8V56h8zm14 0v37c.01 3.56-.34 11.37 5.02 11.37 4.45 0 4.92-5.11 4.98-8.37V56h8v33c0 3.95.4 12.66-.89 16-2.35 6.07-7.23 7.23-13.11 6.96-9.43-.43-11.96-5.37-12-13.96V56h8zm48 16h-7c-.19-3.19-.52-7.29-4.1-8.6-3.32-1.21-6.55 2.06-5.37 6.6 2.38 9.21 16.81 12.72 17.43 27 .17 3.81-.09 7.7-2.61 10.79-4.08 5-15.14 5.86-19.96 1.56C426.06 105.5 427 98.28 427 93h8c0 3.38-.87 9.98 3.14 11.34 5.2 1.78 6.38-4.76 5.43-8.34-2.38-8.95-15.93-12.57-16.53-26-.16-3.67.04-7.73 2.61-10.61 3.81-4.27 14.9-4.71 19.12-.96C452.7 61.92 452 67.27 452 72zm28-16v7h-8v49h-9V63h-8v-7h25zm12 0v56h-8V56h8zm29 0c-.14 15.05-11.5 33.68-15 49h14v7h-22.84v-9L511 63h-13v-7h23zm13 0v56h-9V56h9zm24 0l6.39 33 4.61 23c-10.18-.01-10.16-.66-11-11h-11l-1 11h-9l8.2-42c2.31-11.98 1-13.86 8.8-14h4zM90 57v135H68V88l-16 16V87c.15-7.94 3.67-10.24 8.58-16C66.9 63.58 69.63 57.07 80 57h10zm130 6v23c2.36-.03 5.6.21 7.4-1.6 2.36-2.36 2.36-17.44 0-19.8-1.8-1.81-5.04-1.57-7.4-1.6zm32 9l-3 23 8-1c-1.05-5.75-2.09-17.54-5-22zm300 0l-4 22h9l-5-22zm-214 31c-2.54 6.38-2.58 12.41-10 13l1-13h9zm-205 21.74c-2.76 1.49-4.2 2.31-5.69 5.28-2.18 4.34-1.32 23.98-1.31 29.98 0 2.96-.15 6.21 1.01 8.98 2.36 5.66 9.44 7.52 14.95 5.28 5.38-2.18 5.98-8.23 6.04-13.26v-16c0-10.47.58-23.98-15-20.26zM284 151h-8c-.03-2.7.2-6.53-2.31-8.29-3.16-2.22-7.48 1.17-6.16 6.29 1.09 4.21 6.04 8.39 9.05 11.42 6.25 6.31 10.31 12.29 7.86 21.58-3.08 11.71-18.24 10.34-22.79 5.44-3.46-3.72-2.65-10.64-2.65-15.44h7c.07 3 .12 8.25 2.56 10.38 3.44 3.02 8.59-1.17 7.01-7.38-2.42-9.48-16.17-12.2-16.55-26-.1-3.27-.22-7.1 1.72-9.89 4.11-5.92 16.14-6.18 20.83-.88 3.05 3.44 2.43 8.48 2.43 12.77zm158-16.61c15.37.18 15 10.77 15 22.61v17c-.1 8.44-2.19 15.97-12 16.9-16.1 1.51-16-11.17-16-22.9v-16c.02-4.43.25-9.05 2.99-12.79 2.48-3.37 6.12-4.2 10.01-4.82zM233 135v7h-13v17h9v7h-9v18h13v6h-22v-55h22zm21 0v55h-9v-55h9zm57 0v7h-7v48h-9v-48h-8v-7h24zm13 0v55h-9v-55h9zm28 0v7h-7v48h-9v-48h-8v-7h24zm13 0v37c.01 3.54-.33 11.37 5 11.37 4.65 0 4.95-6.08 5-9.37v-39h8v41c-.05 4.14-.34 8.45-3.42 11.61-6.38 6.54-19.21 3.77-22.32-4.61-1.7-4.59-1.26-11.99-1.26-17v-31h9zm46 0c-.05 15.29-10.9 33.77-15 49h14v6h-23c.01-11.28 2.63-14.7 6.31-25l8.69-23h-14v-7h23zm13 0v55h-9v-55h9zm47 0l9 32 1-32h7v55l-7.16-1.6-4.12-10.4-6.72-22-1 34h-7v-55h9zm31 0v55h-9v-55h9zm-59.95 6.96c-4.06 2.09-3.96 3.67-4.05 8.04v24c.01 3.95-.26 10.79 5.9 9.63 4.11-.77 4.05-5.37 4.1-8.63v-23c-.01-5.15.55-9.79-5.95-10.04zM237 230h-8c-.07-2.79.04-6.31-2.43-8.22-3.65-2.81-8.39 1.23-6.79 6.22 2.69 8.38 16.82 12.75 17.2 26 .11 3.49.16 7.89-1.83 10.89-4.07 6.11-15.64 6.69-20.76 1.69C210.1 262.4 211 255.5 211 250h8c0 3.08-.48 8.27 1.6 10.68 3.48 4.05 9.07.32 7.79-5.68-2.12-9.96-16.42-14.56-17.29-27-1.27-18.08 17.63-16.41 22.47-11.57 3.29 3.28 3.39 9.22 3.43 13.57zm16-16.67c14.59-1.3 16.98 8.72 17 20.67v17c-.1 8.31-1.39 16.82-11 18.66-3.15.6-7.11.37-9.98-1.11-8.5-4.39-7.02-14.56-7.02-22.55v-16c.02-3.45.01-6.81 1.57-9.98 2.13-4.34 5.01-5.59 9.43-6.69zm30 .67v48h12v7h-20v-55h8zm24 0v55h-9v-55h9zm5 55v-55c7.54 0 20.59-1.97 25.15 5.05 2.19 3.39 2.8 9.94 2.85 13.95v18c-.12 10.32-2.12 17.83-14 18h-14zm54-55v7h-13v17h10v7h-10v17h13v7h-21v-55h21zm-111.86 6.84c-1.49.93-1.69.6-2.71 2.39-2.2 3.87-1.45 21.41-1.43 26.77.02 3.62-.12 10.93 4.14 12.34 6.53 2.17 6.85-6.39 6.7-10.34v-26.96c-1.15-3.74-3.23-4.43-6.7-4.2zM321 221v41c2.53-.01 6.36.35 8.26-1.6 2.38-2.43 1.74-10.02 1.74-13.4v-16c-.01-2.57.22-6.31-1.74-8.26-1.97-1.97-5.68-1.71-8.26-1.74zm175 74c-1.24 15.18-6.42 21.28-22 22 .14-15.7 6.29-21.95 22-22zm-43 2c10.91 9.56 13.37 15.68 6 29-11.45-6.69-15.41-18.54-6-29zm-11 47c-12.82-6.07-13.16-16.87-7-28 12.82 6.07 13.16 16.87 7 28zm30-23c-5.97 11.32-15.71 16.65-24.64 30-2.24 3.34-6.61 10.81-5.04 14.91 1.04 2.71 5.33 5.42 7.68 7.09l-10 2 1.8 11 3.2 13c-1.24-.48-1.76-.36-2.7-1.59-2.63-3.41-4.26-17.81-4.3-22.41-4.01.34-7.24.97-11 2.46-17.39 6.88-21.3 23.65-21.85 40.54v10c-.69 21.77-7.86 38.12-26.15 50.96-8.36 5.87-21.12 11.18-31 13.89l-17.69 4.32c-2.79 1.91-2.3 5.85-2.31 8.83v22l20 1h30l35-3c0-4.06-.92-16.61 1.74-19.26 2.08-2.09 6.5-1.74 9.26-1.74h40c2.91.01 7.14-.45 8.98 2.31 1.51 2.27 1.02 10.66 1.02 13.69v34c-.01 3.12.47 7.83-2.43 9.83-2.49 1.71-11.26 1.17-14.57 1.17h-35c-10.75-.15-9-3.66-9-21l-35-3.68-40 .68-17 1-73 1-17 1h-25v-19h36l17 .96h28c2.4.04 10.14.82 11.69 0 3.51-2.09 2.32-15.93 2.31-19.96-.01-4.01.65-8.29-4.06-9.7-8.2-2.46-16.55-1.15-32.94-8.17L223 466c3.22-.91 6.65-.04 10 0 7.3.08 13.03-.39 20-2.87 8.9-3.15 18.28-11.23 27-16.09 7.2-4.01 10.54-4.06 18-6.04-7.99-2.34-12.25-1.76-21-5.89-13.94-6.58-23.15-19.95-28.31-34.11-7.59-20.86-7.94-56.77-29.69-68 2.49-.99 3.33-.96 6-1h12c17.22.08 36.34 8.33 50 18.48 21.53 15.99 32.16 36.87 62 36.52 19.69-.23 31.02-14.39 45-25.74 6.91-5.61 17.59-12.97 27-10.87 7.65 1.71 11.76 9.13 18 13.61 3-14.69 10.17-20.34 19.42-31 3.76-4.33 8.01-10.29 13.58-12zm23 12c-8.17 11.12-15.2 9.67-26 4 5.67-11.87 16.72-10.63 26-4zm-16 23c-11.25 6.37-16.48 5.99-26-3 7.81-8.86 20.71-8.09 26 3zm-63 127.15h50c3.12-.11 7.18.02 9.87 1.78 4.66 3.05 4.52 9.11 0 12.22-3.04 2.08-7.34 1.84-10.87 1.85h-44c-3.56-.02-7.89.1-10.69-2.51-4.15-3.88-3.43-11.17 5.69-13.34zM308 498v30h12v-30h-12zm-119.9 23.43c2.98-.46 6.8-.9 9.25 1.31 2.54 2.28 2.6 6.12 2.65 9.26.09 7.22 1.19 19.47-10 17.76-2.55-.39-4.54-1.59-5.69-3.87-2.01-3.33-1.86-18.38 0-21.66 1.33-1.95 1.94-1.93 3.79-2.8zM414 572.22h55c4.51-.14 8.97.53 10.02 5.82 1.4 7.1-4.43 8.88-10.02 8.96h-49c-2.99 0-7.16.31-9.57-1.74-4.39-3.73-2.71-10.27 3.57-13.04z"
      />
    </svg>
  );
}

export default SvgComponent;