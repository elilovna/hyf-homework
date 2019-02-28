import React from 'react'
import Presenter from './Presenter'

const todos = [
    {
        title: 'Eat breakfast',
        date: new Date(),
        status: true
    },
    {
        title: 'Brush teeth',
        date: new Date(),
        status: false
    },
    {
        title: 'Read book',
        date: new Date(),
        status: false
    },
    {
        title: 'Get out of bed',
        date: new Date(),
        status: false
    },
]

class Title extends React.Component {
    state = {
        title: '',
        time: '',
        array: todos
    }

    addTodo = (e) => {
        const test = {
            title: this.state.title,
            date: new Date(),
            status: true
        }

        this.setState({ array: [...this.state.array, test] })
        e.preventDefault();
    }

    render() {
        return <Presenter
            todo={this.state.array}
            addTodo={this.addTodo}
            onChange={(e) => {
                this.setState({ title: e.target.value },
                    () => { console.log(this.state.title) })
            }}
        />
    }
}

export default Title;
