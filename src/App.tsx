import './App.css';
import {Header} from "./Microtasks/site/Header";
import {Body} from "./Microtasks/site/Body";
import {Footer} from "./Microtasks/site/Footer";
import {Button} from "./Microtasks/button/Components/Button";
import React, {useState} from "react";


type FilterType = 'dollar' | 'ruble' | 'all'
function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'w1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'c1234567890'},
        {banknote: 'ruble', nominal: 100, number: 'r1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'x1234567890'},
        {banknote: 'ruble', nominal: 50, number: 'v1234567890'},
    ])
    const[filter, setFilter]=useState<FilterType>('all')
    let currentMoney = money
    if (filter === 'dollar') {currentMoney = money.filter((el) => el.banknote === "dollar")}
    if (filter === 'ruble') {currentMoney = money.filter((el) => el.banknote === "ruble")}


    const onClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }

    return (
        <div>
            <div>
                <Header title={'New Header'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForFooter={'New Footer'}/>
            </div>
            {/*<Button name={'UniversalButton-1'} callBack={()=>ButtonBrain1('Hi')}/>*/}
            {/*<Button name={'UniversalButton-2'} callBack={()=>ButtonBrain2('F U')}/>*/}

            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span> {el.banknote}</span>
                            <span> {el.nominal}</span>
                            <span> {el.number}</span>
                        </li>
                    )})}
            </ul>
            <button onClick={()=>onClickFilterHandler('all')}>Все</button>
            <button onClick={()=>onClickFilterHandler('dollar')}>Долляры</button>
            <button onClick={()=>onClickFilterHandler('ruble')}>Рублики</button>
        </div>
    );
}

export default App;
