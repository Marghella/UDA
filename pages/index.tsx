import React from 'react';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import Head from 'next/head';
import Home from '../components/Home';
// import video from '../public/videos/landing.mp4';

export default function index() {
  return <>
    <Head>
      <title>Il mondo che vorrei</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <StaticRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StaticRouter>
  </>;
}
