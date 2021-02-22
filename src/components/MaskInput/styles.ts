import { createUseStyles } from 'react-jss';

import { Colors, Dimensions } from 'styles';

const baseInput = {
  borderRadius: Dimensions.px.size5,
  height: Dimensions.px.size40,
  marginTop: Dimensions.px.size10,
  outline: 0,
  paddingLeft: Dimensions.px.size5,
  width: Dimensions.por.sizeFull,
};

const useStyles = createUseStyles({
  input: {
    ...baseInput,
    border: `${Dimensions.px.size1} solid ${Colors.transparentGrayF5}`,
    '&:hover ': {
      border: `${Dimensions.px.size2} solid ${Colors.black}`,
    },
    '&:focus ': {
      border: `${Dimensions.px.size2} solid ${Colors.transparentGrayF5}`,
    },
  },
  inputError: {
    ...baseInput,
    border: `${Dimensions.px.size1} solid ${Colors.redF4}`,
    '&:focus ': {
      border: `${Dimensions.px.size2} solid ${Colors.redF4}`,
    },
    '&::placeholder ': {
      color: Colors.redF4,
    },
  },
  labelError: {
    margin: `${Dimensions.px.size6} ${Dimensions.px.size8} ${Dimensions.px.size0}`,
    color: Colors.redF4,
    fontSize: Dimensions.rem.sizeRem0_75,
    fontWeight: 400,
  },
});

export default useStyles;
