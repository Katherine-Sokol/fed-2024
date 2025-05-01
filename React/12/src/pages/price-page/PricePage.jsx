// import NewProduct from "./NewProduct";
import Product from "./Product";
import { createContext, useState } from "react";
import Basket from "./Basket";

export const ProductContext = createContext();

function PricePage() {
  const [products, setProducts] = useState([
    {
      productName: "Enterprise",
      productPrice: 29,
      users: 30,
      storage: 15,
      support: "Phone and email",
      otherFeature: "Help center access",
    },
    {
      productName: "Pro",
      productPrice: 15,
      users: 20,
      storage: 10,
      support: "Priority email",
      otherFeature: "Help center access",
    },
    {
      productName: "Free",
      productPrice: 0,
      users: 10,
      storage: 2,
      support: "Email",
      otherFeature: "Help center access",
    },
  ]);

  const [chosenProducts, setChosenProducts] = useState([]);

  function chooseProduct(product) {
    setChosenProducts((chosenProduct) => [...chosenProduct, product]);
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <ProductContext.Provider
          value={{
            chosenProducts,
            products,
            chooseProduct,
            setChosenProducts,
          }}
        >
          {products.map((product, index) => {
            return (
              <Product
                productName={product.productName}
                productPrice={product.productPrice}
                users={product.users}
                storage={product.storage}
                support={product.support}
                otherFeature={product.otherFeature}
                key={index}
                index={index}
                onChooseProduct={chooseProduct}
              ></Product>
            );
          })}
          <Basket></Basket>
        </ProductContext.Provider>
      </div>
    </>
  );
}

export default PricePage;
