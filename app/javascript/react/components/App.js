import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import CampgroundIndexContainer from "./CampgroundIndex/CampgroundIndexContainer";
import CampgroundShowContainer from "./CampgroundShow/CampgroundShowContainer";
import ManageCampgroundImages from "./AdminFeatures/ManageImages/ManageCampgroundImages";
import NewCampgroundForm from "./AdminFeatures/ManageCampgrounds/NewCampgroundForm";
import UpdateCampgroundForm from "./AdminFeatures/ManageCampgrounds/UpdateCampgroundForm";
import DestroyCampground from "./AdminFeatures/ManageCampgrounds/DestroyCampground";
import UserShowContainer from "./UserShow/UserShowContainer";
import AboutUs from "./MenuComponents/AboutUs";
import CamperContainer from "./MenuComponents/CamperModifications/CamperContainer";
import AdminViewUserTile from "./AdminFeatures/ManageUsers/AdminViewUserTile";
import AdminEditUser from "./AdminFeatures/ManageUsers/AdminEditUser";
import AdminDeleteUser from "./AdminFeatures/ManageUsers/AdminDeleteUser";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CampgroundIndexContainer} />
        <Route exact path="/campgrounds" component={CampgroundIndexContainer} />
        <Route exact path="/campgrounds/new" component={NewCampgroundForm} />
        <Route
          exact
          path="/campgrounds/:id"
          component={CampgroundShowContainer}
        />
        <Route
          exact
          path="/campgrounds/:id/destroy"
          component={DestroyCampground}
        />
        <Route
          exact
          path="/campgrounds/:id/update"
          component={UpdateCampgroundForm}
        />
        <Route
          exact
          path="/campgrounds/:id/images"
          component={ManageCampgroundImages}
        />
        <Route exact path="/users/:id" component={UserShowContainer} />
        <Route exact path="/users/:id/admin" component={AdminViewUserTile} />
        <Route exact path="/users/:id/admin/edit" component={AdminEditUser} />
        <Route
          exact
          path="/users/:id/admin/delete"
          component={AdminDeleteUser}
        />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/camper" component={CamperContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
