import { makeStyles } from '@material-ui/styles';

import { Layout, Dimensions, Colors } from 'styles';

const useStyles = makeStyles(() => ({
  container: {
    ...Layout.centered,
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  header: {
    backgroundColor: Colors.transparent,
    padding: Dimensions.px.size10,
    width: '100vw',
  },
  sideMenuHeader: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    display: 'flex',
    padding: Dimensions.px.size20,
    width: '100vw',
  },
}));

export default useStyles;
