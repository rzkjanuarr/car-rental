import React from "react";

interface Props {
    className?: string;
}

function CarReports(props: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M13.8375 2.8125H6.48752C6.00019 2.8125 5.53281 3.00609 5.18822 3.35069C4.84362 3.69529 4.65002 4.16266 4.65002 4.65V19.35C4.65002 19.8373 4.84362 20.3047 5.18822 20.6493C5.53281 20.9939 6.00019 21.1875 6.48752 21.1875H17.5125C17.9999 21.1875 18.4672 20.9939 18.8118 20.6493C19.1564 20.3047 19.35 19.8373 19.35 19.35V8.325L13.8375 2.8125Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6751 16.5938H8.32507"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6751 12.9188H8.32507"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1626 9.24377H9.24382H8.32507"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8375 2.8125V8.325H19.35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CarReports;
