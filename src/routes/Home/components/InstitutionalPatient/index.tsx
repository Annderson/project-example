import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

import locales from 'locales/home';
import useStyles from 'routes/Home/components/InstitutionalPatient/styles';
import routesName from 'routes/routeNames';
import visibilityImg from 'assets/icons/busca.png';
import managementImg from 'assets/icons/busca2.png';
import customizationImg from 'assets/icons/busca3.png';

const InstitutionalPatient = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerBackground}>
        <h2 className={classes.title}>{locales.ifPatient}</h2>
        <Grid container spacing={6}>
          <Grid
            item
            direction="column"
            md={6}
            sm={11}
            xs={11}
            className={classes.stepContainer}
          >
            <h6 className={classes.text1}>
              {locales.textPatient1}. {locales.textPatient2}.{' '}
              {locales.textPatient3}
            </h6>
            <h6 className={classes.text1}>
              {locales.infoPatientRegister}{' '}
              <Button
                variant="contained"
                color="secondary"
                href={routesName.REGISTER_PATIENT}
              >
                {locales.register}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.infoPatientLogin}{' '}
              <Button variant="contained" color="secondary" href="/login">
                {locales.login}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.toKnowMore}{' '}
              <Button
                variant="contained"
                color="secondary"
                href={routesName.LEARN_MORE_PATIENT}
              >
                {locales.know}
              </Button>
            </h6>
          </Grid>
          <Grid
            className={classes.stepContainer}
            item
            xs={10}
            sm={11}
            md={5}
            direction="column"
            justify="center"
          >
            <h2 className={classes.titleStep}>{locales.stepByStep}</h2>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.firstStep}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoFirstStep}
                <img
                  className={classes.img}
                  src={visibilityImg}
                  alt="passo 1"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.secondStep}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoSecondStep}
                <img
                  className={classes.img}
                  src={managementImg}
                  alt="passo 2"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.thirdStep}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoThirdStep}
                <img
                  className={classes.img}
                  src={customizationImg}
                  alt="passo 3"
                />
              </h5>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InstitutionalPatient;
