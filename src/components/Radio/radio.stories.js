import React from 'react';
import Radio from '.';

export default {
    title: 'UI 组件/Input/Radio',
    component: Radio
};

export const Default = () => <Radio>选项</Radio>;

export const RadioGroup = () => (
    <Radio.Group label="请选择">
        <Radio name="option">小姐姐</Radio>
        <Radio name="option">萝莉</Radio>
        <Radio name="option">御姐</Radio>
    </Radio.Group>
)