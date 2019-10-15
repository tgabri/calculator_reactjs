import React from 'react';

function ClearButton(props) {
  return (
    <div className='btn-wrapper' onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export default ClearButton;
