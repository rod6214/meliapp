import React from 'react-dom';
// import { useState } from 'react'

const Section = (props) => {
    return (
    <div className="container-fluid">
        {props.children}
        {/* <div className="d-flex justify-content-center">
            
        </div> */}
    </div>
    );
}

export default Section;
