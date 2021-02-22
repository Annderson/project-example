import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeNames from 'routes/routeNames';
import Login from 'routes/Login';
import Home from 'routes/Home';
import LearnMorePatient from 'routes/LearnMorePatient';
import LearnMoreDoctor from 'routes/LearnMoreDoctor';
import LearnMoreClinic from 'routes/LearnMoreClinic';

import RegisterPatient from 'routes/Register/RegisterPatient';
// import RegisterDoctor from 'routes/Register/RegisterDoctor';
// import RegisterClinic from 'routes/Register/RegisterClinic';

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path={routeNames.LOGIN} component={Login} />
    <Route exact path={routeNames.HOME} component={Home} />
    <Route path={routeNames.LEARN_MORE_PATIENT} component={LearnMorePatient} />
    <Route path={routeNames.LEARN_MORE_DOCTOR} component={LearnMoreDoctor} />
    <Route path={routeNames.LEARN_MORE_CLINIC} component={LearnMoreClinic} />
    <Route path={routeNames.REGISTER_PATIENT} component={RegisterPatient} />
  </Switch>
);

export default Routes;
