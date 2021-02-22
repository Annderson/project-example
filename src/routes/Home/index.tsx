import React from 'react';

import InstitutionalPatient from 'routes/Home/components/InstitutionalPatient';
import InstitutionalClinic from 'routes/Home/components/InstitutionalClinic';
import InstitutionalMedical from 'routes/Home/components/InstitutionalMedical';
import InstitutionalWelcome from 'routes/Home/components/InstitutionalWelcome';

import useStyles from 'routes/Home/styles';

const Home = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <a href="#pw" className={classes.link}>
          <div className={classes.linkItem} />
        </a>
        <a href="#p1" className={classes.link}>
          <div className={classes.linkItem} />
        </a>
        <a href="#p2" className={classes.link}>
          <div className={classes.linkItem} />
        </a>
        <a href="#p3" className={classes.link}>
          <div className={classes.linkItem} />
        </a>
      </div>
      <div id="pw">
        <InstitutionalWelcome />
      </div>
      <div id="p1">
        <InstitutionalPatient />
      </div>
      <div id="p2">
        <InstitutionalClinic />
      </div>
      <div id="p3">
        <InstitutionalMedical />
      </div>
    </div>
  );
};

export default Home;
