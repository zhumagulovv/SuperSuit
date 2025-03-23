import { useEffect } from "react";
import { useProducts } from "../store/getProducts";

const useGetProducts = () => {
  const { data, loading, execute } = useProducts();

  useEffect(() => {
    const timer = setTimeout(() => {
      execute();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
};

export default useGetProducts;
