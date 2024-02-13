import React, { useState } from "react";

const ProductsPage = ({ id, prod, action, isProductDeleted, completed }) => {
  const checkedElementArray = [];
  const checkedElementFunction = (e) => {
    console.log("The id after clicking the checkbox: " + id);
    console.log("the checked element " + id);
    checkedElementArray.push(prod);
    return id;
  };

  const [strikeThroughCSS, setStrikeThroughCSS] = useState(false);

  console.log(checkedElementArray);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key={id} style={{ width: "500px" }}>
              <input
                type="checkbox"
                style={{ marginRight: "20px" }}
                onClick={() => setStrikeThroughCSS((prev) => !prev)}
                onChange={checkedElementFunction}
              />
              {prod}
            </td>
            <td key={prod}>{action}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductsPage;
