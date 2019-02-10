import React from 'react';

let contain =({data})=>data ? <div><a href="javascript:;" className="block"><img src={data.pic_url} className="width100"/></a></div> : <div></div>

export default contain;