import { makeStyles } from '@material-ui/styles';

import { Colors, Dimensions } from 'styles';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: Colors.blue03,
    padding: Dimensions.px.size15,
  },
}));

export default useStyles;
