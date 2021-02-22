interface UserState {
  name: string;
}

const user = (state: UserState | undefined): UserState => {
  return state || { name: '' };
};

export default user;
