import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import CampgroundIndexContainer from './CampgroundIndexContainer'
import CampgroundShowContainer from './CampgroundShowContainer'
import NewCampgroundForm from './NewCampgroundForm'
import UpdateCampgroundForm from './UpdateCampgroundForm'
import DestroyCampground from './DestroyCampground'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CampgroundIndexContainer}/>
        <Route exact path='/campgrounds' component={CampgroundIndexContainer} />
        <Route exact path='/campgrounds/new' component={NewCampgroundForm} />
        <Route exact path='/campgrounds/:id/destroy' component={DestroyCampground} />
        <Route exact path='/campgrounds/:id' component={CampgroundShowContainer} />
        <Route exact path='/campgrounds/:id/update' component={UpdateCampgroundForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
