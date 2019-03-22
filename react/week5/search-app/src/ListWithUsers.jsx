import React from "react"
import { Paper, Grid, Link as LinkComponent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import "./index.css"
import { Link } from "react-router-dom"
import UserInfo from './UserInfo'

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
                {array.map(({ id, login, html_url, avatar_url }) =>
                    <Paper className="listItems" key={id}>
                        <LinkComponent to={{
                            pathname: '/userinfo',
                            state: {
                                name: login, 
                                avatar: avatar_url,
                                mainLink: html_url
                            }
                        }} component={Link} >
                            {login}
                        </LinkComponent>
                    </Paper>
                )}
            </Grid>
        </div>
    }
}

export default withStyles(styles)(ListWithUsers)