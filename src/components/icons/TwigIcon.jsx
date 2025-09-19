import React from 'react';

const TwigIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    className={className}
    fill="currentColor" 
  >
    <path d="M15.63 11.758c.205.21.205.55 0 .76l-1.938 2.02c-.205.21-.536.21-.74 0l-4.782-4.997a.53.53 0 010-.759l4.782-4.998c.204-.21.535-.21.74 0l1.938 2.02c.205.21.205.55 0 .76L11.54 9.64l4.09 2.118zM.37.242c-.204-.21-.204-.55 0-.76L2.308-1.54c.205-.21.536-.21.74 0l4.782 4.998c.205.21.205.55 0 .76L3.05 9.215c-.204.21-.535.21-.74 0L.37 7.195c-.205-.21-.205-.55 0-.76l3.09-3.21-3.09-3.21z"></path>
  </svg>
);

export default TwigIcon;