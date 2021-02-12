import React from 'react';
import MessageCard from '.';

import face1 from 'assets/images/avatar.jpg';

export default {
    title: 'UI 组件/MessageCard',
    component: MessageCard
};

export const Default = () => (
    <MessageCard 
        avatarSrc={face1}
        name="尹磊"
        avatarStatus="online"
        statusText="在线"
        time="2小时前"
        message="你要喜欢有结果的树。"
        unreadCount={2}
        replied
    />
);
export const Active = () => (
    <MessageCard 
        active
        avatarSrc={face1}
        name="尹磊"
        avatarStatus="online"
        statusText="在线"
        time="2小时前"
        message="你要喜欢有结果的树。"
        unreadCount={2}
    />
);
export const Replied = () => (
    <MessageCard 
        active
        avatarSrc={face1}
        name="尹磊"
        avatarStatus="online"
        statusText="在线"
        time="2小时前"
        message="你要喜欢有结果的树。"
        unreadCount={2}
        replied
    />
);
