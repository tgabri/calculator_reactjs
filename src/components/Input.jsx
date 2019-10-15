import React from 'react';

const outputFormat = str => {
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

function Input({ input, result }) {
  return (
    <>
      <div className='input'>{input}</div>
      <div className='result'>{outputFormat(result)}</div>
    </>
  );
}

export default Input;
