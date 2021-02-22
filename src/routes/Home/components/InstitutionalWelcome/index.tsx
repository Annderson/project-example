import React from 'react';

import locales from 'locales/home';

import useStyles from 'routes/Home/components/InstitutionalWelcome/styles';

const InstitutionalWelcome = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerBackground}>
        <h2 className={classes.title}>{locales.welcomeTitle}</h2>
        <div>
          <h6 className={classes.text}>{locales.welcomeText}</h6>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalWelcome;
