import React from 'react-dom';
import Form from '../Forms/Form';
import Input from '../Forms/Control/Input';
import Img from '../Illustrations/Img';
import Icon from '../Illustrations/Icon';
import Button from '../Forms/Control/Button';

const SearchBar = (props) => (
    <Form>
        <div className="d-flex w-75 justify-content-center">
            <Img me={6} src={props.src} />
            <Input />
            <Button>
                <Icon />
            </Button>
        </div>
    </Form>
);

export default SearchBar;