import React from "react";
import "../App.css";

const ProductsPage = ({ id, prod, action, isProductDeleted, completed }) => {
  const foundElement = document.querySelector(".product-item");
  if (foundElement) {
    console.log("the found element: " + foundElement.innerText);
  }

  const checkedElementArray = [];
  const checkedElementFunction = (e) => {
    console.log("The id after clicking the checkbox: " + id);
    console.log("the checked element " + prod);
    checkedElementArray.push(prod);
    return id;
  };

  const style = {
    width: "500px",
  };

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
            <td key={id} style={style}>
              <input
                type="checkbox"
                style={{ marginRight: "20px" }}
                onClick={checkedElementFunction}
              />
              <span>{prod}</span>
            </td>
            <td key={prod}>{action}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductsPage;
