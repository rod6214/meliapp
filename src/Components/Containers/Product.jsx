import React from 'react-dom';
import Content from '../../Components/Containers/Content';
import Flex from '../../Components/Containers/Flex';
import Img from '../../Components/Illustrators/Img';
import Button from '../../Components/Forms/Control/Button';

const Product = (props) => {
    return (
        <Content padding={8} rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
            <Flex alignment="justify-content-between">
                <Img width={680} src={props.thumbnail} alt="detail-image" />
                <div className="p-0 m-0">
                    <div className="pb-7"><span className="fs-10">{`${props.prodCondition} - ${props.soldProducts} vendidos`}</span></div>
                    <h1 className="fs-11 m-0 pb-8">{props.title}</h1>
                    <div className="pb-8">
                        <meta itemProp="price" content="1980"/>
                        <span className="fs-12">{`${props.currency} ${props.price}`}</span>
                    </div>
                    
                    <Button className="btn btn-primary-meli rounded w-100 text-light fs-11" type="button">Comprar</Button>
                </div>
            </Flex>
            <div>
                <h2 className="pb-8">{props.description_title}</h2>
                <p className="w-75 text-grey-dark-meli">{props.description}</p>
            </div>
        </Content>
    )
}

export default Product;