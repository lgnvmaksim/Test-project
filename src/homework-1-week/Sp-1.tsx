type ListType = {
    list: StudentTuskType
}

type StudentTuskType = {
    title: string,
    tasks: TuskArray[]
    students: Array<string>
}

type TuskArray = {
    taskId: number,
    title: string,
    isDone: boolean
}


export const StudentList = (props: ListType) => {
    return (
        <>
            <h3>{props.list.title}</h3>
            <div>
                <input/>
                <button>+</button>
                <ul>
                    {props.list.tasks.map((el) => {
                        return (
                            <li>
                                <input type={"checkbox"} checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {props.list.students.map((el)=>{
                        return(
                            <li>{el}</li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}