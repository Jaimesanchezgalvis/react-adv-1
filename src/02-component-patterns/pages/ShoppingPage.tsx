import { ProductButtons, ProductImage, ProductTitle } from "../components/";

import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Cafe"} />
          <ProductCard.Buttons
            counter={0}
            increaseBy={function (value: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"hola mundo"} />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};