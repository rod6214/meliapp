import React from 'react-dom';
import Form from '../Forms/Form';
import Input from '../Forms/Control/Input';
import Img from '../Illustrators/Img';
import Icon from '../Illustrators/Icon';
import Button from '../Forms/Control/Button';
import Flex from '../Containers/Flex';
import { Link } from "react-router-dom";

const SearchBar = (props) => {

    return (
        <Form action="/items" width={100} alignment="justify-content-center" flex>
            <Flex width={75} maxWidth={props.maxWidth} alignment="justify-content-center">
                <Link className="me-6" to="/">
                    <Img src={props.src} alt="logo" width={60}/>
                </Link>
                <Input name="search" />
                <Button type="submit" search>
                    <Icon />
                </Button>
            </Flex>
        </Form>
    );
}

export default SearchBar;
