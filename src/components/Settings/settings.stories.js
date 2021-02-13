import React from 'react';
import Settings, { SettingsItem } from '.';

export default {
    title: '页面组件/Settings',
    component: Settings
};

export const Default = () => <Settings/>;

export const WithoutDescription = () => (
    <SettingsItem label="没有描述的设置项"/>
)

export const WithDescription = () => (
    <SettingsItem label="有描述的设置项" description='描述哇哈哈哈'/>
)

export const WithMenu = () => (
    <SettingsItem label="有子菜单" type="menu"/>
)