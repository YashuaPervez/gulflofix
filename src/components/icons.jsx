import React from "react";

export const Search = ({ size = 10, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 487.95 487.95"
      version="1.1"
      viewBox="0 0 487.95 487.95"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        fill={color}
        d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"
      ></path>
    </svg>
  );
};

export const Bag = ({ size = 10, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 511 511"
      version="1.1"
      viewBox="0 0 511 511"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        fill={color}
        d="M445.663 469.921L431.301 110.88A15.457 15.457 0 00415.814 96H351v-.5C351 42.841 308.159 0 255.5 0S160 42.841 160 95.5v.5H95.187a15.459 15.459 0 00-15.488 14.88L65.337 469.921c-.434 10.842 3.468 21.122 10.985 28.946C83.84 506.691 93.956 511 104.806 511h301.389c10.851 0 20.966-4.309 28.484-12.133 7.516-7.825 11.418-18.104 10.984-28.946zM175 95.5c0-44.388 36.112-80.5 80.5-80.5S336 51.112 336 95.5v.5H175v-.5zm248.862 392.974c-4.663 4.853-10.938 7.526-17.667 7.526H104.806c-6.73 0-13.004-2.672-17.667-7.525-4.663-4.853-7.083-11.229-6.813-17.954L94.687 111.48c.011-.27.23-.48.5-.48H160v48.5a7.5 7.5 0 0015 0V111h161v48.5a7.5 7.5 0 0015 0V111h64.814c.269 0 .488.21.499.48l14.362 359.041c.269 6.724-2.151 13.1-6.813 17.953z"
      ></path>
    </svg>
  );
};

export const DownArrow = ({ size = 10, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 55.751 55.751"
      version="1.1"
      viewBox="0 0 55.751 55.751"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        fill={color}
        d="M31.836 43.006c.282-.281.518-.59.725-.912L54.17 20.485a5.403 5.403 0 000-7.638 5.403 5.403 0 00-7.638 0l-18.608 18.61L9.217 12.753A5.4 5.4 0 000 16.571a5.363 5.363 0 001.582 3.816l21.703 21.706c.207.323.445.631.729.913a5.367 5.367 0 003.91 1.572 5.37 5.37 0 003.912-1.572z"
      ></path>
    </svg>
  );
};
