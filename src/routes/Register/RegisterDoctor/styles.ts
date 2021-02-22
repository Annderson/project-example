import { createUseStyles } from 'react-jss';

import { Dimensions, Layout } from 'styles';

import cadPatient from 'assets/icons/cadpaciente.jpg';

const useStyles = createUseStyles({
  container: {
    ...Layout.flexColumn,
    background: `url(${cadPatient}) no-repeat center center`,
    backgroundSize: Dimensions.por.sizeFull,
    boxSizing: 'border-box',
    margin: Dimensions.px.size10,
    overflowX: 'hidden',
    width: Dimensions.por.sizeFull,
  },
  fab: {
    height: `${Dimensions.px.size50} !important`,
    marginTop: `${Dimensions.px.size20} !important`,
    marginLeft: `${Dimensions.px.size20} !important`,
    width: `${Dimensions.px.size50} !important`,
  },
});

export default useStyles;
