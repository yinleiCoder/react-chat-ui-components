import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageList,{ChatList} from './style';
import Filter from 'components/Filter';
import Select from 'components/Select';
import Option from 'components/Option';
import Button from 'components/Button';
import Input from 'components/Input';
import MessageCard from 'components/MessageCard';
import face1 from 'assets/images/avatar.jpg';
import { ReactComponent as Plus } from 'assets/icon/plus.svg'
import Icon from 'components/Icon';

function MessageList({children, ...rest}) {
    return (
        <StyledMessageList {...rest}>
            <Input.Search />
            <ChatFilter />
            <ChatList>
                {[1,2,3,4,5,6].map((_, index) => (
                    <MessageCard 
                        active={index%3===0}
                        key={index}
                        avatarSrc={face1}
                        name="尹磊"
                        avatarStatus="online"
                        statusText="在线"
                        time="2小时前"
                        message="你要喜欢有结果的树。"
                        unreadCount={2}
                        replied={index%3===0}
                    />
                ))}
            </ChatList>
        </StyledMessageList>
    );
}

function ChatFilter() {
    return (
        <Filter style={{padding: '20px 0'}}>
            <Filter.Filters label="列表排序">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>
            <Filter.Action label="创建会话">
                <Button>
                    <Icon icon={Plus} width={12} height={12}/>
                </Button>
            </Filter.Action>
        </Filter>
    )
}

MessageList.propTypes = {
    children: PropTypes.any
};

export default MessageList;

