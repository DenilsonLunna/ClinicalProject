import React from 'react';

import './styles.css';

function Button({children, props, isText, isBig}) {
  return  ( 
    <button 
      {...props}
      id={!isText?'button':'textButton'} 
      className={isBig?"btn-big":'btn-normal'}  
      >
       {children}
    </button>
  )
}

export default Button;