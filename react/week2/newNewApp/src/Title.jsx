import React from 'react'
import Presenter from './Presenter'

const todos = [
    {
        title: 'Eat breakfast',
        date: new Date(),
        done: true
    },
    {
        title: 'Brush teeth',
        date: new Date(),
        done: true
    },
    {
        title: 'Read book',
        date: new Date(),
        done: true
    },
    {
        title: 'Get out of bed',
        date: new Date(),
        done: true
    },
]

// 

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
            done: true
        }

        this.setState({ array: [...this.state.array, test] })
        e.preventDefault()
    }

    deleteItem = (idx) => {
        console.log(idx)
        const array = [...this.state.array]
        array.splice(idx, 1)
        // const arr = [...this.state.array].filter((item,index) => {
        //   return  index !== idx
        // }) 
        this.setState({ array })
    }

    makeDone = (idx) => {
        console.log(idx)
        // const array = [...this.state.array].map((item, index) => {
        //     if (index == idx) {

        //     }
        // })
        const obj = {...this.state.array[idx]}
        obj.done = false

        const newArray = [...this.state.array]
        newArray[idx] = obj

        this.setState({array: newArray})
      
    }

    // makeItemDone = (idx) => {
    //     const element = document.getElementById(`todoContainer${idx}`)
    //     const rect = element.getBoundingClientRect()
    //     // console.log(rect.y)
    //     // console.log(rect.bottom)
    //     // console.log(rect.top)
    //     for (let i = 0; i < 15; ++i) {
    //         const offset1 = getRandomInt(rect.height)
    //         const offset2 = getRandomInt(rect.height)
    //         drawGraphLine(element, rect.x, rect.y + offset1, rect.right, rect.y + offset2, 'red')
    //     }
    // }

    render() {
        return <Presenter
            todo={this.state.array}
            addTodo={this.addTodo}
            onChange={(e) => {
                this.setState({ title: e.target.value },
                    () => { console.log(this.state.title) })
            }}
            onClick={this.deleteItem}
            onClick2={this.makeDone}
        />
    }
}

// const drawGraphLine = (element, x1, y1, x2, y2, color) => {
//     var dist = Math.ceil(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)))
//     var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
//     var xshift = dist - Math.abs(x2 - x1)
//     var yshift = Math.abs(y1 - y2) / 2

//     var div = document.createElement('div')
//     div.style.backgroundColor = color
//     div.style.position = 'absolute'
//     div.style.left = (x1 - xshift / 2) + 'px'
//     div.style.top = (Math.min(y1, y2) + yshift) + 'px'
//     div.style.width = dist + 'px'
//     div.style.height = '3px'
//     div.style.WebkitTransform = 'rotate(' + angle + 'deg)'
//     div.style.MozTransform = 'rotate(' + angle + 'deg)'
//     element.appendChild(div)
// }

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// }

export default Title


/**
 * [...array]
 * 
 * 
 * 
 * 
 * 
 */
