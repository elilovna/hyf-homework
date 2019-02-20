import React from 'react'
import Presenter from './Presenter'

const todos = [
    {
        title: 'Eat breakfast',
        date: new Date()
    },
    {
        title: 'Brush teeth',
        date: new Date()
    },
    {
        title: 'Read book',
        date: new Date()
    },
    {
        title: 'Get out of bed',
        date: new Date()
    },
]

class Title extends React.Component {
    render() {
        return <div>
            <h1 id='title'>My ToDo List</h1>
            <Presenter todo={todos} />
        </div>
    }
}

export default Title;
