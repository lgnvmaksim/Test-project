
type newCarsType={
    cars: NewCars[]
}

type NewCars={
    manufacturer:string
    model:string
}

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

export const NewCars = (props: newCarsType) =>{
    return (
        <table>
            <tr>
                {props.cars.map((el,index)=>{
                    return(
                        <tr key={index}>
                        <th>{el.manufacturer}</th>
                        <th>{el.model}</th>
                        </tr>
                    )
                })}
            </tr>
        </table>
    )
}