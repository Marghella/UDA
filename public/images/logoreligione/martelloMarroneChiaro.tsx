import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.08in"
      height="8.14in"
      viewBox="0 0 908 814"
      {...props}
    >
      <path
        d="M577 631v34l-64 9h-68l-15 1h-73l-15-1h-81-161c-1.83-17.24-23.46-24.27-35.82-12.67C55.42 669.55 57 681.16 57 692h521v21l-1 15v26l42-1V632l-42-1zm65 1v121c13.74 0 51.95-.98 63 1V631c-11.05 1.98-49.26 1-63 1z"
      />
    </svg>
  );
}

export default SvgComponent;
