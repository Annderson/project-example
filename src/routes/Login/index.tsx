import React from 'react';
import { connect } from 'react-redux';

import strings from 'locales/login';

import HeaderComponent from 'components/Header';

import useStyles from 'routes/Login/styles';
import useLoginTest from 'routes/Login/hooks';

const LoginTest = (): JSX.Element => {
  const {
    name,
    password,
    setName,
    setPassword,
    handleSendCredentials,
  } = useLoginTest();
  const classes = useStyles();
  return (
    <div className={classes.gridStyle}>
      <div className={classes.container}>
        <HeaderComponent title={strings.enter} />
        <form onSubmit={handleSendCredentials} className={classes.space}>
          <div className={classes.inputContainer}>
            <label htmlFor="name">{strings.name}</label>
            <input
              name="name"
              value={name}
              onChange={setName}
              className={classes.input}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="password">{strings.password}</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={setPassword}
              className={classes.input}
            />
          </div>
          <button
            type="button"
            className={classes.button}
            onClick={handleSendCredentials}
          >
            {strings.logIn}
          </button>
        </form>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const mapStateToProps = (): void => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const mapDispatchToProps = (): void => {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);
