import React from 'react';

let contain =({title})=>title ? <div className="textCenter">{title}<span className="line"></span></div>: <div></div>
export default contain;