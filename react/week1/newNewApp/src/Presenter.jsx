import React from 'react'

class Presenter extends React.Component {
    render() {
        const todo = this.props.todo
        var options = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        }
        return <ul id='container'>
            {todo.map((item, idx) =>
                <div className='todos'>
                    <li key={idx}>ToDo: {item.title}</li>
                    <li key={idx}>Date: {item.date.toLocaleDateString('en-US', options)}</li>
                </div>)}
        </ul>
    }
}

export default Presenter;