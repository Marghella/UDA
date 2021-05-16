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
        fill= '#a5183d'
        d="M0 0v670h670V0H0zm115 116v2c10.62 3.62 13.95 13.73 14 24 .08 16.36 3.15 37.43-14 46.68-3.11 1.67-5.57 2.55-9 3.3-4.51 1-8.4 1.18-13 .98-3.39-.15-7.79-.95-11-2.06-22.15-7.7-19.22-31.19-19-49.9.12-9.9 3.95-19.57 14-23v-2c-8.94-4.81-11.88-12.22-12-22-.13-11.73-.19-24.46 10.02-32.47C80.03 57.6 85.73 56.08 92 56c4.38-.05 10.91-.29 15 .76 13.52 3.47 19.84 13.8 20 27.24.15 13.3 1.66 24.65-12 32zm156-59.66c16.57-.43 15 11.75 15 23.66v18c-.09 7.29-1.71 13.48-10 14.79-22.56 3.55-18.02-22.44-18-36.79.01-4.27-.02-9.14 2.14-12.98 2.56-4.57 6.03-5.8 10.86-6.68zm63 0c16.57-.43 15 11.75 15 23.66v19c-.1 7.07-2.18 12.56-10 13.79-15.17 2.39-17.98-7.04-18-19.79V76c.02-3.9.28-9.51 2.16-12.98 2.46-4.56 6.09-5.81 10.84-6.68zM434 75h-8c-.03-2.55.13-5.59-1.17-7.87-2.25-3.95-6.35-4.06-8.53 0C414.22 71 414.98 88.64 415 94c.02 3.62-.16 9.91 4.12 11.34 3.79 1.28 5.47-2.37 6.2-5.34 1.26-5.15 1.06-8.28-4.32-10v-7h13v30h-6v-6c-1.47 1.73-3.06 3.88-5.09 4.98-5.71 3.08-12.81-.22-15.02-5.98-1.18-3.07-.89-8.6-.89-12V72c.02-4.1 0-7.46 2.65-10.89 4.37-5.67 14.89-6.33 20.13-1.68 4.26 3.79 4.2 10.34 4.22 15.57zm87-18.66c20.29-.52 16.02 22.99 16 36.66-.01 8.13-.76 18.76-11 19.84-1.51.22-5.51.18-7 0-10.62-1.72-10-10.59-10-18.84V82c0-4.99-.71-14.79 1.45-18.98 2.41-4.67 5.74-5.8 10.55-6.68zM567 73h-8c-.11-3.09-.17-6.43-3.14-8.29-3.81-2.39-7.5 1.88-6.08 6.29 2.56 7.97 16.82 13.18 17.2 27 .11 3.93.22 7.68-2.41 10.89-4.31 5.27-16.29 5.92-20.92.72C540.21 105.75 541 98.89 541 94h8c0 2.95-.42 8.21 1.74 10.45 3.27 3.38 8.74-.41 7.37-6.45-2.18-9.6-16.46-13.32-17.07-27-.17-3.72.06-7.7 2.61-10.66 4.28-4.96 15.09-5.3 19.7-.69 3.16 3.15 3.56 9.14 3.65 13.35zm17-16.66c16.57-.43 15 11.75 15 23.66v19c-.1 7.07-2.18 12.56-10 13.79-15.11 2.38-17.94-7.05-18-19.79V76c.05-4.05.66-10.52 2.85-13.96 2.53-3.95 5.83-4.91 10.15-5.7zM184 57v49h12v7h-20V57h8zm35 0l10 56h-9c-.29-2.15-.83-7-2.01-8.69-2.09-2.98-7.89-2.98-9.98 0-1.18 1.69-1.72 6.54-2.01 8.69h-8l10-56h11zm16 0l6 39 5.59-27 3-10.98L257 57l-7.39 38c-.59 3.14-2.14 14.46-3.77 16.43-1.79 2.17-7.2 1.57-9.84 1.57l-10-56h9zm83 56l-8.3-.99-3.37-7.01L301 87l-1 26h-9V57c12.44 0 25.79-3.17 25.8 14 .22 2.32.31 6.88 0 8.99-1.58 5.9-5.92 5.99-5.88 10.1L318 113zm43 0V57c6.26 0 17.96-1.23 22.87 2.65 4.39 3.46 5.06 10.14 5.13 15.35.1 8.53 1.71 28.65-4.39 34.58-4.86 4.73-17.03 3.42-23.61 3.42zm41-56v56h-9V57h9zm55 32l1-32h7v56h-8l-7-23-5-12v35h-7V57l8.3.99 3.98 9.01L457 89zm21-32v56h-8V57h8zm28 0v7c-6.6.23-7.87 1.26-8 8v41h-8V64h-8v-7h24zm-234 6.9c-5.05 1.6-4.93 4.29-5 9.1v22c.01 4.01-.39 11.79 5.96 10.63 5.49-1 5.03-8.45 5.04-12.63V74c-.07-5-.14-9.41-6-10.1zm63.02.01c-5.07 1.57-4.95 4.27-5.02 9.09v22c.01 4.04-.42 11.78 5.97 10.63 5.45-.98 5.02-7.46 5.03-11.63V74c-.07-5.15.07-9.36-5.98-10.09zm187.02 0c-5.86 1.85-5.03 6.86-5.04 12.09v19c.02 4.31.44 11.84 6.9 10.63 4.11-.77 4.05-5.37 4.1-8.63V75c-.01-5.45.73-10.29-5.96-11.09zm62.98 0c-5.07 1.57-4.95 4.27-5.02 9.09v22c.01 4.04-.42 11.78 5.97 10.63 5.45-.98 5.02-7.46 5.03-11.63V74c-.07-5.15.07-9.36-5.98-10.09zM300 64v18c2.17-.08 4.73.07 6.4-1.6 1.97-1.97 1.88-8.72 1.45-11.38-.21-1.32-.46-2.44-1.45-3.42-1.67-1.67-4.23-1.52-6.4-1.6zm70 0v42c2.98-.04 6.27.21 8.4-2.31C380.67 101 380 93.55 380 90c0-5.1 1.35-21.32-2.31-24.4-2.11-1.77-5.12-1.57-7.69-1.6zM92.02 73.74c-2.04 1.12-2.84 1.32-4.29 3.37-3.5 4.94-3.36 19.27-1.39 24.87 1.98 5.64 8.14 8.28 13.64 6.01 6.33-2.61 6.95-8.99 7.02-14.99.12-10.43-.67-22.7-14.98-19.26zM212 73l-3 23h8l-3-23h-2zM91.04 125.74c-2.68 1.54-3.77 2.26-5.03 5.28-1.73 4.12-1.08 25.21-1.01 30.98.04 2.82.09 5.39 1.45 7.96 2.65 4.97 9.5 6.33 14.51 4.3 6.88-2.78 7.03-13.96 7.04-20.26.01-9.31 2.24-28.31-11-28.95-2.45-.12-3.62.11-5.96.69zM238 155h-8c0-2.58.33-7.63-1.02-9.76-2.34-3.69-8.82-3.51-8.98 7.76v20c0 2.25-.14 5.86.74 7.89 1.66 3.86 5.98 4.72 8.24.96 1.46-2.44 1.02-9.77 1.02-12.85h8c0 4.96.75 13.85-1.85 17.93-4.49 7.1-17.58 6.81-22.14 0-4.13-6.23-3.1-25.02-3.01-32.93.06-4.47.65-11.15 3.65-14.72 4.73-5.5 15.98-5.76 20.7 0 3.42 4.08 2.65 10.64 2.65 15.72zm90-3h-8c-.04-2.81.2-6.44-2.31-8.36-3.47-2.65-8.49.97-6.76 6.36 1.37 4.27 8.74 10.42 11.97 14 4.78 5.32 6.61 12.95 4.67 20-2.65 9.66-17.09 9.93-22.29 4.72-4.07-4.06-3.28-10.44-3.28-15.72h8c0 2.91-.39 7.37 1.6 9.68 2.98 3.46 7.06 1.22 7.93-2.7 1-4.55-2.73-7.98-5.51-10.98-5.01-5.41-11.38-11.28-11.92-19-1.25-17.77 17.16-16.91 22.48-11.58 3.57 3.56 3.41 8.93 3.42 13.58zm33 3h-8c0-3.09.38-7.28-1.6-9.84-2.49-3.22-6.05-2.77-7.66.95-.73 1.68-.71 4.08-.74 5.89v22c0 1.95-.11 5.18.6 6.94 1.6 3.98 5.92 4.79 8.23.91 1.61-2.71 1.17-9.54 1.17-12.85h8c0 6.39.89 15.68-4.39 20.35-4.92 4.36-15.03 3.47-19.19-1.46-3.01-3.56-3.36-7.45-3.42-11.89v-25c.05-3.88.29-7.64 2.7-10.89 4.52-6.11 16.53-7.12 21.3-.77 3.09 4.11 3 10.75 3 15.66zm-163-19v7h-14v17h10v7h-10c0 3.96-1.14 14.68 2.31 16.98 2.17 1.44 8.91 1.02 11.69 1.02v7h-22v-56h22zm64 30l9 26-8.3-.99L259 183l-6-17-1 26h-8v-56c5.85 0 17.34-1.14 21.87 2.51 5 4.02 5.7 18.25 2.28 23.38-1.73 2.58-3.39 3.16-6.15 4.11zm35-30v7h-13v17h10v7h-10v18h13v7h-21v-56h21zm78 0v56h-9v-56h9zm29 0v7h-8v49h-8v-49h-8v-7h24zm31 56h-9c-2.04-11.2-1.59-11-13-11l-1 11h-8l10-56c2.69 0 8.16-.56 10.02 1.6 1.41 1.65 3.01 12.54 3.58 15.4l7.4 39zm-183-49v18c2.36-.03 5.6.21 7.4-1.6.99-.98 1.24-2.1 1.45-3.42.43-2.66.52-9.41-1.45-11.38-1.8-1.81-5.04-1.57-7.4-1.6zm166 8l-3 23h8c-.76-5.77-2.07-18.49-5-23zm-189 83h-8c0-2.67.32-7.61-1.02-9.85-2.22-3.7-8.82-4.55-8.98 6.85v22c.01 2.04-.07 5.02.74 6.89 1.64 3.8 5.82 4.52 8.09.88 1.62-2.61 1.17-9.54 1.17-12.77h8c0 5.22.71 13.47-2.09 17.9-4.45 7.06-17.44 6.73-22.07 0-4.29-6.24-2.93-26.76-2.84-34.9.05-3.92.37-8.59 2.72-11.9 4.19-5.87 15.81-7.16 20.86-1.82 4.08 4.3 3.42 11.24 3.42 16.72zm16-19.66c14.85-1.7 17.85 6.73 18 19.66v17c-.05 3.88-.64 10.56-2.57 13.91-2.82 4.89-8.09 6.39-13.43 5.99-4.73-.35-8.54-2.56-10.69-6.9-1.49-3.02-1.3-6.71-1.31-10v-23c0-2.83-.13-6.34.89-9 1.72-4.48 4.73-6.38 9.11-7.66zm66-.04c2.34-.23 4.64-.46 7 0 12.13 1.8 11 13.48 11 22.7v17c-.09 7.71-1.42 14.39-10 16.68-1.78.22-4.17.37-6 0-13-.92-12-13.08-12-22.68v-16c.01-3.37-.12-6.8 1.15-10 1.79-4.51 4.44-6.18 8.85-7.7zM416 234h-8c0-3.43.76-10.22-3.14-11.83-5.29-2.18-6.79 5.35-6.86 8.83v22c.02 3.54.05 8.29 4.05 9.83 7.3 2.82 5.95-11.26 5.95-14.83h8c0 4.62.63 13.04-1.45 16.96-4.14 7.79-17.68 8.1-22.55.93-4.31-6.35-3.09-25.73-3-33.89.06-4.56.64-10.12 3.65-13.83 4.61-5.58 16.26-5.73 20.84 0 3.26 4.02 2.51 10.85 2.51 15.83zm-218-19c-.28 7.98-1.7 7-14 7 0 3.86-1.1 13.7 2.31 15.98 1.86 1.23 5.5 1.01 7.69 1.02v6c-2.19.01-5.83-.21-7.69 1.02-3.45 2.3-2.31 13.02-2.31 16.98 12.3 0 13.72-.98 14 7h-22v-55h22zm89 31l1-31h7v55h-8l-10-35-1 35h-8v-55l8.49 1.02 4.09 8.98 6.42 21zm64 0c2.84-6.1 5.68-23.96 6-31h12v55h-8v-36c-2.47 5.9-6.44 29.07-7 36-6.01-1.06-5.13-4.61-6.2-10l-4.8-26-1 36h-7v-55l9.41 1.02L347 224l4 22zm32-31v55h-8v-55h8zm68 55c-2.48 0-7.14.52-8.83-1.57-1.54-1.91-.9-5.56-3.6-7.41-1.99-1.37-7.09-1.02-9.57-1.02l-1 10h-8l8.2-46c1-5.16.37-8.99 6.81-8.96 1.4 0 3.25.1 4.41.98 2.19 1.68 3.18 10.96 3.78 13.98l7.8 40zm-204.78-47.96c-1.37 1.25-1.66 1.04-2.48 3.02-1.29 3.08-.75 22.25-.74 26.94.01 3.77-.44 9.88 4.1 11.34 6.36 2.05 6.88-6.39 6.85-10.34v-25c-.61-4.92-2.73-7.38-7.73-5.96zm67-.26c-3.48 2.44-3.16 4.15-3.22 8.22v23c.01 3.96-.02 12.92 6.78 10.22 3.3-1.31 3.18-5.27 3.22-8.22v-23c-.01-5.4.61-11.35-6.78-10.22zM434 230l-3 23h8c-.76-5.77-2.07-18.49-5-23zm39 67c1.27 5.33-.73 10.71-1.8 16l-7.2 33c-5.87-1.72-9.53-6.16-13-11L334 452l-24-23-24-25-56 56-13 13c-1.67 1.63-4.51 4.8-7 4.8-3.33 0-11.43-9.23-14-11.8 4.51-6.3 17.84-18.84 24-25l43-43 16-16c1.67-1.63 4.51-4.8 7-4.8 3.07 0 8.79 6.59 11 8.8l25 25c2.95 2.95 9.42 11.67 14 9.37 1.7-.85 6.4-5.77 8-7.37l15-15 51-51 17-17c1.68-1.69 6.24-5.86 6.8-8 1.1-4.16-5.4-6.81-8.8-14l48-11zm-22 68c3.41 7.36 2 20.64 2 29v186c-.01 7.3.5 10.84-8 11h-50c-8.64-.02-8.98-.36-9-9v-59-88c.02-12.13 4.62-13.62 13-22l34-32.09c5.84-5.44 10.88-12.09 18-15.91zm-169 73c1.64 6.74 1 15.9 1 23v120c-.01 6.86.8 9.86-7 10h-51c-2.3 0-6.41.38-7.98-1.6-1.52-1.92-1.02-10.63-1.02-13.4v-34-34c.02-11.81 4.61-13.94 13-21.96L260 457c6.32-6.25 13.97-15.28 22-19zm86 10v134c-.01 6.74.49 8.86-7 9h-50c-2.3 0-6.41.38-7.98-1.6-1.25-1.59-1.02-5.41-1.02-7.4v-24-108c7.1 2.08 17.41 14.42 23 20 1.9 1.9 6.27 6.96 9 6.96 2.85 0 7.97-5.93 10-7.96 5.7-5.7 16.83-18.9 24-21z"
      />
    </svg>
  );
}

export default SvgComponent;
