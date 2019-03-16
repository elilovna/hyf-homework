import React from "react"
import Input from "./Input"
import ListWithUsers from "./ListWithUsers"
import { fetchingUsers } from "./fetchingUsers"

class Container extends React.Component {
    state = {
        // userInput: null,
        arrWithUsers: null
    }

    render() {
        return <>
            <Input onChange={(e) =>
                fetchingUsers(e.target.value)
                    .then(data => this.setState({ arrWithUsers: data.items }, console.log(this.state.arrWithUsers)))} />
            {this.state.arrWithUsers && <ListWithUsers array={this.state.arrWithUsers} />}
        </>

    }
}

export default Container;