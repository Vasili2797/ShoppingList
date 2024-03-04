import React, { useState } from "react";
import Product from "./Product";
import "../App.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [deletedProducts, setDeletedProducts] = useState([]);

  const [checkedElementArr, setCheckedElementArr] = useState([]);

  const handleInputChange = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = () => {
    if (products.indexOf(product.trim()) > -1) {
      console.log("The item already exists");
      setProduct("");
    }
    if (products.indexOf(product.trim()) === -1) {
      setProducts([...products, product.trim()]);
      setProduct("");
    }
  };

  const handleDelete = (id) => {
    if (deletedProducts.id === products.id) {
      products.splice(id, 1);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex btn-lg ms-2"
      >
        <label htmlFor="ProductInput">Product</label>
        <input
          type="text"
          placeholder="prod..."
          className="ms-3"
          value={product}
          onChange={handleInputChange}
        />
        <button className="btn btn-lg btn-success ms-3" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
      <h1 className="m-2">Products:</h1>
      <ul>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product1, index1) => {
              return (
                <>
                  <Product
                    id={index1}
                    key={product1}
                    prod={product1}
                    isProductDeleted={deletedProducts.includes(index1)}
                    completed={false}
                    action={
                      <div className="input-group">
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            setDeletedProducts([...deletedProducts, index1]);
                            handleDelete(index1);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    }
                    checkedElementArr={checkedElementArr}
                    setCheckedElementArr={setCheckedElementArr}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </ul>
    </>
  );
};

export default Dashboard;
