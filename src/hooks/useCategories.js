import {useEffect, useState} from 'react';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '~/services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [allCategories, setAllCategories] = useState();
  const [initCategory, setInitCategory] = useState();

  useEffect(() => {
    async function loadDebitCategories() {
      const data = await getDebitCategories();
      setDebitCategories(data);
    }

    async function loadCreditCategories() {
      const data = await getCreditCategories();
      setCreditCategories(data);
    }

    async function loadAllCategories() {
      const data = await getAllCategories();
      setAllCategories(data);
    }

    async function loadInitCategory() {
      const data = await getInitCategories();
      setInitCategory(data);
    }

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategory();
  }, []);

  return [debitCategories, creditCategories, allCategories, initCategory];
};

export default useCategories;
