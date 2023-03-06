import React from "react";
import Infochats from '../Infochat.json'

class Home extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <div class="sidebar">
                        <div class="header">
                            <div class="avatar">
                                <img src="./assets/image/img5.png" alt="" />
                            </div>
                            <div class="chat-header-right">
                                <img src="./assets/image/img4.png" />
                                <img src="./assets/image/img6.png" />
                                <img src="./assets/image/img9.png" />
                            </div>
                        </div>
                        <div class="sidebar-search">
                            <div class="sidebar-search-container">
                                <img src="./assets/image/img4.png" alt="" />
                                <input type="text" placeholder="search or new chat" />
                            </div>
                        </div>
                        <div class="sidebar-chats">
                            {
                                Infochats && Infochats.map(infochat => {
                                    return (
                                        <div class="sidebar-chat">

                                            <>
                                                <div class="chat-avatar" key={infochat.image}>
                                                <img src={infochat.image} alt="" />
                                                </div>
                                                <div class="chat-info">
                                                    <h4> {infochat.header}</h4>
                                                    <p>{infochat.paragraph}</p>
                                                </div>
                                                <div class="time">
                                                    <p>{infochat.time}</p>
                                                </div>
                                            </>

                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div class="message-container">
                        <div class="header">
                            <div class="chat-title">
                                <div class="avatar">
                                    <img src="./assets/image/img5.png" alt="" />
                                </div>

                                <div class="message-header-content">
                                    <h4>muthu</h4>
                                    <p>online</p>
                                </div>
                            </div>
                            <div class="chat-header-right">
                                <img src="./assets/image/img4.png" alt="" />
                                <img src="./assets/image/img9.png" alt="" />
                            </div>
                        </div>
                        <div class="message-content">
                            <p class="chat-message">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message chat-sent">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message chat-sent">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message">This is a message<span class="chat-time">11:40 pm </span></p>
                            <p class="chat-message chat-sent">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message chat-sent">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message">This is a message<span class="chat-time">11:40 pm</span></p>
                            <p class="chat-message chat-sent">This is a message<span class="chat-time">11:40 pm</span></p>

                        </div>
                        <div class="message-footer">
                            <img src="./assets/image/img4.png" alt="" />
                            <img src="./assets/image/img6.png" alt="" />
                            <input type="text" placeholder="Type a new message" />
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}
export default Home;