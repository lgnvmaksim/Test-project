import {ChangeEvent, useState} from "react";

type MessageButtonType ={
    addMessage:(t:string)=>void
}

export const FullInput = (props: MessageButtonType) => {

    let [title, setTitle] = useState('')
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)}

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }


return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}