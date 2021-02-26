import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
  return (

    // <div>
    //   <h1>App.js View</h1>
    //   <Airline/>
    //   <Airlines/>
    // </div>

    <Switch>
      <Route exact path="/" component={Airlines}/>
      <Route exact path="/airlines/:slug" component={Airline}/>
    </Switch>
  )
}

export default App;
