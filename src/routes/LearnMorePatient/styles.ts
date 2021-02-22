import { createUseStyles } from 'react-jss';

import { Colors, Dimensions, Layout, TypeScale } from 'styles';

const useStyles = createUseStyles({
  container: {
    ...Layout.flexColumn,
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
  header: {
    borderBottom: `${Dimensions.px.size1} solid ${Colors.gray8c}`,
    boxSizing: 'border-box',
    margin: `${Dimensions.px.size5} ${Dimensions.px.size40}`,
    textAlign: 'center',
  },
  imgPatient: {
    width: `85%`,
  },
  stepContainer: {
    margin: `${Dimensions.px.size20} ${Dimensions.px.size20} !important`,
  },
  stepTitle: {
    margin: `${Dimensions.px.size0} !important`,
  },
  stepText: {
    fontSize: Dimensions.px.size15,
    fontWeight: '300',
    marginBottom: Dimensions.px.size30,
    marginTop: Dimensions.px.size10,
  },
  text1: {
    fontSize: Dimensions.px.size15,
    fontWeight: '300',
    lineHeight: 1.5,
    margin: `${Dimensions.px.size5} ${Dimensions.px.size40}`,
    marginTop: Dimensions.px.size20,
  },
  title: {
    ...TypeScale.fontSize26,
    color: Colors.black33,
    fontFamily: 'MontserratLight',
  },
});

export default useStyles;
