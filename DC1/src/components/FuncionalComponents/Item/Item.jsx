export const Item = ({ product }) => {
  return (
    <div>
      <h1>{product.brand}</h1>
      <h2>
        {product.name} {product.color}{" "}
      </h2>
    </div>
  );
};
