
type ButtonType = {
    name: string
    callBack: ()=>void
}

export const Button = (props: ButtonType) =>{
    const{name, callBack}=props
    const onClickHandler =()=>{
        props.callBack()
    }
    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}