import { useEffect, useState } from "react";

const useProducts = () => {
  const [perfumes, setPerfumes] = useState([]);
  useEffect(() => {
    const url = "https://perfumes-granary-server.vercel.app/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);
  return [perfumes, setPerfumes];
};

export default useProducts;
