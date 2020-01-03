import {useEffect, useState} from 'react';

import {getBalanceSumByDate} from '~/services/Balance';

const useBalance = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([]);

  useEffect(() => {
    async function loadBalanceSumByDate() {
      const data = await getBalanceSumByDate(days);
      setBalanceSum([...data]);
    }

    loadBalanceSumByDate();
  }, [days]);

  return [balanceSum];
};

export default useBalance;
