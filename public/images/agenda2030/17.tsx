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
        fill='#194468'
        d="M0 1v670h670V1H0zm450 71h-7c-.19-3.2-.59-7.44-4.1-8.83-3.53-1.4-6.62 2.74-5.28 6.83 2.29 7.02 16.69 13.69 17.34 26 .2 3.87-.18 8.63-2.66 11.79-4.17 5.3-16.12 5.9-20.65.82C424.21 104.75 425 97.89 425 93h8c0 2.5-.33 7.66 1.02 9.69 1.92 2.86 6.86 2.87 7.74-2.71.89-5.69-3.15-9.3-6.76-12.98-5.36-5.46-9.75-8.89-9.98-17-.1-3.27-.22-7.1 1.72-9.89 4.44-6.42 16.12-6.28 20.61-1.54C450.6 62 450 67.62 450 72zM221 92v20h-9V56c6.3 0 19.09-1.45 23.49 3.39 2.64 2.91 2.49 6.94 2.51 10.61.03 5.68 1.16 15.51-3.28 19.57C231.28 92.73 225.4 92 221 92zm39-36l2.8 16 7.2 40h-9c-.4-4.9-.59-10.89-6.99-10.89-1.57 0-3.13.33-4.27 1.49-1.71 1.72-2.29 6.93-2.74 9.4h-8l10-56h11zm33 30l9 26-8.3-.99-3.51-7.01L284 86l-1 26h-8V56c5.78 0 17.43-1.11 21.86 2.51 5.02 4.1 5.55 18.14 2.21 23.38-1.67 2.61-3.33 3.16-6.07 4.11zm36-30v7h-8v49h-9V63h-8v-7h25zm14 0l9 32 1-32h7v56l-6.3-.99-4.03-9.01L342 77l-1 35h-7V56h9zm45 0v7h-13v17h9v7h-9v18h13v7h-22V56h22zm24 30l9 26-8.3-.99L409 103l-6-17-1 26h-8V56c5.77 0 17.48-1.24 21.87 2.43 4.95 4.14 5.75 18.27 2.28 23.46-1.73 2.58-3.39 3.16-6.15 4.11zm53-30v24h10V56h9v56h-9V87h-10v25h-9V56h9zm33 0v56h-8V56h8zm15 36v20h-9V56c6.41 0 19.08-1.46 23.7 3.28 5.05 5.17 4.77 25.53-.84 30.29C523.15 92.72 517.58 92 513 92zM100 57v135H78V88l-16 15c0-4.37-.49-18.77.74-22 1.27-3.35 8.32-10.87 10.99-14 5.71-6.7 6.12-9.94 15.27-10h11zm67 0v16c-.02 10.71-5.36 26.97-8.13 38l-13.75 53-7.12 28h-22l6.12-24 16.75-65L146 75h-35V57h56zm54 6v23c9.59-.33 9.09-4.86 9-13-.03-2.54-.01-6.44-1.85-8.4-1.75-1.85-4.82-1.57-7.15-1.6zm62 0v18c2.36-.03 5.6.21 7.4-1.6.99-.98 1.24-2.1 1.45-3.42.43-2.66.52-9.41-1.45-11.38-1.8-1.81-5.04-1.57-7.4-1.6zm119 0v18c2.36-.03 5.6.21 7.4-1.6.99-.98 1.24-2.1 1.45-3.42.43-2.66.52-9.41-1.45-11.38-1.8-1.81-5.04-1.57-7.4-1.6zm111 0v23c2.4-.06 5.55.08 7.4-1.74 2.44-2.39 2.41-17.26 0-19.66-1.8-1.81-5.04-1.57-7.4-1.6zm-259 8l-4 23h8l-4-23zm81 81h-8c-.03-3.53.06-10.13-5.02-10.26-1.41-.03-2.49.59-3.42 1.59-2.36 2.52-2.52 7.4-2.41 10.67v22c.54 2.4 1.5 5.81 3.99 6.83 7.46 3.06 6.86-11.22 6.86-14.83h-5v-7h13v29h-6v-5c-1.53 1.76-2.99 3.7-5.09 4.83-6.13 3.29-13.13-.56-15.11-6.83-1.36-4.33-.88-27.91-.8-34 .25-18.39 18.44-16.96 23.57-11.61 3.49 3.64 3.42 9.9 3.43 14.61zm60-17.7c2.34-.23 4.64-.46 7 0 12.13 1.8 11 13.48 11 22.7v18c-.09 7.26-1.96 13.77-10 15.71-1.75.3-4.22.32-6 0-13.38-1.51-12-13.59-12-23.71v-15c.02-3.36.07-6.8 1.26-10 1.71-4.57 4.31-6.17 8.74-7.7zM221 171v19h-9v-55c6.24 0 19.27-1.62 23.57 3.23 2.76 3.1 2.42 6.92 2.43 10.77.01 5.76 1.21 15.25-3.39 19.35-3.62 3.22-9.1 2.65-13.61 2.65zm44-36v7h-14c0 3.86-1.1 13.7 2.31 15.98 1.86 1.23 5.5 1.01 7.69 1.02v6c-2.19.01-5.83-.21-7.69 1.02-3.45 2.3-2.31 13.02-2.31 16.98h14v7h-22v-55h22zm23 30l9 25h-10l-8-25-1 25h-9v-55c5.13 0 18.01-.96 21.89 1.74 1.57 1.09 2.67 2.5 3.15 4.28 1.44 3.09 1.45 16.95 0 19.77-1.59 2.32-3.73 3.13-6.04 4.21zm61-30v48h11v7h-20v-55h9zm24 0v55h-9v-55h9zm65 26c2.22 1.42 4.51 2.71 5.83 5.1 2.86 5.19 1.87 19.62-3.88 22.73-3.47 1.87-17.3 1.17-21.95 1.17v-55c4.5 0 17.51-.72 20.89 1.17 6.07 3.4 6.47 17.05 3.26 21.69-1.34 1.94-2.22 2.16-4.15 3.14zm20-26v55h-9v-55h9zm27 0v7h-13c0 14.34-1.46 16.86 9 17v6h-9v18h13v7h-22v-55h22zm28 0v7h-8v48h-8v-48h-8v-7h24zm28 0v7h-8v48h-9v-48h-8v-7h25zm12 0v55h-8v-55h8zm13 0l6 39 5.75-27 2.99-11.01L588 135l-10 55c-2.7 0-8.16.56-10.02-1.6-1.5-1.74-3.4-13.49-3.9-16.4L557 135h9zm34 0v55h-8v-55h8zm-202.78 6.78c-3.49 2.43-3.16 4.15-3.22 8.22v25c.03 2.04-.03 4.83 1.17 6.57 1.74 2.51 8.64 4.62 8.67-5.57v-30.89c-1.16-3.6-3.46-3.81-6.62-3.33zM221 142v23c9.61-.57 9.04-4.85 9-13-.01-2.58.2-6.43-1.74-8.4-1.78-1.83-4.91-1.57-7.26-1.6zm57 0v18c2.4-.06 5.42.1 7.26-1.74 2.45-2.44 2.4-12.21 0-14.66-1.78-1.83-4.91-1.57-7.26-1.6zm149 0v16c1.83-.02 4.91.16 6.4-1.02 2.34-1.85 2.34-12.11 0-13.96-1.49-1.18-4.57-1-6.4-1.02zm0 23v18c1.99-.01 5.81.24 7.4-1.02 2.46-1.95 2.16-13.22 0-15.38-1.8-1.81-5.04-1.57-7.4-1.6zM207 475c-7.34-3.47-15.15-13.22-19.64-20-16.86-25.41-18.73-58.62-5.58-86 9.62-20.02 27.37-35.98 48.22-43.56 5.15-1.88 10.59-3.21 16-4.01 3.14-.47 7.15-.4 9.78-2.28 2.79-2 4.38-7.03 6-10.15 3.01-5.78 7.28-12.06 11.52-17 16.94-19.77 41.85-30.3 67.7-30 25.94.31 50.22 13.08 66.54 33 3.08 3.76 6.91 9.64 9.09 14 1.56 3.1 3.01 8.06 5.76 10.15 2.71 2.06 8.97 1.96 12.61 2.65 7.97 1.53 14.74 3.82 22 7.45 27.98 13.99 47.95 43.05 48 74.75v8c-.19 16.24-7.22 34.03-16.75 47l-8.34 9.91c-2.01 2.02-5.66 4.6-6.72 7.13-1.12 2.67 1.75 16.53 1.81 20.96.57 49.16-37.68 91.1-88 89.26-11-.41-19.54-1.35-30-5.32l-17-7.74c-2.29-.09-11.77 5.45-15 6.79-9.44 3.91-20.74 6.89-31 7.01-38.99.45-72.61-20.28-85.66-58-3.03-8.77-5.42-20.72-4.83-30 .86-13.57.94-11.32 3.49-24zm68-153c25.29 2.28 53.12 25.2 63 48h2l6.44-11c13.13-18.74 33.47-33.74 56.56-37-2.15-11.48-13.72-23.78-23-30.28-28.59-20.01-66.46-16.44-91 8.28-6.22 6.27-11.55 13.4-14 22zm-22.95 15L239 340.2c-13.44 4.13-24.7 12.03-33.68 22.8-16.96 20.36-19.42 49.09-9.31 73 3.2 7.55 10.57 19.41 17.99 23 14.42-23.92 38.41-42.66 67-45l-8.54-10c-7-8.55-13.3-19.32-16.31-30-1.9-6.78-3.66-15.99-4.1-23-.26-5.35 1.88-9.08 0-14zM426 337l-1 1c4.43 18.22-3.52 43.81-13.75 59L398 413c9.23 2.82 14.67 2.65 25 7.31 21.6 9.74 28.75 20.56 42 38.69 6.98-5.01 11.4-11.42 15.24-19 13.9-27.4 9.71-60.87-12.33-82.91-13.36-13.36-24.72-15.75-41.91-20.09zm-156 1c-3.28 24.85 4.03 46.89 23 63.83 7.09 6.33 16.85 11.64 26 14.41 2.48.56 8.04 2.5 9.98 0 1.51-1.69 1.05-10.56 1.02-13.24-.37-31.57-28.44-62.35-60-65zm79 80c32.12-2.63 59.62-32.94 60-65 .03-2.64.49-11.59-1.02-13.16-1.88-2.41-7.62-.51-9.98 0-9.65 3.06-19.59 8.41-27 15.25-14.45 13.35-23.43 33.12-22.99 52.91l.99 10zm7 19c1.6 8.44 8.05 15.16 14 20.99 20.86 20.41 55.48 25.48 81 11.01-12.74-28.53-44.77-43.33-75-38.56-7.37 1.16-13.23 3.69-20 6.56zm-128 33c10.3 4.1 18.77 6.98 30 7h6c24.3-.12 49.16-16.97 59-39-24.87-12.89-53.79-10-76 6.9-7.54 5.73-16.75 15.68-19 25.1zm111 80c21.18-15.51 25.92-52.78 16.55-76-2.55-6.32-6.31-12.68-10.56-18-1.36-1.7-3.61-4.8-6.01-4.8-2.48 0-4.71 3.04-6.08 4.8-4.51 5.81-8.13 12.06-10.56 19-9.53 27.28-3.59 54.3 16.66 75zm-37.99-67c-14.89 10.18-37.58 12.42-55.01 9.73-4.94-.77-10.31-2.23-15-3.96-1.9-.7-5.75-2.54-7.69-1.96-3.34.99-3.36 12.17-3.3 15.19.59 25.78 16.58 50.75 39.99 61.68 12.35 5.76 21.7 6.47 35 6.32 12.57-.15 20-4.26 31-9l-8.25-11c-7.32-10.16-12.5-21.7-14.94-34-.94-4.72-1.9-13.22-1.8-18 .11-4.87 2.44-10.56 0-15zm74.99 0l1 15c.02 13.13-1.65 23.81-6.87 36-5.11 11.92-13.51 20.29-16.13 27 34.9 19.33 79.09 5.88 97.03-30 8.11-16.22 7.37-28.7 5.97-46-19.06 7.62-34.36 11.66-55 7.34-11.53-2.42-15.68-4.9-26-9.34z"
      />
    </svg>
  );
}

export default SvgComponent;
