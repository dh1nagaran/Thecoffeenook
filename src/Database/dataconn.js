import { useEffect, useState } from "react";

const useConn = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const api = async () => {
      try {
        let res = await fetch("http://localhost:5000/products");
        let data = await res.json();
        setProducts(data); 
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };

    api();
  }, []);

  return { products, load };
};

export default useConn;
