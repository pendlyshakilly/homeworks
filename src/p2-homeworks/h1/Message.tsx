import React from 'react'
import {messageType} from "./HW1";
import s from "./Message.module.css"


export type MessagePropsType = {
    messag: messageType
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.messages}>
            <div className={s.imageAndText}>
                <img src={props.messag.avatar} />
                <div className={s.text}>
                    <div className={s.name}>
                        {props.messag.name}
                        {/**/}
                    </div>
                    <pre className={s.messageText}>
                        {props.messag.message}
                        {/**/}
                    </pre>

                </div>

            </div>
            <div className={s.time}>
                {props.messag.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
