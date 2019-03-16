import React from "react"

class ListWithUsers extends React.Component {
    render() { 
        const array = this.props.array
        return <div>
            {array.map(element => {
               return <li key={element.id}>{element.login}</li>
            })}
        </div>;
    }
}
 
export default ListWithUsers;