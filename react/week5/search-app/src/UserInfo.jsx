import React from "react"

class UserInfo extends React.Component {

    render() {
        console.log(this.props.location.state)
        const { name, avatar, mainLink } = this.props.location.state
        return <ul>
           <li>{name}</li>
           <li><img src={avatar} /></li>
           <li><a href={mainLink} target="_blank">link</a></li>
        </ul>
    }
}

export default UserInfo;