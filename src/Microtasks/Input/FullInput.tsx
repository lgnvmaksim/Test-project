import React, {ChangeEvent, useState} from "react";

export type addMessagesButtonType = {
    addMessageButt: (title: string) => void
}

export const FullInput = (props: addMessagesButtonType) => {
    let [title, setTitle] = useState('')

    const onClickButtonHandler = () => {
        props.addMessageButt(title)
        setTitle('')
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}