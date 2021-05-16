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
        fill= "#39bbe4"
        d="M0 1v670h670V1H0zm133 95h-20c0-5 .31-12.52-2.3-16.9-3.68-6.16-13.92-7.47-18.25.92C90.55 83.7 91 88.9 91 93v24c2.66-3.2 4.29-5.5 8-7.64 8.94-5.14 23.12-2.61 29.45 5.66 5.19 6.79 6.51 18.6 6.55 26.98.06 13.33 1.4 33.73-9.18 43.53-9.02 8.35-28.9 9.8-39.82 4.94-3.67-1.63-7.16-4.46-9.79-7.48-5.69-6.54-7.2-15.6-7.21-23.99v-57c0-12.05-1.25-23.24 5.47-34C79.65 59.71 88.53 56.12 98 56c10.26-.12 20.18-.28 27.67 8.09C132.6 71.84 133 86.04 133 96zm90 17h-9c-1.92-10.47-2.14-10-13-10l-1 10h-8l10-56c2.7 0 8.16-.56 10.02 1.6 1.66 1.93 3.02 12.36 3.59 15.4l7.39 39zm30-36h-8c0-3.07.48-8.27-1.6-10.68-2.76-3.2-8.22-2.65-8.4 6.68v22c0 1.98-.11 5.14.6 6.95 1.67 4.24 6.08 5.41 8.42.94 1.37-2.62.98-8.77.98-11.89h8c0 5.2.65 12.44-2.09 16.96-4.55 7.52-17.04 7.48-21.92.83-4.52-6.16-3.09-27.54-2.99-35.79.06-4.44.41-8.33 3.42-11.89 4.38-5.19 15.5-5.93 20.28-.88 3.98 4.2 3.3 11.38 3.3 16.77zm27 36c6.1.36 6.8.93 7 7l-18-3c-1.88-5.73-4.15-4.24-7.35-8.21-2.45-3.03-2.6-6.09-2.65-9.79V73c.01-4.39-.21-8.19 2.65-11.89 4.18-5.41 16.28-5.85 20.96-.88 3.64 3.86 4.33 11.64 4.39 16.77.08 7.44.75 23.73-2.45 29.96-1.14 2.22-2.99 4.1-4.55 6.04zm21-56v37c.01 3.46-.07 12.38 5.57 11.74 3.92-.44 4.37-5.77 4.43-8.74V57h8v42c-.05 4.19-.35 8.31-3.56 11.43-5.36 5.23-17.23 4.05-21-2.52-2.36-4.12-2.43-9.31-2.44-13.91V57h9zm53 56c-9.05-.01-9.59.48-11-10h-11l-1 10h-9l8.58-44c1.13-6.27.95-14.46 10.19-11.71 3.94 1.17 4.31 10.13 5.03 13.71l8.2 42zm21-19v19h-9V57c6.48 0 18.87-1.3 23.58 3.42 4.9 4.89 4.9 25.27 0 30.16C385.82 94.35 379.9 94 375 94zm32-37v40c.06 3.28.53 8.37 5 8.37s4.94-5.09 5-8.37V57h8v41c-.02 4.45.05 8.33-3.28 11.78-5.41 5.61-17.52 5.19-21.58-1.82-2.16-3.72-2.13-8.8-2.14-12.96V57h9zm33 0v49h11v7h-20V57h9zm24 0v56h-8V57h8zm30 0v7h-8v49h-9V64h-8v-7h25zm20 0l2.8 16 7.2 40h-9l-1-10-9.69 1.02-3.48 7.41L493 113l10-56h11zm-244.49 8.02c-1.19 1.37-1.32 1.07-1.94 3.04L267 95c.01 3.77-.44 9.88 4.1 11.34 6.36 2.05 6.88-6.39 6.9-10.34V73c-.08-5.93-1.36-10.78-8.49-7.98zM375 64v23c2.36-.03 5.6.21 7.4-1.6 2.41-2.4 2.44-17.27 0-19.66-1.85-1.82-5-1.68-7.4-1.74zm-169 9l-3 23h8c-.45-5.52-1.9-18.86-5-23zm131 0l-3 23h8c-.74-5.56-2.42-18.56-5-23zm171 0l-4 23h8c-.11-5.24-1.9-18.44-4-23zM98.02 124.65c-6.71 2.97-6.99 6.61-7.02 13.35l.57 30c1.78 6.14 8.6 8.33 14.39 6.49 6.02-1.91 6.97-9.09 7.04-14.49v-19c-.02-10.36-2.35-18.87-14.98-16.35zM254 152h-8c-.04-2.92.23-7.3-3.14-8.6-3.2-1.23-6.67 2.1-5.53 6.6 2.21 8.66 16.7 13.04 17.58 27 .25 3.99-.47 8.71-3.33 11.72-3.92 4.15-15.09 4.59-19.36.85-4.74-4.16-4.22-10.88-4.22-16.57h8c.01 3.39-.36 8 2.43 10.48 3.67 3.26 8.41-.21 7.16-6.48-2.16-10.88-20.71-16.07-16.91-32 2.84-11.91 16.9-11.37 22.04-6.57 3.77 3.5 3.28 8.89 3.28 13.57zm-39-16v7h-13v17h9v7h-9v18h13v7h-22v-56h22zm67 0v7h-13v17h9v7h-9v18h13v7h-22v-56h22zm24 30l9 26-8.35-.99-3.98-8.01-5.67-17-1 26h-8v-56c5.97 0 17.15-1.18 21.78 2.65 4.94 4.09 5.81 18.09 2.37 23.24-1.73 2.58-3.39 3.16-6.15 4.11zm20-30l6 39c3.71-6.93 6.34-29.9 8-39h8l-10 56c-2.64 0-8.05.6-9.84-1.57-1.45-1.75-3.41-13.53-3.91-16.43L317 136h9zm35 0v56h-9v-56h9zm30 0c-.05 15.38-11.47 33.53-15 49h14v7h-24c.05-15.22 11.41-33.67 15-49h-13v-7h23zm14 0v56h-9v-56h9zm-109 7v18c2.36-.03 5.6.21 7.4-1.6.99-.98 1.24-2.1 1.45-3.42.43-2.66.52-9.41-1.45-11.38-1.8-1.81-5.04-1.57-7.4-1.6zm-61 90h-8c-.04-3.67-.68-12.91-6.87-10.6-4.46 1.66-4.12 8.78-4.08 12.6v21c.35 2.6 1.37 5.77 4.05 6.83 3.34 1.32 5.54-2.11 6.33-4.83 1.45-5 .63-8.38-4.43-10v-7h13v30h-6v-6c-1.53 1.76-2.99 3.69-5.09 4.83-6.19 3.33-13.26-.47-15.26-6.83-.9-2.87-.65-8.79-.65-12v-22c.21-17.35 16.95-17 22.61-12.15 4.31 3.7 4.37 10.94 4.39 16.15zm122 1h-8c-.01-3.11.29-7.18-1.74-9.76-2.84-3.63-8.09-3.4-8.26 5.76v23c0 1.94-.11 5.19.6 6.94 1.59 3.94 5.83 4.59 8.09.83 1.71-2.86 1.31-9.36 1.31-12.77h8c0 5.91.39 16.1-4.39 20.35-4.96 4.42-15.63 3.43-19.76-1.68-2.61-3.23-2.8-6.72-2.85-10.67v-26c.02-3.67-.05-6.71 2.01-9.96 4.29-6.77 16.9-8.54 21.98-1.7 2.83 3.8 3 11.06 3.01 15.66zm16-19.67c2.23-.23 3.74-.4 6 0 11.33 1.99 11 10.66 11 19.67v13c0 5.07.75 13.74-1.85 17.98-3.2 5.21-7.44 6.24-13.15 5.98-5.24-.24-9.06-1.96-11.35-6.96-1.68-3.68-1.64-8.05-1.65-12v-19c.01-9.22.93-15.94 11-18.67zM437 231h-7c-.29-3.05-.81-7.49-4.13-8.83-3.44-1.4-6.6 2.69-5.25 6.83 1.05 3.22 5.92 7.46 8.34 10 6.38 6.68 10.86 13.37 8.51 23-2.79 11.41-17.43 10.41-22.13 6.35-4.09-3.53-4.29-11.3-4.34-16.35h9c0 2.5-.33 7.66 1.02 9.69 1.92 2.86 6.86 2.87 7.74-2.71.89-5.69-3.15-9.31-6.76-12.98-5.62-5.7-9.75-8.51-9.98-17-.1-3.28-.22-7.09 1.72-9.89 4.11-5.95 15.66-6.88 20.61-1.55 3.25 3.49 2.65 9.01 2.65 13.44zm-235-16v56h-9v-56h9zm47 0v56h-8v-56h8zm28 0v7h-13v17h9v7h-9v18h13v7h-22v-56h22zm24 32l1-32h7v56l-7.16-1.6-3.86-10.4-6.98-23-1 35h-7v-56l7.49 1.02 3.84 7.98 6.67 23zm23-32v56h-9v-56h9zm138 0l10 56c-8.33-.03-9.11-.02-10-11h-11c-1.41 10.66-.83 10.96-10 11l7.39-39c.57-3.04 1.93-13.47 3.59-15.4 1.86-2.16 7.32-1.6 10.02-1.6zm24 0c1.4 6.15 7.44 26.88 11 31v-31h7v56l-7.3-.99-4.12-10.01-7.58-24-1 35h-7v-56h9zm32 0v56h-9v-56h9zm30 0v7h-8v49h-9v-49h-8v-7h25zm20 0l7.2 40 2.8 16h-9c-.29-2.15-.83-7-2.01-8.69-2.09-2.98-7.89-2.98-9.98 0-1.18 1.69-1.72 6.54-2.01 8.69h-8l10-56h11zm33 30l9 26-8.49-1.02L598 263l-6-18-1 26h-9v-56c5.79 0 18.45-1.17 22.78 2.51 5.19 4.42 5.69 19.07 1.52 24.27-1.66 2.07-2.95 2.4-5.3 3.22zm22-30v56h-9v-56h9zm-247.95 6.84c-4.41 2.49-4.02 4.42-4.05 9.16v24c.03 2.04-.03 4.82 1.17 6.57 1.7 2.45 8.63 4.99 8.83-5.57v-25c-.01-5.1.65-9.6-5.95-9.16zM591 222v18c2.35-.03 5.48.23 7.33-1.6 2.26-2.38 2.44-12.44 0-14.8-1.73-1.81-4.97-1.57-7.33-1.6zm-135 8l-4 23h9l-5-23zm105 1l-3 22h8l-3-22h-2zm-153 7v7h-13v-7h13zm37 84c-.01 12.22-7.28 53.23-9.58 68l-13.84 90-7.58 49h-44l-2.09 24-.91 10h16c-4.64 6.48-21.38 22.38-28 29-2.21 2.21-7.93 8.8-11 8.8-3.07 0-8.79-6.59-11-8.8-6.62-6.62-23.36-22.52-28-29h16l-1.58-23c-.29-2.25-.32-7-1.44-8.69-1.58-2.36-4.46-2.26-6.98-2.31h-36l-5.58-34-10.01-61L241 323l23-1h181zm-196 8l8 41c9.85 0 16.56-1.1 26-4.02 6.9-2.14 14.87-5.79 22-5.97 12.44-.3 21.69 4.79 33 8.94 10.35 3.79 20.96 6.33 32 6.96 3.67.21 5.53-.34 9-.76 20.32-2.43 33.5-10.7 43-11.84 3.33-.4 6.68.42 10 .69l6-35H249zm94 68l-17.34 27c-10 15.3-20.96 30.98-13.19 50 12.06 29.51 62.78 24.06 65.44-9 1.29-16.1-4.72-24.16-12.86-37L345 398h-2z"
      />
    </svg>
  );
}

export default SvgComponent;
