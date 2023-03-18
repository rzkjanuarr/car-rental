import React from "react";

interface Props {
  className: string;
}

function ArrowDown(props: Props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 9L12 15L18 9"
        stroke="#656575"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDown;
