import { createUseStyles } from 'react-jss';

import { Dimensions, Layout, Colors } from 'styles';

const useStyles = createUseStyles({
  container: {
    ...Layout.flexColumn,
    flexDirection: 'column',
    position: 'relative',
    width: Dimensions.por.sizeFull,
  },
  header: {
    ...Layout.flexColumnCentered,
    flexDirection: 'column',
    backgroundColor: '#00000055',
    bottom: 0,
    left: 0,
    position: 'fixed',
    top: 0,
    width: Dimensions.px.size40,
  },
  link: {
    margin: `${Dimensions.px.size15} 0`,
  },
  linkItem: {
    backgroundColor: Colors.white,
    borderRadius: Dimensions.por.sizeHalf,
    height: Dimensions.px.size15,
    width: Dimensions.px.size15,
  },
});

export default useStyles;
