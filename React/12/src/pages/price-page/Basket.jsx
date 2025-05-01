import React from "react";
import { useContext } from "react";
import { ProductContext } from "./PricePage";

function Basket(props) {
  const { chosenProducts, setChosenProducts } = useContext(ProductContext);

  function deleteProduct(indexEl) {
    setChosenProducts((chosenProducts) =>
      chosenProducts.filter((item, index) => index != indexEl)
    );
  }

  function countPrice() {
    let count = 0;
    if (chosenProducts.length > 0) {
      for (let index = 0; index < chosenProducts.length; index++) {
        count = count + chosenProducts[index].productPrice;
      }
    }
    return count;
  }

  return (
    <div className="container">
      <div className="row">
        <h3>Products</h3>
      </div>
      <div className="row">
        <ul className="list-group">
          {chosenProducts.map((productInfo, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={index}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{productInfo.productName}</div>
                  {productInfo.productPrice}
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(index)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="row">Total price: {countPrice()}</div>
    </div>
  );
}

export default Basket;
