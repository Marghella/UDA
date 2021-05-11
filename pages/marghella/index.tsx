import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import Home from '../../components/Home';
// import video from '../public/videos/landing.mp4';

export default function index() {
  return <>
    <StaticRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/:page">
          <Home></Home>
        </Route>
      </Switch>
    </StaticRouter>
  </>;
}
