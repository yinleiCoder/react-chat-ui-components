import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style';
import FilterList from 'components/FilterList';
import NoteCard from 'components/NoteCard';
import { useTrail, animated } from 'react-spring';
import useStaggeredList from 'hooks/usetaggeredList';
function NoteList({children, ...rest}) {
    const trailAnimes = useStaggeredList(10);

    return (
        <StyledNoteList {...rest}>
            <FilterList
                options={['最新笔记优先', '有改动的优先']}
                actionLabel='添加笔记'
            >
                <Notes>
                    {
                        new Array(10).fill(0).map((_,i) => (
                            <animated.div key={i} style={trailAnimes[i]}>
                                <NoteCard key={i}/>
                            </animated.div>
                        ))
                    }
                </Notes>
            </FilterList>
        </StyledNoteList>
    );
}

NoteList.propTypes = {
    children: PropTypes.any
};

export default NoteList;

