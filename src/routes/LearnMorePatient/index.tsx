import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import locales from 'locales/knowMore';
import routesName from 'routes/routeNames';
import useStyles from 'routes/LearnMorePatient/styles';

import imgPatient from 'assets/icons/institucional-paciente.jpg';

const LearnMorePatient = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Fab color="secondary" className={classes.fab} href={routesName.HOME}>
        <ArrowBackIcon />
      </Fab>
      <header className={classes.header}>
        <h2 className={classes.title}>{locales.titlePatient}</h2>
      </header>

      <h6 className={classes.text1}>{locales.textPatient1}</h6>
      <h6 className={classes.text1}>{locales.textPatient2}</h6>

      <Grid container spacing={6} className={classes.stepContainer}>
        <Grid item direction="column" md={6} sm={11} xs={11}>
          <h3 className={classes.stepTitle}>{locales.firstStep}</h3>
          <h5 className={classes.stepText}>{locales.firstStepText}</h5>

          <h3 className={classes.stepTitle}>{locales.secondStep}</h3>
          <h5 className={classes.stepText}>{locales.secondStepText}</h5>

          <h3 className={classes.stepTitle}>{locales.thirdStep}</h3>
          <h5 className={classes.stepText}>{locales.thirdStepText}</h5>
        </Grid>
        <Grid item direction="column" md={6} sm={11} xs={11}>
          <img
            className={classes.imgPatient}
            src={imgPatient}
            alt="institucional-paciente"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default LearnMorePatient;
