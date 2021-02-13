import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks } from './style';
import 'styled-components/macro';
import face from 'assets/images/zhangming.jpg';
import Avatar from 'components/Avatar';
import Paragraph from 'components/Paragraph';
import Emoji from 'components/Emoji';
import Icon from 'components/Icon';
import { faGithub, faLinkedin, faWeibo } from '@fortawesome/free-brands-svg-icons';
import Seperator from 'components/Seperator';
import Text from 'components/Text';

import photo1 from 'assets/images/photo1.jpg'
import photo2 from 'assets/images/photo2.jpg'
import photo3 from 'assets/images/photo3.jpg'

import { ReactComponent as Cross } from 'assets/icon/cross.svg'
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
function Profile({
    showEditBtn,
    showCloseIcon = true,
    onEdit,
    status,
    children,
    ...rest
}) {
    return (
        <StyledProfile {...rest}>
            {showCloseIcon && <CloseIcon icon={Cross}/>}
            <Avatar 
                css={`
                    margin: 26px 0;
                    grid-area: 1 / 1 / 3 / 2;
                `}
                src={face}
                size='160px'
                status={status}
                statusIconSize='25px'
            />
            {
                showEditBtn && (
                    <Button 
                    css={`
                        grid-area: 1 / 1 / 3 / 2;
                        align-self: end;
                        margin-left: 100px !important;
                        z-index: 10;
                    `}
                    size="52px" onClick={onEdit}>
                        <FontAwesomeIcon 
                            css={`
                                font-size: 24px;
                            `}
                            icon={faPen}
                        />
                    </Button>
                )
            }
            <Paragraph
                size="xlarge"
                css={`
                    margin-bottom: 12px !important;
                `}
            >
                张明
            </Paragraph>
            <Paragraph
                size="medium"
                type="secondary"
                css={`
                    margin-bottom: 18px !important;
                `}
            >
                绵阳市 三台县
            </Paragraph>
            <Paragraph
                css={`
                    margin-bottom: 18px !important;
                `}
            >
                天行健，君子以自强不息{"  "}
                <Emoji label="work">🐱‍👤</Emoji>
            </Paragraph>
            <SocialLinks>
                <Icon.Social 
                    icon={faWeibo}
                    bgColor="tomato"
                    href="http://www.yinleilei.com"
                />
                <Icon.Social 
                    icon={faGithub}
                    bgColor="black"
                    href="http://www.yinleilei.com"
                />
                <Icon.Social 
                    icon={faLinkedin}
                    bgColor="red"
                    href="http://www.yinleilei.com"
                />
            </SocialLinks>
            <Seperator 
                css={`
                    margin: 30px 0 !important;
                `}
            />
            <ContactSection>
                <Description label="联系电话">13795950539</Description>
                <Description label="电子邮箱">1099129793@qq.com</Description>
                <Description label="个人网站">http://yinleilei.com</Description>
            </ContactSection>
            <Seperator 
                css={`
                    margin: 30px 0 !important;
                `}
            />
            <AlbumSection>
                <AlbumTitle>
                    <Text type="secondary">相册 (99+)</Text>
                    <a>查看全部</a>
                </AlbumTitle>
                <Album>
                    <Photo src={photo1}/>                    
                    <Photo src={photo2}/>
                    <Photo src={photo3}/>
                </Album>
            </AlbumSection>
        </StyledProfile>
    );
}

function Description({label, children}) {
    return (
        <Paragraph>
            <Text type="secondary">{label}: </Text>
            <Text>{children}</Text>
        </Paragraph>
    )
}

Profile.propTypes = {
    children: PropTypes.any
};

export default Profile;

