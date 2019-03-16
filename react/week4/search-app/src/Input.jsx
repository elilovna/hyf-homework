import React from "react"

class Input extends React.Component {

    render() {
        return <div>
            <form>
                <input type="text" placeholder="type name" onChange={this.props.onChange} />
            </form>
        </div>;
    }
}

export default Input;