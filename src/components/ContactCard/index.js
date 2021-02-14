import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Intro, Name } from './style';
import Avatar from 'components/Avatar';
import face from 'assets/images/zhangming.jpg'

function ContactCard({children, ...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status="online"/>
            <Name>张明</Name>
            <Intro>我是明哥.</Intro>
            {children}
        </StyledContactCard>
    );
}

ContactCard.propTypes = {
    children: PropTypes.any
};

export default ContactCard;

