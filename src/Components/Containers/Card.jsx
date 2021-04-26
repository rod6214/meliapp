import React from 'react-dom';
import Flex from './Flex';
import Img from '../Illustrators/Img';
import Col from '../Containers/Col';
import Row from '../Containers/Row';
import { Link } from "react-router-dom";

import Shipping from '../../assets/ic_shipping.png';

const Card = (props) => {
    return (
        <Link style={{textDecoration:'none', color:'black'}} to={props.link}>
            <Row padding={7}>
                <Col>
                    <Flex>
                        <Img inlineBlock 
                            width={180} 
                            height={180} 
                            src={props.thumbnail}
                            alt="Card Image"
                            me={7}
                            />
                        <div>
                            <p className="fs-11 mb-8 mt-1 fe d-inline-block">{`$ ${props.price}`}</p>
                            {props.free_shipping && <Img inlineBlock
                                                            src={Shipping}
                                                            alt="Shipping"
                                                            alignment="align-baseline"
                                                            ms={2}/>}
                            <p className="fs-10">{props.title}</p>
                        </div>
                        <div className="mx-auto">
                            <p className="fs-8 mb-0 mt-3 d-block">{props.state_name}</p>
                        </div>
                    </Flex>
                </Col>
            </Row>
            {props.divider && <hr className="w-95 mx-auto text-grey-dark-meli"/>}
        </Link>
    );
}

export default Card;
      