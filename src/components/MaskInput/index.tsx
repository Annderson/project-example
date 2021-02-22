import React from 'react';
import InputMask from 'react-input-mask';

import useStyles from 'components/MaskInput/styles';
import useMaskInput from 'components/MaskInput/hooks';

interface Props {
  label: string;
  mask: string;
}

const MaskInput = ({ label, mask }: Props): JSX.Element => {
  const classes = useStyles();
  const { dataInput, setDataInput } = useMaskInput();
  return (
    <InputMask
      className={classes.input}
      mask={mask}
      value={dataInput}
      placeholder={label}
      onChange={setDataInput}
    />
  );
};

export default MaskInput;
