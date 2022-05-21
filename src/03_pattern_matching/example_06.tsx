import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { make as Settings } from "../helpers/Settings.gen";
import { make as MyProfile } from "../helpers/MyProfile.gen";
import { make as HomeScreen } from "../helpers/HomeScreen.gen";
import { make as PlayScreen } from "../helpers/PlayScreen.gen";
import { make as Marketplace } from "../helpers/Marketplace.gen";
import { make as UserProfile } from "../helpers/UserProfile.gen";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/profile/my">
            <MyProfile />
          </Route>
          <Route path="/profile/:id">
            <UserProfile id="demo" />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/marketplace/:category/:id">
            <Marketplace category="demo" id="demo" />
          </Route>
          <Route path="/play">
            <PlayScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}