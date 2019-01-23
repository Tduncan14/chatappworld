import React, { Component } from 'react';
import MessageList from './components/MessageList';
import Chatkit from '@pusher/chatkit-client';
import SendMessage from './components/SendMessageForm';
import RoomList from './components/NewRoomForm';
import{tokenUrl, instanceLocator} from './config';

class App extends Component {

  componentDidMount(){
     const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId:'treek',
        tokenProvider: new Chatkit.TokenProvider({
        url:tokenUrl
        })
     })

     chatManager.connect()
     .then(currentUser => {
       currentUser.subscribeToRoom({
          roomId:'19378532',
          hooks:{
            onNewMessage: message =>{
              console.log('message-text:', message.text);
            }
          }

       })
     })
  }

  render() {
     return(
       <div className ="app">
        <MessageList />
       
       </div>
     )
  }
}

export default App;
