import React, {useState} from "react";

type HowMoneyType ={
    coins: Array<moneyArray>
}

type moneyArray={
    banknote: string,
    nominal: number,
    number: string
}



type FilterType = 'dollar' | 'ruble' | 'all'

export const FilteredMoneyWithButton =(props: HowMoneyType)=>{
    const[filter, setFilter]=useState<FilterType>('all')
    let currentMoney = props.coins
    if (filter === 'dollar') {currentMoney = props.coins.filter((el) => el.banknote === "dollar")}
    if (filter === 'ruble') {currentMoney = props.coins.filter((el) => el.banknote === "ruble")}

    const onClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }
    return(
        <>
            <ul>
                {currentMoney.map((el)=>{
                    return(
                        <li>
                            <span>{el.banknote}</span>
                            <span> {el.nominal}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>onClickFilterHandler('all')}>Все</button>
            <button onClick={()=>onClickFilterHandler('dollar')}>Долляры</button>
            <button onClick={()=>onClickFilterHandler('ruble')}>Рублики</button>

        </>
    )
}