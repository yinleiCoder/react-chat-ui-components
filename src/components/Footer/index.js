import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledFooter, { IconContainer, StyledPopoverContent } from './style';
import Input from 'components/Input';
import Icon from 'components/Icon';

import { ReactComponent as ClipIcon } from 'assets/icon/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icon/smile.svg'
import { ReactComponent as MicrophoneIcon } from 'assets/icon/microphone.svg'
import { ReactComponent as PlaneIcon } from 'assets/icon/plane.svg'
import { ReactComponent as OptionsIcon } from 'assets/icon/options.svg'

import Button from 'components/Button';
import Emoji from 'components/Emoji';
import Popover from 'components/Popover';
import { useTheme } from 'styled-components';

function Footer({animeProps, style, children, ...rest}) {
    const [emojiIconActive, setEmojiIconActive] = useState(false);
    const theme = useTheme();
    return (
        <StyledFooter style={{...style, ...animeProps}} {...rest}>
            <Input 
                placeholder="输入想和对方说的话"
                prefix={<Icon icon={ClipIcon}/>}
                suffix={
                    <IconContainer>
                        <Popover content={<PopoverContent/>} offset={{x: '-25%'}} onVisible={() => setEmojiIconActive(true) } onHide={() => setEmojiIconActive(false)}>
                            <Icon icon={SmileIcon} color={emojiIconActive? theme.primaryColor: theme.gray3}/>
                        </Popover>
                        <Icon icon={MicrophoneIcon} />
                        <Button size="52px">
                            <Icon icon={PlaneIcon} color="white" style={{transform: 'translateX(-2px)'}}/>
                        </Button>
                    </IconContainer>
                }
            />
        </StyledFooter>
    );
}

function PopoverContent(props) {
    return (
        <StyledPopoverContent>
            <Emoji label="smile">😀</Emoji>
            <Emoji label="se">😍</Emoji>
            <Emoji label="tiaopi">😜</Emoji>
            <Icon icon={OptionsIcon} style={{marginLeft: '24px'}}/>
        </StyledPopoverContent>
    )
}

Footer.propTypes = {
    children: PropTypes.any
};

export default Footer;

