import React from 'react'
import PropTypes from 'prop-types'
import StyledNavbar, {StyledMenuItem, MenuIcon, MenuItems,} from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from 'assets/images/avatar.jpg';
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons';

import 'styled-components/macro';

function Navbar({ ...rest}) {
    return (
        <StyledNavbar {...rest}>
            <Avatar src={profileImage} status="online"/>
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots}/>
                <MenuItem icon={faUsers}/>
                <MenuItem icon={faFolder}/>
                <MenuItem icon={faStickyNote}/>
                <MenuItem icon={faEllipsisH}/>
                <MenuItem icon={faCog} css={`align-self: end`}/>
            </MenuItems>
        </StyledNavbar>
    );
}

function MenuItem({icon, active, showBadge, ...rest}) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}/>
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

Navbar.propTypes = {
};

export default Navbar;
export {MenuItem, };
