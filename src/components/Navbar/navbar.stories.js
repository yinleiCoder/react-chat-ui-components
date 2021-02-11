import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Navbar, { MenuItem } from '.';
import 'styled-components/macro';

export default {
    title: '页面组件/Navbar',
    component: Navbar
};

export const Default = () => <Navbar/>;

export const Menu = () => {
    return <div css={`background-color: ${({theme}) => theme.darkPurple}; width:100px;`}>
            <MenuItem showBadge active icon={faCommentDots}/>
        </div>
}
