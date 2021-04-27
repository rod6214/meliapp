import React from 'react-dom';
import Content from '../../Components/Containers/Content';
import Row from '../../Components/Containers/Row';
import Col from '../../Components/Containers/Col';
import Img from '../../Components/Illustrators/Img';
import Button from '../../Components/Forms/Control/Button';
import { formatProductCondition } from '../../Utils/format';
import PriceBox from './PriceBox';


const Product = (props) => {

    return (
        <Content padding={8} rounded={4} width={75} maxWidth="1100px" backgroundColor='white'>
                <Row>
                    <Col md span={8} text_center>
                        <Img className="ratio ratio-680x680" maxHeight={680} src={props.thumbnail} alt="detail-image" />
                    </Col>
                    <Col md span={4} px={8}>
                        <div className="pb-7"><span className="fs-10">{`${formatProductCondition(props.prodCondition)} - ${props.soldProducts} Vendidos`}</span></div>
                        <h1 className="fs-11 m-0 pb-8">{props.title}</h1>
                        <PriceBox     className="pb-8"   
                                        integerFontSize={12}
                                        decimalFontSize={5}
                                        price={props.price}
                                        decimalTop="0.7em"
                                        decimalLeft="0.1em" />              
                        <Button className="btn btn-primary-meli rounded w-100 text-light fs-10" type="button">Comprar</Button>
                    </Col>
                </Row>
                <Row pt={8}>
                    <Col md>
                        <h2 className="mb-8">{props.description_title}</h2>
                        <p className="w-75 text-grey-dark-meli">{props.description}</p>
                    </Col>
                </Row>
        </Content>
    )
}

export default Product;