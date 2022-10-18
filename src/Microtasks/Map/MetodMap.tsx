type NewComponentType = {
    students: StudentsType[]
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el) => {
                return (
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <span> age: {el.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}