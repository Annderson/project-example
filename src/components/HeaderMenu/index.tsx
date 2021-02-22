/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from 'components/HeaderMenu/styles';

interface Props {
  children?: JSX.Element;
  title: string;
  username?: string;
}

const HeaderComponent = ({ children, title }: Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [hideButton, setHideButton] = useState<boolean>(false);

  useEffect((): void => {
    setHideButton(!matches);
  }, [matches]);

  return (
    <div className={classes.container}>
      <div className={hideButton ? classes.sideMenuHeader : classes.header}>
        <label htmlFor="home">{title}</label>
      </div>
      {children}
    </div>
  );
};

export default HeaderComponent;
