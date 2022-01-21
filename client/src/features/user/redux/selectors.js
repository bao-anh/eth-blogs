import { useSelector } from 'react-redux';

const useUserSelector = () => {
  const userAccount = useSelector((state) => state.user.account);

  return { userAccount };
};

export default useUserSelector;
