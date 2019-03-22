import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Container from './Container'
import UserInfo from './UserInfo'

export const Main = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Container} />
            <Route path='/userinfo' component={UserInfo} />
        </Switch>
    </BrowserRouter>
