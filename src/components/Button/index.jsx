import React from 'react';

import './styles.css';

function Button({children, onClick, props, isText, isBig}) {
  return  ( 
    <button 
      {...props}
      onClick={onClick}
      
      id={!isText?'button':'textButton'} 
      className={isBig?"btn-big":'btn-normal'}  
      
      >
       {children}
    </button>
  )
}

export default Button;