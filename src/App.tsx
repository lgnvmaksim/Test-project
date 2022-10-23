import './App.css';
import React, {useState} from "react";
import {Input} from "./Microtasks/Input/Input";
import {Button} from "./Microtasks/Input/Button";


function App() {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    let [title, setTitle] = useState('')

    const callBackButtonHandler = ()=>{
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <div>
                <Input setTitle={setTitle} title={title}/>
               <Button name={'+'} callBack={callBackButtonHandler} />
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
