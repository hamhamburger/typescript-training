import React from 'react';
export type ButtonProps = {
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
};

export const Button = ({ children, onClick }:ButtonProps): JSX.Element => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};