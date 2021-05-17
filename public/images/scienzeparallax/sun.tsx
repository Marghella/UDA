import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" {...props}>
      <path
        fill="#f5c525"
        d="M420 210l-44.226 37.857 23.464 53.288-56.312 14.841-1.981 58.198-57.181-10.973-27.04 51.568L210 380l-46.724 34.779-27.04-51.568-57.181 10.973-1.982-58.198-56.311-14.842 23.464-53.286L0 210l44.226-37.857-23.464-53.288 56.312-14.841 1.981-58.198 57.181 10.973 27.04-51.568L210 40l46.723-34.779 27.041 51.568 57.181-10.973 1.982 58.198 56.311 14.842-23.464 53.286z"
      />
      <circle cx={210} cy={210} r={140} fill="#f8a805" />
    </svg>
  );
}

export default SvgComponent;