import { products } from "../../data/products";
import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../../components/FuncionalComponents/ItemList/ItemList";

export const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ItemList productList={productList} />
    </div>
  );
};
