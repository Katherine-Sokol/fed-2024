import React from "react";
import { useContext } from "react";
import { ProductContext } from "./PricePage";

function Product(props) {
  const { chooseProduct } = useContext(ProductContext);

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">{props.productName}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${props.productPrice}
            <small className="text-body-secondary fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{props.users} users included</li>
            <li>{props.storage} GB of storage</li>
            <li>{props.support} support</li>
            <li>{props.otherFeature}</li>
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={() => chooseProduct(props)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
