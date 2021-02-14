import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, { Conversations, MyChatBubble } from './style';
import TitleBar from 'components/TitleBar';
import ChatBubble from 'components/ChatBubble';
import Emoji from 'components/Emoji';
import Footer from 'components/Footer';
import VoiceMessage from 'components/VoiceMessage';

function Conversation({onAvatarClick, onVideoClicked, children, ...rest}) {
    return (
        <StyledConversation {...rest}>
            <TitleBar onVideoClicked={onVideoClicked} onAvatarClick={onAvatarClick}/>
            <Conversations>
                <ChatBubble time="昨天 晚上00:00">Hi 尹哥，新年快乐啊!</ChatBubble>
                <MyChatBubble time="昨天 晚上00:01">
                    hello 明哥，祝您牛气冲天、新年快乐！
                </MyChatBubble>
                <MyChatBubble time="昨天 晚上00:02">
                    <Emoji label="gift">🎁</Emoji>
                </MyChatBubble>
                <ChatBubble time="昨天 晚上00:10">
                    <VoiceMessage time="00:10"/>
                </ChatBubble>;
            </Conversations>
            <Footer/>
        </StyledConversation>
    );
}

Conversation.propTypes = {
    children: PropTypes.any
};

export default Conversation;

