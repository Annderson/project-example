import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

import locales from 'locales/home';
import routesName from 'routes/routeNames';

import useStyles from 'routes/Home/components/InstitutionalMedical/styles';
import doctor1Img from 'assets/icons/medico1.png';
import doctor2Img from 'assets/icons/medico2.png';
import doctor3Img from 'assets/icons/medico3.png';

const InstitutionalMedical = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerBackground}>
        <h2 className={classes.title}>{locales.ifDoctor}</h2>
        <Grid container spacing={6}>
          <Grid item direction="column" md={6} sm={11} xs={11}>
            <h6 className={classes.text1}>
              {locales.textDoctor1}. {locales.textDoctor2}.{' '}
              {locales.textDoctor3}
            </h6>
            <h6 className={classes.text1}>
              {locales.infoDoctorRegister}{' '}
              <Button variant="contained" color="primary">
                {locales.register}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.infoDoctorLogin}{' '}
              <Button
                variant="contained"
                color="primary"
                href={routesName.LOGIN}
              >
                {locales.login}
              </Button>
            </h6>
            <h6 className={classes.text1}>
              {locales.toKnowMore}{' '}
              <Button
                variant="contained"
                color="primary"
                href={routesName.LEARN_MORE_DOCTOR}
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
                {locales.infoVisibility}
                <img
                  className={classes.imgDoctor}
                  src={doctor1Img}
                  alt="Visibilidae"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.management}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoManagement}
                <img
                  className={classes.imgDoctor}
                  src={doctor2Img}
                  alt="Gerenciamento"
                />
              </h5>
            </Paper>
            <Paper elevation={6} className={classes.step}>
              <h4 className={classes.subTitleStep}>{locales.customization}</h4>
              <h5 className={classes.infoSubTitleStep}>
                {locales.infoCustomization}
                <img
                  className={classes.imgDoctor}
                  src={doctor3Img}
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

export default InstitutionalMedical;
