import React from 'react'
import PropTypes from 'prop-types'
import StyledSettings, { SettingsItemControl, StyledSettingsItem, StyledSettingsGroup } from './style';
import Paragraph from 'components/Paragraph';
import Switch from 'components/Switch';
import Icon from 'components/Icon';
import Seperator from 'components/Seperator';
import {ReactComponent as ArrowMenuRight} from 'assets/icon/arrowRight.svg';
import { Link } from 'react-router-dom';
import 'styled-components/macro'
import { animated, useSpring } from 'react-spring';
function Settings({children, ...rest}) {
    const animeProps = useSpring({
        transform: 'translate3d(0px, 0px, 0px)',
        opacity: 1,
        from: {transform: 'translate3d(100px, 0px, 0px)', opacity: 0},
        config: {
            tension: 140,
        },
        delay: 300,
    });
    return (
        <StyledSettings {...rest}>
            <animated.div style={animeProps}>
                <SettingsGroup groupName="隐私设置">
                    <SettingsItem label="添加好友时需要验证"/>
                    <SettingsItem label="推荐通讯录好友" description="上传的通讯录只是用来匹配好友列表的"/>
                </SettingsGroup>
                <SettingsGroup groupName="通知设置">
                    <SettingsItem label="声音"/>
                    <Link
                        to={`/settings/blocked`}
                        css={`
                            text-decoration: none;
                            color: inherit;
                        `}
                    >
                        <SettingsItem label="查看已静音的好友列表" type="menu"/>
                    </Link>
                </SettingsGroup>
            </animated.div>
        </StyledSettings>
    );
}

function SettingsGroup({groupName, children, ...rest}) {
    return (
        <StyledSettingsGroup>
                <Paragraph size="xxlarge" style={{paddingBottom: '24px'}}>
                    {groupName}
                </Paragraph>
                {children}
        </StyledSettingsGroup>
    )
}

export function SettingsItem({
    type='switch',
    label,
    description,
    children,
    ...rest
}){
    return (
        <StyledSettingsItem {...rest}>
            <SettingsItemControl>
                <Paragraph size="large">{label}</Paragraph>
                {type === 'switch' && <Switch/>}
                {type === 'menu' && <Icon icon={ArrowMenuRight}/>}
            </SettingsItemControl>
            {description && (
                <Paragraph type="secondary" style={{margin: '4px 0'}}>
                    {description}
                </Paragraph>
            )}
            <Seperator style={{marginTop: '8px', marginBottom: '20px'}}/>
        </StyledSettingsItem>
    )
}

Settings.propTypes = {
    children: PropTypes.any,
    type:PropTypes.string,    
    label:PropTypes.string,
    description:PropTypes.string,
};

export default Settings;

