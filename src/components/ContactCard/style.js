import StyledAvatar from 'components/Avatar/style';
import Paragraph from 'components/Paragraph';
import styled from 'styled-components';
import { card } from 'utils/mixins';

const Name = styled(Paragraph).attrs({size: 'large'})`
        grid-area: name;
`;
const Intro = styled(Paragraph).attrs({size: 'secondary'})`
        grid-area: intro;
`;

const StyledContactCard = styled.div`
    ${card()}
    display: grid;
    grid-template-areas: 
        "avatar name"
        "avatar intro";
    grid-template-columns: 62px auto;
    ${StyledAvatar} {
        grid-area: avatar;
    }
`;

export default StyledContactCard;
export {Name, Intro}