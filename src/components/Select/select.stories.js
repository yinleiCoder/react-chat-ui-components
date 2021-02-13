import Option from 'components/Option';
import React from 'react';
import Select from '.';

export default {
    title: 'UI 组件/Input/Select',
    component: Select
};

export const Default = () => (
    <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
    </Select>
);
export const FormSelect = () => (
    <Select label="城市选择"  type='form' >
        <Option>绵阳市</Option>
        <Option>眉山市</Option>
    </Select>
);
