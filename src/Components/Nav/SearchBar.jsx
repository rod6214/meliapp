import React from 'react-dom';
import Form from '../../Components/Form/Form';
import Input from '../../Components/Form/Control/Input';
import Img from '../../Components/Media/Img';
import Icon from '../../Components/Media/Icon';
import Button from '../../Components/Form/Control/Button';

const SearchBar = (props) => (
    <Form>
        <div className="d-flex w-75 justify-content-center">
            <Img src={props.src} />
            <Input />
            <Button>
                <Icon />
            </Button>
        </div>
    </Form>
);

export default SearchBar;