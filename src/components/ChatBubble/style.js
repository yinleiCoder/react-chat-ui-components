import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import styled, { css } from 'styled-components';


const Time = styled(Paragraph).attrs({type: 'secondary', size: 'small'})`
    margin: 6px !important;
    margin-left: 24px !important;
    word-spacing: 1rem;
`;

const BubbleTip = styled(Icon)`
    position: absolute;
    bottom: -15%;
    left: 0;
    z-index: 5;
`;
const Bubble = styled.div`
    padding: 15px 22px;
    box-shadow: 0px 8px 24px rgba(0,0,0,0.1);
    border-radius: 100px;
    position: relative;
    z-index: 10;
`;
const MessageText = styled(Text)`

`;

const typeVariants =  {
    mine: css`
        ${Bubble}{
            background-color: ${({theme}) => theme.primaryColor};
        }
        ${BubbleTip}{
            transform: rotateY(180deg);
            left: unset;
            right: 0;
            path {
                fill: ${({theme}) => theme.primaryColor};
            }
        }
        ${Time}{
            text-align: right;
            margin-left: 0 !important;
            margin-right: 24px !important;
        }
        ${MessageText}{
            color: white;
        }
    `,
}

const StyledChatBubble = styled.div`
    display: flex;
    flex-direction: column;

    ${({type})=> type && typeVariants[type]}
`;

export default StyledChatBubble;
export { Bubble, BubbleTip, Time, MessageText };