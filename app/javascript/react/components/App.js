import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import CampgroundIndexContainer from './CampgroundIndex/CampgroundIndexContainer'
import CampgroundShowContainer from './CampgroundShow/CampgroundShowContainer'
import AddCampgroundImages from './AdminFeatures/AddCampgroundImages'
import NewCampgroundForm from './AdminFeatures/NewCampgroundForm'
import UpdateCampgroundForm from './AdminFeatures/UpdateCampgroundForm'
import DestroyCampground from './AdminFeatures/DestroyCampground'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CampgroundIndexContainer}/>
        <Route exact path='/campgrounds' component={CampgroundIndexContainer} />
        <Route exact path='/campgrounds/new' component={NewCampgroundForm} />
        <Route exact path='/campgrounds/:id' component={CampgroundShowContainer} />
        <Route exact path='/campgrounds/:id/destroy' component={DestroyCampground} />
        <Route exact path='/campgrounds/:id/update' component={UpdateCampgroundForm} />
        <Route exact path='/campgrounds/:id/addimages' component={AddCampgroundImages} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
