import React from 'react-dom';
import Form from '../Forms/Form';
import Input from '../Forms/Control/Input';
import Img from '../Illustrators/Img';
import Icon from '../Illustrators/Icon';
import Button from '../Forms/Control/Button';
import Flex from '../Containers/Flex';

const SearchBar = (props) => (
    <Form>
        <Flex width={75}>
            <Img me={6} src={props.src} alt="logo" width={60}/>
            <Input />
            <Button>
                <Icon />
            </Button>
        </Flex>
    </Form>
);

export default SearchBar;