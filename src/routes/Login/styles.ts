import { createUseStyles } from 'react-jss';

import { Colors, Dimensions, Layout, TypeScale } from 'styles';

const useStyles = createUseStyles({
  container: {
    border: `${Dimensions.px.size1} solid ${Colors.blue03}`,
    borderRadius: Dimensions.px.size2,
    width: Dimensions.rem.sizeRem25,
  },
  space: {
    padding: Dimensions.px.size10,
  },
  gridStyle: {
    ...Layout.centered,
    height: Dimensions.vh.sizeVh100,
    width: Dimensions.vw.sizeVw100,
  },
  input: {
    height: Dimensions.px.size35,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${Dimensions.px.size10} ${Dimensions.px.size5}`,
  },
  button: {
    ...TypeScale.fontSize18,
    backgroundColor: Colors.blue03,
    border: 'none',
    borderRadius: Dimensions.px.size5,
    color: Colors.white,
    padding: Dimensions.px.size15,
    marginBottom: Dimensions.px.size20,
    marginTop: Dimensions.px.size20,
    width: Dimensions.por.sizeFull,
  },
});

export default useStyles;
