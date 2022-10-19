type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (taskId:number)=>void
    change: (value:'all'|'active'|'completed')=>void
}

export function TodolistTest(props: PropsType) {


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el)=>{
            return(
                <li key={el.id}>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                    <button onClick={()=>{props.deleteTask(el.id)}}>✖</button>
                </li>

            )})}
            </ul>
                <div>
                    <button onClick={
                        ()=>{props.change('all')}
                    }>
                        All
                        </button>
                    <button onClick={
                        ()=>{props.change('active')}
                    }>
                        active
                    </button>
                    <button onClick={
                        ()=>{props.change('completed')}
                    }>
                        completed
                    </button>
                </div>
            </div>
            }