import { useEffect } from 'react';

import { useFormValue } from 'hooks/use-form-input';

interface MaskInputHook {
  dataInput: string;
  setDataInput: () => void;
}

const useMaskInput = (): MaskInputHook => {
  const [dataInput, setDataInput] = useFormValue('');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect((): void => {
    console.log('dataInput ', dataInput);
  }, [dataInput]);

  return {
    dataInput,
    setDataInput,
  };
};

export default useMaskInput;
