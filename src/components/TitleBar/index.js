import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Actions, Title } from './style';
import Avatar from 'components/Avatar';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import Icon from 'components/Icon';
import face from 'assets/images/zhangming.jpg'
import {ReactComponent as Call} from 'assets/icon/call.svg'
import {ReactComponent as Camera} from 'assets/icon/camera.svg'
import {ReactComponent as Options} from 'assets/icon/options.svg'
function TitleBar({children, ...rest}) {
    return (
        <StyledTitleBar {...rest}>
            <Avatar status="offline" src={face}/>
            <Title>
                <Paragraph size="large">张明</Paragraph>
                <Paragraph type="secondary">
                    <Text>离线</Text>
                    <Text>* 最后阅读: 3小时前</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call}/>
                <Icon opacity={0.3} icon={Camera}/>
                <Icon opacity={0.3} icon={Options}/>
            </Actions>
        </StyledTitleBar>
    );
}

TitleBar.propTypes = {
    children: PropTypes.any
};

export default TitleBar;

