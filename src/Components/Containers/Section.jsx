import React from 'react-dom';

const Section = (props) => {
    let sectionClass = 'container-fluid';
    if (Number.isInteger(props.width))
        sectionClass += ` w-${props.width}`;
    return (
    <div className={sectionClass}>
        {props.children}
    </div>
    );
}

export default Section;
