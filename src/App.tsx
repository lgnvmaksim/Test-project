import './App.css';
import React, {useState} from "react";
import {FullInput} from "./Microtasks/Input/Full-Input";
import {Input} from "./Microtasks/Input/Input";
import {Button} from "./Microtasks/Input/Button";


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ])
    const messageButton = (t: string) => {
        let newMessage = {message: t}
        setMessage([newMessage,...message])   //сообщение выводит вписанное значение Input
    }

    let [title, setTitle] = useState('')

    const callBackButtonHandler=()=>{
        messageButton(title)
        setTitle('')
    }

    return (
        <div className="App">
            <div>
                {/*<FullInput addMessage={messageButton}/>*/}
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App