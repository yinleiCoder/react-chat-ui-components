import styled, { css } from 'styled-components';
import CaretDown from 'assets/icon/caret_down.svg';
import CaretDown2 from 'assets/icon/caretDown2.svg';

const typeVariants = {
    form: css`
        background-image: url(${CaretDown2});
    `,
}

const StyledSelect = styled.select`
    appearance: none;
    background-image: url(${CaretDown});
    background-repeat: no-repeat;
    background-position: right center;
    background-color: transparent;
    border: none;
    padding-right: 14px;
    font-size: ${({theme}) => theme.normal};
    color: ${({theme}) => theme.grayDark};
    ${({type}) => type && typeVariants[type]};
`;

export default StyledSelect;
