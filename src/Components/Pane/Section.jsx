import React from 'react-dom';

const Section = (props) => {
    return (
    <div className="container-fluid">
        <div className="d-flex justify-content-center">
            {props.children}
        </div>
    </div>
    );
}

export default Section;
