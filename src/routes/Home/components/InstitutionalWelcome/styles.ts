import { createUseStyles } from 'react-jss';

import { Colors, Dimensions, Layout, TypeScale } from 'styles';
import imgWelcome from 'assets/icons/cadpaciente.jpg';

const useStyles = createUseStyles({
  container: {
    ...Layout.centered,
    background: `url(${imgWelcome}) no-repeat center center`,
    backgroundSize: 'cover',
    height: Dimensions.vh.sizeVh100,
    width: Dimensions.por.sizeFull,
  },
  containerBackground: {
    ...Layout.flexColumn,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: Dimensions.vh.sizeVh100,
    padding: Dimensions.px.size50,
    width: Dimensions.por.sizeFull,
  },
  title: {
    color: Colors.white,
    fontFamily: 'MontserratLight',
    fontSize: Dimensions.rem.sizeRem2_5,
    marginLeft: Dimensions.px.size60,
    marginTop: Dimensions.px.size70,
  },
  text: {
    ...TypeScale.fontSize18,
    color: Colors.white,
    margin: `${Dimensions.px.size70} auto`,
    textAlign: 'center',
    maxWidth: Dimensions.rem.sizeRem25,
  },
});

export default useStyles;
