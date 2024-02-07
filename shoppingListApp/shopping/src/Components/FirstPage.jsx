import React, { useEffect, useRef, useState } from "react";

const FirstPage = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [line, setLine] = useState("");

  const handleInputChange = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = () => {
    if (product.trim()) {
      setProducts([...products, product.trim()]);
      setProduct("");
    }
    };
    
    useEffect(() => {
        document.body.style.textDecoration=line
    }, [line])

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
          return (
            <div className="input-group">
              <li key={index1}>{product1}</li>
              <button
                className="btn btn-danger ms-2"
                onClick={() => {
                  setLine("line-through");
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default FirstPage;
