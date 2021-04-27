import React from 'react-dom';
import { formatPriceARS } from '../../Utils/format';

const Product = (props) => {
    const {integerPart, decimalPart} = formatPriceARS(props.price);

    const intergerPartClass = `fs-${props.integerFontSize}`;
    const decimalPartClass = `fs-${props.decimalFontSize}`;
    // Para SEO se utiliza una etiqueta <meta/> dentro de este componente
    return (
        <div className={props.className} style={{position: 'relative'}}>
            <meta itemProp="price" content={props.price}/>
            <span className={intergerPartClass} >{`${integerPart}`}</span>
            <span className={decimalPartClass} style={{
                top: props.decimalTop, 
                marginLeft: props.decimalLeft, 
                position: 'absolute'}}>{decimalPart}</span>
            {props.children}
        </div>
    )
}

export default Product;