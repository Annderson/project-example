import { createUseStyles } from 'react-jss';

import { Colors, Dimensions, Layout, TypeScale } from 'styles';
import imgDoctor from 'assets/icons/medico.jpg';

const useStyles = createUseStyles({
  container: {
    background: `url(${imgDoctor})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: Dimensions.por.sizeFull,
  },
  containerBackground: {
    ...Layout.flexColumn,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    minHeight: Dimensions.vh.sizeVh100,
    overflow: 'hidden',
    paddingLeft: Dimensions.px.size50,
    paddingRight: Dimensions.px.size30,
    width: Dimensions.por.sizeFull,
  },
  text: {
    margin: Dimensions.px.size0,
  },
  title: {
    color: Colors.white,
    fontFamily: 'MontserratSemiBold',
    fontSize: Dimensions.rem.sizeRem2_1,
    marginLeft: Dimensions.px.size30,
    marginTop: Dimensions.px.size50,
  },
  text1: {
    ...TypeScale.fontSize16,
    color: Colors.white,
    margin: Dimensions.px.size10,
    padding: Dimensions.px.size20,
  },

  action: {
    ...Layout.flexSeparator,
  },
  step: {
    padding: Dimensions.px.size10,
    marginBottom: Dimensions.px.size20,
  },
  stepContainer: {
    display: 'flex',
  },
  titleStep: {
    color: Colors.white,
    fontFamily: 'MontserratMedium',
    margin: Dimensions.px.size5,
    marginBottom: Dimensions.px.size10,
  },
  subTitleStep: {
    color: Colors.black33,
    fontFamily: 'MontserratSemiBold',
    fontSize: Dimensions.rem.sizeRem1,
    margin: Dimensions.px.size0,
    marginBottom: Dimensions.px.size5,
  },
  infoSubTitleStep: {
    ...Layout.flexSeparator,
    ...TypeScale.fontSize16,
    color: Colors.black33,
    margin: Dimensions.px.size0,
  },
  imgDoctor: {
    height: Dimensions.px.size25,
    width: Dimensions.px.size25,
  },
});

export default useStyles;
