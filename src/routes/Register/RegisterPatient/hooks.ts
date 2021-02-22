import { useEffect } from 'react';

import { useFormValue } from 'hooks/use-form-input';

interface RegisterPatientHook {
  name: string;
  password: string;
  setName: () => void;
  setPassword: () => void;
}

const useRegisterPatient = (): RegisterPatientHook => {
  const [name, setName] = useFormValue('');
  const [password, setPassword] = useFormValue('');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect((): void => {}, []);

  return {
    name,
    password,
    setName,
    setPassword,
  };
};

export default useRegisterPatient;
