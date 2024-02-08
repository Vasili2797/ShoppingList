import React, { useEffect, useRef, useState } from "react";
import ProductsPage from "./ProductsPage";

const FirstPage = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [line, setLine] = useState("");
  const [checkedProducts, setCheckedProducts] = useState([]);

  const handleInputChange = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = () => {
    if (product.trim()) {
      setProducts([...products, product.trim()]);
      setProduct("");
    }
  };

  const handleDelete = (id) => {
    if (checkedProducts.id === products.id) {
      products.splice(id, 1);
    }
  };

  console.log("The deleted Products: " + checkedProducts);

  return (
    <>
      <label htmlFor="ProductInput">Product Name:</label>
      <input
        type="text"
        placeholder="prod..."
        className="ms-3"
        value={product}
        onChange={handleInputChange}
      />
      <button className="btn btn-success ms-2 mt-2 w-25" onClick={handleSubmit}>
        Add
      </button>
      <h1 className="m-2">Products:</h1>
      <ul>
        {products.map((product1, index1) => {
          console.log(index1);
          return (
            <>
              
              <ProductsPage
                id={index1}
                key={index1}
                prod={product1}
                isProductDeleted={checkedProducts.includes(index1)}
                completed={false}
                
                action={
                  
                  <div className="input-group">
                    <button
                      // id={index1}
                      className="btn btn-danger ms-2"
                      onClick={() => {
                        setCheckedProducts([...checkedProducts, index1]);
                        handleDelete(index1);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                }
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default FirstPage;
