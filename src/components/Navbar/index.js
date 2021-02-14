import React from 'react'
import PropTypes from 'prop-types'
import StyledNavbar, {StyledMenuItem, MenuIcon, MenuItems,} from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from 'assets/images/avatar.jpg';
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons';
import {Link, matchPath, useLocation} from 'react-router-dom'

import 'styled-components/macro';

function Navbar({ ...rest}) {
    return (
        <StyledNavbar {...rest}>
            <Avatar src={profileImage} status="online"/>
            <MenuItems>
                <MenuItem to='/' showBadge  icon={faCommentDots}/>
                <MenuItem to='/contacts' icon={faUsers}/>
                <MenuItem to='/files' icon={faFolder}/>
                <MenuItem to='/notes' icon={faStickyNote}/>
                <MenuItem  icon={faEllipsisH}/>
                <MenuItem to='/settings' icon={faCog} css={`align-self: end`}/>
            </MenuItems>
        </StyledNavbar>
    );
}

function MenuItem({to, icon, showBadge, ...rest}) {
    const loc = useLocation();
    const active = !!matchPath(loc.pathname, {
        path: to, 
        exact: to === '/',
    }); //!!是转换为bool
    return (
        <StyledMenuItem active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}/>
                </Badge>
            </Link>
        </StyledMenuItem>
    )
}

Navbar.propTypes = {
};

export default Navbar;
export {MenuItem, };
