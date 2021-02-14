import Button from 'components/Button';
import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import React from 'react';
import DropDown from '.';
import { DropdownItem } from './style';

export default {
    title: 'UI 组件/DropDown',
    component: DropDown
};

const dropdownContent = (
    <> 
        <DropdownItem>
            <Paragraph>个人资料</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph>关闭会话</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph type='danger'>屏蔽此人</Paragraph>
        </DropdownItem>
    </>
)
export const Default = () => (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
        <Paragraph>点击右侧按钮</Paragraph>
        <DropDown align='left' content={dropdownContent}>
            <Button>
                啊
            </Button>
        </DropDown>
    </div>
);
