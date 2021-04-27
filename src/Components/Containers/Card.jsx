import React from 'react-dom';
import Flex from './Flex';
import Img from '../Illustrators/Img';
import Col from '../Containers/Col';
import Row from '../Containers/Row';
import { Link } from "react-router-dom";
import PriceBox from './PriceBox';

import Shipping from '../../assets/ic_shipping.png';

const Card = (props) => {
    const shippingFlag = (props) => (props.free_shipping && <Img inlineBlock
        src={Shipping}
        alt="Shipping"
        alignment="align-baseline"
        ms={4}/>);

    return (
        <Link style={{textDecoration:'none', color:'black'}} to={props.link}>
            <Row padding={7}>
                    <Col md span={10}>
                        <Flex>
                            <Img inlineBlock 
                                width={180} 
                                height={180} 
                                src={props.thumbnail}
                                alt="Card Image"
                                me={7}/>
                            <Col>
                                <PriceBox className="mb-8 mt-1" 
                                            integerFontSize={11}
                                            decimalFontSize={8}
                                            price={props.price}
                                            decimalTop="0.3em"
                                            decimalLeft="0.1em">
                                            {shippingFlag(props)}
                                </PriceBox>
                                <p className="fs-10">{props.title}</p>     
                            </Col>
                        </Flex>
                    </Col>
                    <Col md span={2}>
                        <Col className="mx-auto">
                            <p className="fs-8 mb-0 mt-3 d-block">{props.state_name}</p>
                        </Col>
                    </Col>
            </Row>
            {props.divider && <hr className="w-95 mx-auto text-grey-dark-meli"/>}
        </Link>
    );
}

export default Card;
      