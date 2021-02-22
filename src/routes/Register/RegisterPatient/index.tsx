import React from 'react';
import { Fab, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import locales from 'locales/registerPatient';
import routesName from 'routes/routeNames';

import useStyles from 'routes/Register/RegisterPatient/styles';
import useRegisterPatient from 'routes/Register/RegisterPatient/hooks';

const RegisterPatient = (): JSX.Element => {
  const classes = useStyles();
  const { name, setName } = useRegisterPatient();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Fab color="secondary" className={classes.fab} href={routesName.HOME}>
          <ArrowBackIcon />
        </Fab>

        <form className={classes.form}>
          <TextField
            className={classes.inputText}
            label={locales.fullName}
            value={name}
            onChange={setName}
            autoFocus
            required
            fullWidth
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPatient;
