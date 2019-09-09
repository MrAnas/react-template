import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import { EventsList } from './pages/events/list-events';
import CreateEvent from './pages/events/create-event';
import { OffersList } from './pages/offers/list-offers';
import ViewEvent from './pages/events/view-event';
import ViewOffer from './pages/offers/view-offer';
import CreateOffer from './pages/offers/create-offer';
import Header from './layout/Header';


export default function Main() {
  return (
    <main>
      <div id="outer-container">
        <Sidebar pageWrapId={"page-wrap"} />
        <Header />
        <main id="page-wrap">
          <Switch>
            <Route exact path='/' component={EventsList} />
            <Route exact path='/events' component={EventsList} />
            <Route path="/events/create" component={CreateEvent} />
            <Route path="/events/1" component={ViewEvent} />
            <Route exact path='/offers' component={OffersList} />
            <Route path="/offers/create" component={CreateOffer} />
            <Route path="/offers/1" component={ViewOffer} />
          </Switch>
        </main>
      </div>

    </main>
  );
}