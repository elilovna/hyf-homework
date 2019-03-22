import React from "react"

class UserInfo extends React.Component {

    render() {
        console.log(this.props.location.state)
        const { name, avatar, link } = this.props
        return <div>
           
        </div>
    }
}

export default UserInfo;