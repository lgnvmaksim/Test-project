import {TodolistTest} from "./test-todolist";
import React, {useState} from 'react'

export const AppTest = () => {

    let [tasks1, setTasks1] = useState ([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTask = (id: number) => {
        let filteredTasks = tasks1.filter(el => el.id!== id)
        setTasks1(filteredTasks)
    }

    let [filter, setFilter] = useState<'all'|'active'|'completed'>('all')

    let tasksForTodoList = tasks1  //хранилка отфильрованных тасок
    if (filter==='active') {
        tasksForTodoList = tasks1.filter(el=>el.isDone===false)
    }
    if (filter==='completed') {
        tasksForTodoList = tasks1.filter(el=>el.isDone===true)
    }
    const changeFilter =(value:'all'|'active'|'completed') =>{
        setFilter(value)
    }

    return (
        <div>
            <TodolistTest title="What to learn"
                          tasks={tasksForTodoList}
                          deleteTask={removeTask}
                          change ={changeFilter}
            />
        </div>
    );
}
