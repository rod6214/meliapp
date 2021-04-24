import React from 'react-dom';
import NavBar from '../Components/Nav/NavBar';
import NavBarContent from '../Components/Nav/NavBarContent';
import Form from '../Components/Form/Form';
import Input from '../Components/Form/Control/Input';
import Img from '../Components/Media/Img';
import Icon from '../Components/Media/Icon';
import Button from '../Components/Control/Button';

import Logo from '../assets/Logo_ML@2x.png.png';

const Searcher = () => {
    return (
    <NavBar>
        <NavBarContent>
            <Form>
                <Img src={Logo} />
                <Input />
                <Button>
                    <Icon />
                </Button>
            </Form>
        </NavBarContent>
    </NavBar>
    )
}

export default Searcher;
