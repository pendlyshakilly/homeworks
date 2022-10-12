import React from 'react'
import Message from "./Message";
import s from "./Message.module.css"


export type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,

}



const messageData: messageType = {
    avatar: 'https://image.api.playstation.com/vulcan/img/cfn/11307k2WGYF-7znWbYxd3fm3f-LGhCIgmOX6JRwW9xY4YHhIb18xxRAjWOYZyxSD6di2sElpf6j6P1QRWNfJKQyZk-wxxj3Z.png?w=960&h=960',
    name: 'Illy',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
           <div className={s.homework}>
            homeworks 1
           </div>
            {/*should work (должно работать)*/}
          <Message messag = {messageData}/>
            {/*<Message*/}
            {/*    avatar={messageData.avatar}*/}
            {/*    name={messageData.name}*/}
            {/*    message={messageData.message}*/}
            {/*    time={messageData.time}*/}
            {/*/>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
