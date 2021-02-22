import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import locales from 'locales/knowMore';
import routesName from 'routes/routeNames';

import imgClinic from 'assets/icons/institucional-clinica.jpeg';

import useStyles from 'routes/LearnMoreClinic/styles';

const LearnMoreClinic = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Fab color="primary" className={classes.fab} href={routesName.HOME}>
        <ArrowBackIcon />
      </Fab>
      <header className={classes.header}>
        <h2 className={classes.title}>{locales.titleDoctor}</h2>
      </header>

      <h6 className={classes.text1}>{locales.textDoctor1}</h6>
      <h6 className={classes.text1}>{locales.textDoctor2}</h6>

      <Grid container spacing={6} className={classes.stepContainer}>
        <Grid item direction="column" md={6} sm={11} xs={11}>
          <h3 className={classes.stepTitle}>{locales.visibility}</h3>
          <h5 className={classes.stepText}>{locales.visibilityText}</h5>

          <h3 className={classes.stepTitle}>{locales.management}</h3>
          <h5 className={classes.stepText}>{locales.managementText}</h5>

          <h3 className={classes.stepTitle}>{locales.practicality}</h3>
          <h5 className={classes.stepText}>{locales.practicalityText}</h5>
        </Grid>
        <Grid item direction="column" md={6} sm={11} xs={11}>
          <img
            className={classes.imgDoctor}
            src={imgClinic}
            alt="institucional médico"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default LearnMoreClinic;
