import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

import locales from 'locales/home';
import routesName from 'routes/routeNames';

import useStyles from 'routes/Home/components/InstitutionalClinic/styles';
import clinic1Img from 'assets/icons/clinica1.png';
import clinic2Img from 'assets/icons/clinica2.png';
import clinic3Img from 'assets/icons/clinica3.png';

const InstitutionalClinic = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerBackground}>
        <h2 className={classes.title}>{locales.ifClinic}</h2>
        <Grid container spacing={6}>
          <Grid item direction="column" md={6} sm={11} xs={11}>
            <h6 className={classes.text1}>
              {locales.textClinic1} {locales.textClinic2} {locales.textClinic3}
            </h6>
            <h6 className={classes.text1}>
              {locales.infoDoctorRegister}{' '}
              <Button variant="contained" color="default">
                {locales.register}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.infoDoctorLogin}{' '}
              <Button
                variant="contained"
                color="default"
                href={routesName.LOGIN}
              >
                {locales.login}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.toKnowMore}{' '}
              <Button
                variant="contained"
                color="default"
                href={routesName.LEARN_MORE_CLINIC}
              >
                {locales.know}
              </Button>
            </h6>
          </Grid>
          <Grid
            className={classes.stepContainer}
            item
            md={5}
            sm={11}
            xs={10}
            direction="column"
            justify="center"
          >
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.visibility}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoVisibilityClinic}
                <img
                  className={classes.imgDoctor}
                  src={clinic1Img}
                  alt="Visibilidae"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.management}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoManagementClinic}
                <img
                  className={classes.imgDoctor}
                  src={clinic2Img}
                  alt="Gerenciamento"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.practicality}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoCustomizationClinic}
                <img
                  className={classes.imgDoctor}
                  src={clinic3Img}
                  alt="Personalização"
                />
              </h5>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InstitutionalClinic;
