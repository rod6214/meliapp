import React from 'react-dom';

const Input = (props) => (
<input 
    className="form-control-meli rounded-start" 
    type="text" 
    placeholder="Nunca dejes de buscar" 
    aria-label="Search"
    name={props.name}
    value={props.value}
     />);

export default Input;
