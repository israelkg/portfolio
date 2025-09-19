import React from "react";

const N8nIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="16" r="3" />
    <line x1="11" y1="11" x2="13" y2="13" />
  </svg>
);

export default N8nIcon;
