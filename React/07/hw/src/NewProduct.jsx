import React from "react";
import { useState } from "react";

const NewProduct = () => {
  const [productsList, setProductsList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [users, setUsers] = useState(0);
  const [storage, setStorage] = useState(0);
  const [support, setSupport] = useState("");
  const [feature, setFeature] = useState("");

  function addProduct() {
    const newProduct = {
      productName: name,
      productPrice: price,
      users: users,
      storage: storage,
      support: support,
      otherFeature: feature,
    };
    setProductsList((productsList) => [...productsList, newProduct]);
    setName("");
    setPrice(0);
    setUsers(0);
    setStorage(0);
    setSupport("");
    setFeature("");
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changePrice(e) {
    setPrice(e.target.value);
  }

  function changeUsers(e) {
    setUsers(e.target.value);
  }
  function changeSupport(e) {
    setSupport(e.target.value);
  }
  function changeStorage(e) {
    setStorage(e.target.value);
  }

  function changeFeature(e) {
    setFeature(e.target.value);
  }

  function removeItem(indexEl) {
    setProductsList((productsList) =>
      productsList.filter((item, index) => index != indexEl)
    );
  }

  return (
    <>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <input
              className="w-100"
              onChange={changeName}
              value={name}
              placeholder="Product`s name"
              type="text"
            />
          </div>
          <div className="card-body">
            <input
              className="w-100"
              onChange={changePrice}
              value={price}
              placeholder="Product`s price"
              type="text"
            />
            <input
              className="w-100 mt-3"
              onChange={changeUsers}
              value={users}
              placeholder="Amount of users"
              type="text"
            />
            <input
              className="w-100"
              onChange={changeStorage}
              value={storage}
              placeholder="GB of storage"
              type="text"
            />
            <input
              className="w-100"
              onChange={changeSupport}
              value={support}
              placeholder="Type of support"
              type="text"
            />
            <input
              className="w-100 mb-4"
              onChange={changeFeature}
              value={feature}
              placeholder="Other features"
              type="text"
            />
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
              onClick={addProduct}
            >
              Add product
            </button>
          </div>
        </div>
      </div>

      {productsList.map((item, index) => {
        return (
          <>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">{item.productName}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    ${item.productPrice}
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{item.users} users included</li>
                    <li>{item.storage} GB of storage</li>
                    <li>{item.support} support</li>
                    <li>{item.otherFeature}</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={() => removeItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default NewProduct;
