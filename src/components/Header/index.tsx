import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from 'components/Header/styles';

interface Props {
  title: string;
}

const HeaderComponent = ({ title }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid container justify="center">
        <Typography variant="h6">
          <Box color="secondary.contrastText">{title}</Box>
        </Typography>
      </Grid>
    </div>
  );
};

export default HeaderComponent;
