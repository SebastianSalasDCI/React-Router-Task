import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Home'
export default function Routes() {

    return (
        <div>
        <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <h2>About</h2>
            </Route>
          </Switch>
        </div>
    )
}
