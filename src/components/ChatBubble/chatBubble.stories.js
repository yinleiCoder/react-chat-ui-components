import Emoji from 'components/Emoji';
import VoiceMessage from 'components/VoiceMessage';
import React from 'react';
import ChatBubble from '.';

export default {
    title: 'UI 组件/ChatBubble',
    component: ChatBubble
};

export const FromOthers = () => <ChatBubble time="昨天 下午12:00">这是其他人发送的聊天消息</ChatBubble>;

export const Mine = () => <ChatBubble type="mine" time="昨天 下午12:00">这是我发送的聊天消息<Emoji label="smile">😀</Emoji></ChatBubble>;

export const VoiceMessageType = () => <ChatBubble time="昨天 下午12:00">
    <VoiceMessage time="12:00"/>

</ChatBubble>;
export const VoiceMessageTypeMine = () => <ChatBubble type="mine" time="昨天 下午12:00">
    <VoiceMessage type="mine" time="12:00"/>
</ChatBubble>;
