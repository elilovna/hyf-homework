import React from "react"
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import "./index.css"

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignContent: 'center',
        flexGrow: 1,
        overflow: 'hidden',
        padding: `0 ${theme.spacing.unit * 3}px`,
       
    }
})

class ListWithUsers extends React.Component {
    render() {
        const { classes } = this.props
        const { array } = this.props
        return <div className={classes.root}>
            <Grid item xs={4}>
                {array.map(({ id, login }) => {
                    return <Paper id="test" key={id}>{login}</Paper>
                })}
            </Grid>
        </div>
    }
}

export default withStyles(styles)(ListWithUsers)