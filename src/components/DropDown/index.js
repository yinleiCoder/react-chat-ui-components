import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledDropDown, { DropdownContainer } from './style';

function DropDown({children, content, align = 'right', ...rest}) {
    const [visible, setVisible] = useState(false)
    return (
        <StyledDropDown onClick={() => setVisible(!visible)} {...rest}>
            {children}
            {content && (
                <DropdownContainer visible={visible} align={align}>
                    {content}
                </DropdownContainer>
            )}
        </StyledDropDown>
    );
}

DropDown.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    align: PropTypes.oneOf(['top','left','bottom','right'])
};

export default DropDown;

