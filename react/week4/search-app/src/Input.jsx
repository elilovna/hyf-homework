import React from "react"
import TextField from '@material-ui/core/TextField';
import "./index.css"

class Input extends React.Component {

    render() {
        return <div>
            <TextField id="standard-search" label="Search field" type="search" placeholder="type name" onChange={this.props.onChange} />
        </div>;
    }
}

export default Input;