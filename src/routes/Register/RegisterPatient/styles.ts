import { createUseStyles } from 'react-jss';

import { Dimensions, Layout, Colors } from 'styles';

import cadPatient from 'assets/icons/cadpaciente.jpg';

const useStyles = createUseStyles({
  container: {
    ...Layout.flexColumn,
    background: `url(${cadPatient}) no-repeat center center`,
    backgroundSize: Dimensions.por.sizeFull,
    boxSizing: 'border-box',
    height: Dimensions.vh.sizeVh100,
    overflow: 'hidden',
    width: Dimensions.por.sizeFull,
  },
  fab: {
    height: `${Dimensions.px.size50} !important`,
    marginTop: `${Dimensions.px.size20} !important`,
    marginLeft: `${Dimensions.px.size20} !important`,
    width: `${Dimensions.px.size50} !important`,
  },
  form: {
    backgroundColor: Colors.transparentWhiteAa,
    borderRadius: Dimensions.px.size5,
    margin: 'auto',
    padding: Dimensions.px.size20,
    width: Dimensions.por.sizeHalf,
  },
  inputText: {
    fontSize: Dimensions.px.size15,
    height: Dimensions.px.size40,
  },
  root: {
    ...Layout.flexColumn,
    backgroundColor: Colors.transparentBlack55,
    height: Dimensions.por.sizeFull,
    width: Dimensions.por.sizeFull,
  },
});

export default useStyles;
