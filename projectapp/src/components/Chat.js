import React from 'react';
import {StreamChat} from "stream-chat";
import {Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window} from "stream-chat-react";
import 'stream-chat-react/dist/css/index.css';

//ENTER THIS INFORMATION LATER
const chatClient = StreamChat.getInstance();
const userToken = "";

chatClient.connectUser(
    {
        id: '',
        name: '',
        image: '',
    },
    userToken,
);

const channel = chatClient.channel("messaging", "custom_channel_id", {
        //inlclude many custome fields
    image: 'url',
    name: '',
    members: ['add members names'],
});

const Chat = (

    <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
            <Window>
                <ChannelHeader/>
                <MessageList/>
                <MessageInput/>
            </Window>
        </Channel>
    </Chat>

);


//     return (
//         <>
//
//
//
//         </>
//     );
// };

export default Chat;
