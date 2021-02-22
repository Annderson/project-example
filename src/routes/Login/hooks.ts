import { useCallback } from 'react';

import { useFormValue } from 'hooks/use-form-input';

interface LoginTestHook {
  name: string;
  password: string;
  handleSendCredentials: () => void;
  setName: () => void;
  setPassword: () => void;
}

const useLoginTest = (): LoginTestHook => {
  const [name, setName] = useFormValue('');
  const [password, setPassword] = useFormValue('');

  const handleSendCredentials = useCallback((): void => {
    // eslint-disable-next-line no-console
    console.log('send credentials');
  }, []);

  return {
    name,
    password,
    handleSendCredentials,
    setName,
    setPassword,
  };
};

export default useLoginTest;
