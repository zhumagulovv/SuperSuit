import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProductById } from "../store/getProductById";

const useGetProductById = () => {
  const { id } = useParams();
  const { data, execute } = useProductById();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (id) {
        execute(id);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);
  return {data, id};
};

export default useGetProductById;
