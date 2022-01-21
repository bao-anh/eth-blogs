import { useSelector } from 'react-redux';

const useContractSelector = () => {
  const animeContract = useSelector((state) => state.contract.animeContract);

  return { animeContract };
};

export default useContractSelector;
