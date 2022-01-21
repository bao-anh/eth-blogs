import { useSelector } from 'react-redux';

const useContractSelector = () => {
  const animeContract = useSelector((state) => state.contract.animeContract);
  const todoContract = useSelector((state) => state.contract.todoContract);

  return { animeContract, todoContract };
};

export default useContractSelector;
