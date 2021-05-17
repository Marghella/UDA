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
        fill= '#f9c401'
        d="M1 0v670h670V9l-1.6-7.98L662 0h-27-120H1zm337 75h-8c-.03-2.55.13-5.59-1.17-7.86-2.77-4.88-9.67-4.8-9.83 6.86-.06 5.01-.57 24.46.89 27.94 1.91 4.55 6.06 4.31 8.09.91C329.44 100.39 329 93.1 329 90h-4v-7h13v30h-6v-6c-1.47 1.73-3.06 3.88-5.09 4.98-5.71 3.08-12.81-.22-15.02-5.98-1.18-3.07-.89-8.6-.89-12V72c.02-4.1 0-7.46 2.65-10.89 4.36-5.66 14.91-6.34 20.12-1.68 3.98 3.54 4.19 10.6 4.23 15.57zM126 57v14c-.02 10.28-4.09 21.84-6.63 32l-14.79 57-5.73 22c-.59 2.19-1.57 6.62-3.41 7.98-1.71 1.25-5.35 1.02-7.44 1.02H75l13.63-54L105 75H70V57h56zm87 0v7h-13v17h10v7h-10v18h13v7h-22V57h22zm15 0l9 32 1-32h8v56l-7.3-.99-4.03-9.01L227 78l-1 35h-7V57h9zm45 0v7h-13v17h10v7h-10v18h13v7h-22V57h22zm24 30l9 26-8.3-.99-3.37-7.01L289 88l-1 25h-9V57c6.36 0 18.07-1.38 22.72 3.28 4.27 4.26 4.84 19.76.63 24.15-1.7 1.78-3.12 2-5.35 2.57zm55-30v56h-9V57h9zm36 56h-9c-.32-2.34-.83-6.79-2.16-8.69-2.09-2.99-7.74-3-9.83 0-1.18 1.69-1.72 6.54-2.01 8.69h-8l10-56c2.7 0 8.16-.56 10.02 1.6 1.66 1.93 3.02 12.36 3.59 15.4l7.39 39zm21-19v19h-8V57c6.46 0 17.97-1.38 22.77 3.28 1.42 1.37 2.28 2.82 2.73 4.72.82 2.74.73 18.25 0 21-.59 1.8-1.38 3.28-2.78 4.57-3.44 3.17-10.26 3.39-14.72 3.43zm32-37v37c.01 3.56-.34 11.37 5.02 11.37 4.45 0 4.92-5.11 4.98-8.37V57h8v34c0 4.3.52 12.33-1.31 15.98-3.6 7.18-15.98 8.28-21.46 2.79-3.55-3.55-3.22-7.17-3.23-11.77V57h8zm33 0v49h11v7h-20V57h9zm25 0v56h-9V57h9zm29 0v7h-8v49h-9V64h-8v-7h25zm20 0l10 56-7.99-1.6-3.52-7.8L537 102c-.89 10.98-1.67 10.97-10 11l7.4-39c.54-2.69 2.33-13.86 3.61-15.4 1.79-2.16 7.34-1.6 9.99-1.6zm-260 7v18c2.17-.08 4.73.07 6.4-1.6 1.97-1.97 1.88-8.72 1.45-11.38-.21-1.32-.46-2.44-1.45-3.42-1.67-1.67-4.23-1.52-6.4-1.6zm121 0v23c2.36-.03 5.6.21 7.4-1.6 2.36-2.36 2.36-17.44 0-19.8-1.8-1.81-5.04-1.57-7.4-1.6zm133 8l-4 24 9-1-5-23zm-171 1l-3 23h8l-3-23h-2zm-84 82h-8c0-2.58.33-7.63-1.02-9.76-2.27-3.57-8.79-3.46-8.98 6.76v22c.01 2.05-.07 5.02.74 6.89 1.66 3.86 5.98 4.72 8.24.96 1.46-2.44 1.02-9.77 1.02-12.85h8c0 5.22.81 13.57-2.01 17.92-4.5 7.03-17.54 6.8-22.14 0-4.05-6.03-2.94-26.08-2.85-33.92.06-4.49.6-10.11 3.65-13.72 4.69-5.41 16.04-5.84 20.65 0 3.28 4.06 2.7 10.73 2.7 15.72zm32 0h-7c-.03-3.1.11-7.16-1.85-9.76-2.87-3.8-6.67-2.08-8.26 1.8-1.46 3.57-.9 20.07-.89 24.96.01 4.04-.23 11.09 5.02 12.18 1.65.34 3.08-.37 4.13-1.61 2.39-2.86 1.85-9.91 1.85-13.57h7c0 4.54.67 14.1-1.45 17.86-4.19 7.26-17.91 6.86-22.32 0-2.41-3.68-2.22-7.64-2.23-11.86v-25c.22-17.52 17.14-17.03 22.77-11.7 4.31 4.07 3.23 11.23 3.23 16.7zm58-3h-7c-.15-2.94-.25-7.18-3.27-8.77-3.72-1.95-7.59 2.24-6.11 6.77 1.05 3.22 5.92 7.46 8.34 10 6.38 6.68 10.87 13.36 8.65 23-2.58 11.18-17.55 10.51-22.22 6.35-4.33-3.85-3.39-11.07-3.39-16.35h8c0 3.38-.87 9.98 3.14 11.34 5.2 1.78 6.38-4.76 5.43-8.34-2.49-9.34-16.17-12.6-16.55-26-.1-3.27-.22-7.1 1.72-9.89 4.44-6.42 16.12-6.28 20.61-1.54C377.6 142 377 147.62 377 152zm31 0h-7c-.19-3.2-.59-7.44-4.1-8.83-3.53-1.4-6.62 2.74-5.28 6.83 2.29 7.02 16.69 13.69 17.34 26 .2 3.87-.18 8.63-2.66 11.79-4.17 5.3-16.12 5.9-20.65.82-3.44-3.86-2.65-10.72-2.65-15.61h8c0 3.38-.87 9.98 3.14 11.34 5.2 1.78 6.38-4.76 5.43-8.34-2.49-9.34-16.17-12.6-16.55-26-.1-3.27-.22-7.1 1.72-9.89 4.44-6.42 16.12-6.28 20.61-1.54C408.6 142 408 147.62 408 152zm-195-16v7h-13v17h10v7h-10v18h13v7h-22v-56h22zm34 0l7.2 40 2.8 16h-9c-.2-2.48-.5-6.64-1.98-8.69-2.15-2.96-7.89-3.03-10.01 0-1.18 1.69-1.72 6.54-2.01 8.69h-8l10-56h11zm100 0v7h-13v17h9v7h-9v18h13v7h-22v-56h22zm76 0v56h-9v-56h9zm26 26c2.22 1.42 4.51 2.71 5.83 5.1 2.67 4.85 1.8 18.72-2.96 22.17-4.81 3.48-16.89 2.73-22.87 2.73v-56c5.12 0 16.96-.95 20.94 1.74 5.46 3.67 6.84 15.87 3.21 21.12-1.34 1.94-2.22 2.16-4.15 3.14zm21-26v56h-9v-56h9zm15 0v49h11v7h-20v-56h9zm38 0v7h-14c0 3.86-1.1 13.7 2.31 15.98 1.86 1.23 5.5 1.01 7.69 1.02v7h-10c0 3.96-1.14 14.68 2.31 16.98 2.17 1.44 8.91 1.02 11.69 1.02v7h-22v-56h22zm-85 7v17c2.18-.13 4.72-.09 6.4-1.74 2.16-2.11 2.43-12.32 0-14.24-1.49-1.18-4.57-1-6.4-1.02zm-197 8l-4 23h8l-4-23zm197 15v19c2.4-.06 5.55.08 7.4-1.74 2.33-2.28 2.29-13.37 0-15.66-1.8-1.81-5.04-1.57-7.4-1.6zm-103.96 86.45c8.84-.77 9.92 5.33 9.96 12.55v30c-.01 5.05.14 11.97-6.04 13.55-8.86 2.28-9.95-6.34-9.96-12.55v-30c.01-6.1-.37-10.82 6.04-13.55zm-82 22.15c3.93-.75 6.35-.59 9.17 2.63L275.8 302c2.03 3.41 6.46 10.31 6.96 14 .98 7.09-5.74 11.6-11.58 7.4-2.87-2.07-6.6-9.12-8.46-12.4l-15.01-27c-1.34-4.55.56-7.2 4.33-9.4zm162 0c7.71-1.57 11.7 2.85 9.26 10.4l-16.15 29c-1.98 3.48-4.32 8.75-8.19 10.26-6.07 2.37-12.38-2.87-9.59-10.26l15.05-27c2.82-4.91 4.54-9.51 9.62-12.4zM336 325.57c7.13.36 12.92.45 20 1.88 31.34 6.3 58.55 28.92 70.55 58.55 17.31 42.75 2.95 92.39-35.55 118.33-8.32 5.6-18.27 10.52-28 13.04-7.19 1.86-14.54 3.54-22 3.63-31.53.37-58.69-9.49-79.7-34-38.8-45.27-27.61-118.2 24.7-148.13 17.62-10.08 30.2-12.3 50-13.3zm-142.98 8.88c5.8-.5 9.11 2.34 13.98 5.13l27.87 16.21c6.43 5.3 3.2 12.45-1.91 13.76-4.26 1.1-8.43-1.83-11.96-3.83l-25-14.3c-3.51-2.03-7.59-4.06-8.53-8.42-.97-4.55 1.76-7.01 5.55-8.55zm281.98-.06c9.8-.98 11.77 7.39 7.49 12.22-1.64 1.85-9.88 6.45-12.49 7.97l-25 14.06c-4.48 1.81-10.33.67-11.53-4.68-1.19-5.33 3.63-8.59 7.53-10.95 6.41-3.87 28.26-16.91 34-18.62zm-142.89 23.63c-1.8 1.46-2.43 1.65-3.37 4-1.29 3.23-.75 24.01-.74 28.98.01 3.51-.26 7.67 2.01 10.61 3.93 5.09 13.81 4.5 13.82-8.61v-29c-1.47-6.28-6.08-7.89-11.72-5.98zM319.99 373c-14.86 7.01-25.65 13.81-31.92 30-14.01 36.12 13.75 74.75 52.93 70.83 42.95-4.29 60.89-55.34 32.7-86.79-5.97-6.66-14.36-11.13-22.7-14.04 0 4.12-.66 16.8 1.02 19.83 1.28 2.3 6.12 5.85 8.36 8.34 5.36 5.95 9.02 14.73 8.53 22.83-.26 4.18-1.82 9.29-3.73 13-16.75 32.66-63.51 17.89-62.14-16 .31-7.58 4.15-15.39 9.26-20.91 2.24-2.42 6.4-5.03 7.69-7.27 1.82-3.23 1.4-16.31 0-19.82zm-148.95 42.22H212c13.17-.04 11.75 9.71 7.61 13.04-2.55 2.05-6.51 1.73-9.61 1.6h-26c-2.76.14-10.76.35-12.96 0-6.44-2.16-8.11-10.9 0-14.64zm283.98-.01H494c5.08-.2 10.75-.68 11.76 5.8 1.32 8.48-5.58 8.98-11.76 8.99h-34c-2.67-.04-5.5-.01-7.72-1.74-5.29-4.12-3.12-10.39 2.74-13.05zM230 475.49c7.14.16 11.46 6.51 6.57 12.3-2.3 2.73-9.23 6.29-12.57 8.21l-25 14.01c-4.81 1.79-10.3.68-11.53-5.01-1.16-5.43 3.57-8.25 7.53-10.58 7.03-4.13 28.63-17.3 35-18.93zm209.02-.04c6.14-.61 9.82 2.6 14.98 5.55l23 13.15c3.99 2.35 8.71 5.38 7.53 10.83-1.09 4.97-6.05 6.71-10.53 5.2l-31-17.33c-3.68-2.11-8.39-4.27-9.34-8.86-.92-4.5 1.57-6.98 5.36-8.54zm-165 45c6.33-.63 10.47 2.92 8.78 9.55l-16.52 30c-1.95 3.42-4.5 8.94-8.32 10.4-6.33 2.42-11.91-3-9.95-9.4l16.14-29c2.87-5.03 4.25-9.27 9.87-11.55zm120.02-.02c7.8-.93 9.36 3.58 12.81 9.57l16.62 29c2.19 4.73 1.28 10.37-4.49 11.67-5.94 1.35-8.73-3.29-11.26-7.67L395 541c-1.82-3.16-5.29-8.55-5.76-12-.63-4.55.78-6.81 4.8-8.57zm-60.02 16.02c8.53-.84 9.89 4.27 9.98 11.55v31c-.01 5.12.13 11.76-6.04 13.47-8.84 2.46-9.95-7.51-9.96-13.47v-32c.08-5.65.43-8.27 6.02-10.55z"
      />
    </svg>
  );
}

export default SvgComponent;