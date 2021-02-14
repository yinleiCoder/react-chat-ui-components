import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Action, Actions, Minimize, Self, VideoCallAlert } from './style';
import videoCaller from 'assets/images/photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faMicrophone, faPhoneSlash, faVideo, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import face from 'assets/images/zhangming.jpg'
import Avatar from 'components/Avatar';
import Paragraph from 'components/Paragraph';
import 'styled-components/macro';

function VideoCall({children,onHangOffClicked, ...rest}) {
    const [fullScreen, setFullScreen] = useState(true)
    if(!fullScreen){
        return (
            <VideoCallAlert>
                <Avatar 
                    src={face}
                    css={`
                        grid-area: avatar;
                    `}
                />
                <Paragraph 
                    size='medium'
                    css={`
                        grid-area: info;
                    `}
                >
                    正在跟 张明进行视频通话
                </Paragraph>
                <Paragraph 
                    css={`
                       grid-area: action;
                       cursor: pointer;
                   `}
                    type='secondary'
                    onClick={() => setFullScreen(true)}
                >
                    点击切换全屏
                </Paragraph>
                <FontAwesomeIcon 
                    icon={faVideo}
                    css={`
                        grid-area: icon;
                        font-size: 20px;
                        justify-self: end;
                        opacity: 0.3;
                    `}
                />
            </VideoCallAlert>
        )
    }
    return (
        <StyledVideoCall src={videoCaller} {...rest}>
            <Minimize shape='rect' onClick={() => setFullScreen(false)}>
                <FontAwesomeIcon icon={faCompressAlt} />
            </Minimize>
            <Actions>
                <Action>
                    <FontAwesomeIcon icon={faMicrophone} />
                </Action>
                <Action type="hangoff">
                    <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked} />
                </Action>
                <Action>
                    <FontAwesomeIcon icon={faVolumeMute} />
                </Action>
            </Actions>
            <Self src={face} size='140px'/>
        </StyledVideoCall>
    );
}

VideoCall.propTypes = {
    children: PropTypes.any
};

export default VideoCall;

