import './App.css';
import {Header} from "./Microtasks/site/Header";
import {Body} from "./Microtasks/site/Body";
import React, {useState} from "react";
import {FilteredMoneyWithButton} from "./Microtasks/button/Components/FilteredMoneyWithButton";
import {Footer} from "./Microtasks/site/Footer";



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
    return (
        <div>
            <div>
                <Header title={'New Header'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForFooter={'New Footer'}/>
                <FilteredMoneyWithButton coins={money}/>
            </div>
        </div>
    );
}

export default App;
