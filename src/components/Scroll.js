import React from 'react';
const scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'5px solidblack',height:'800px'}}>
            {props.children}
        </div>
    )
}
export default scroll;