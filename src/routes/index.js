import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Project';
import Contacts from '../pages/Contact';
import Techs from '../pages/Techs';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/techs" component={Techs} />
    </Switch>
  );
}
