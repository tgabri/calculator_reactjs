import React from 'react';

const isOperator = value => {
  return !isNaN(value) || value === '.' || value === '±' || value === '%';
};
const isEql = value => {
  return value === '=';
};

function Button(props) {
  const value = props.children;
  return (
    <div
      className={
        isEql(value)
          ? 'btn-eql'
          : `btn-wrapper ${isOperator(value) ? null : 'math-symbol'}`
      }
      onClick={() => props.handleInput(value)}
    >
      {value}
    </div>
  );
}

export default Button;
