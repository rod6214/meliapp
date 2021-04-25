import React from 'react-dom';

const Navigator = (props) => {

    return (
        <div className="bg-grey-meli pb-7 pt-7 text-grey-dark-meli">
            {props?.links?.map((link, index) => 
            {
                let listClass = 'd-inline fs-8';
                const lastTagLink = !(index < props.links.length - 1);

                if (lastTagLink)
                    listClass += ' fw-bold';
                
                return (
                    <p  key={`${props.tag}${index}`} 
                         className={listClass}>
                    {`${link.name}`}
                    
                    {!lastTagLink && <span className="me-1 ms-1">&gt;</span>}
                     </p>  
                     
                )
            })}
        </div>
    );
}

export default Navigator;
