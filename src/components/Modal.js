import React from 'react';

function Modal({children}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        Modal is here
        {children}
      </div>
    </div>
  );
}

export default Modal;