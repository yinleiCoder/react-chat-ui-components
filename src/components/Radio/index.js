import React from 'react'
import PropTypes from 'prop-types'
import StyledRadio, { Circle, RadioButton, StyledRadioGroup } from './style';
import LabelContainer from 'components/LabelContainer';

function Radio({name, children, ...rest}) {
    return (
        <StyledRadio {...rest}>
            {children}
            <RadioButton name={name}/>
            <Circle/>
        </StyledRadio>
    );
}

function RadioGroup({label, children, ...rest}) {
    return (
        <LabelContainer label={label}>
            <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
        </LabelContainer>
    )
}

Radio.Group = RadioGroup;

Radio.propTypes = {
    children: PropTypes.any,
    name: PropTypes.string,
};
RadioGroup.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
};

export default Radio;

