import React from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style';
import Navbar from 'components/Navbar';
import MessageList from 'components/MessageList';
import Conversation from 'components/Conversation';
import Profile from 'components/Profile';

function ChatApp({children, ...rest}) {
    return (
        <StyledChatApp {...rest}>
            <Nav>
                <Navbar />
            </Nav>
            <Sidebar>
                <MessageList />
            </Sidebar>
            <Content>
                <Conversation/>
            </Content>
            <Drawer>
                <Profile/>
            </Drawer>
        </StyledChatApp>
    );
}

ChatApp.propTypes = {
    children: PropTypes.any
};

export default ChatApp;

