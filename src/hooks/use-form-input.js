import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFormValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  const setFormValue = useCallback(
    evt => {
      setValue(evt.target.value);
    },
    [setValue],
  );

  const setFormRawValue = useCallback(
    rawValue => {
      setValue(rawValue);
    },
    [setValue],
  );

  const resetValue = useCallback(() => {
    setValue(initialValue);
  }, [setValue, initialValue]);

  return [value, setFormValue, resetValue, setFormRawValue];
};

export default {
  useFormValue,
};
