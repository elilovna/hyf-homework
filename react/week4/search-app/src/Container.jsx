import React from "react"
import Input from "./Input"
import ListWithUsers from "./ListWithUsers"
import { fetchingUsers } from "./fetchingUsers"
import "./index.css"

class Container extends React.Component {
    state = {
        arrWithUsers: null
    }

    render() {
        return <>
            <div id="container">
                <Input onChange={(e) =>
                    fetchingUsers(e.target.value)
                        .then(data => this.setState({ arrWithUsers: data.items }, console.log(this.state.arrWithUsers)))} />
                {this.state.arrWithUsers && <ListWithUsers array={this.state.arrWithUsers} />}
            </div>
        </>
    }
}

export default Container;