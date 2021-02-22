import React from 'react';
import { Fab } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import routesName from 'routes/routeNames';

// import useStyles from 'routes/Register/RegisterPatient/styles';

const RegisterClinic = (): JSX.Element => {
  return (
    <div>
      <Fab color="primary" href={routesName.HOME}>
        <ArrowBackIcon />
      </Fab>
    </div>
  );
};

export default RegisterClinic;
