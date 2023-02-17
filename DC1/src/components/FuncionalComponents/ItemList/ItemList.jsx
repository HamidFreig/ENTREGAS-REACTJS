import { Item } from "../Item/Item";

export const ItemList = ({ productList }) => {
  return (
    <div>
      {productList.map((product, index) => (
        <div key={index}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};
