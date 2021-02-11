import React from 'react';
import Avatar from '.';
import avatar from 'assets/images/avatar.jpg'

export default {
    title: 'UI 组件/Avatar',
    component: Avatar,
};

export const Default = () => {
    return <Avatar src={avatar}/>;
}

export const Sizes = () => {
    return <div className="row-elements">
        <Avatar src={avatar} size="48px"/>
        <Avatar src={avatar} size="56px"/>
        <Avatar src={avatar} size="64px"/>
        <Avatar src={avatar} size="72px"/>
    </div>;
}

export const WithStatus = () => {
    return <div className="row-elements">
        <Avatar src={avatar} status="online"/>
        <Avatar src={avatar} status="offline"/>
        <Avatar src={avatar} status="offline" size="72px" statusIconSize="12px"/>
    </div>;
}
