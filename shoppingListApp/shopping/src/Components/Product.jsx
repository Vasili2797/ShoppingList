import { React, useState } from "react";
import "../App.css";

const Product = ({
  id,
  prod,
  action,
  isProductDeleted,
  completed,
  checkedElementArr,
  setCheckedElementArr,
}) => {
  const foundElement = document.querySelector(".product-item");
  if (foundElement) {
    console.log("the found element: " + foundElement.innerText);
  }

  const checkedElementFunction = (e) => {
    if (checkedElementArr.includes(prod)) {
      // if product already exists in array then remove it
      // by filtering it out (only keep the products that aren't the current product)
      setCheckedElementArr(checkedElementArr.filter((ele) => ele != prod));
      return;
    }
    // otherwise, if product doesn't exist in array, then add it
    setCheckedElementArr([...checkedElementArr, prod]);
  };

  const style = {
    width: "500px",
  };

  return (
    <>
      <tr>
        <td key={id} style={style}>
          <input
            type="checkbox"
            style={{ marginRight: "20px" }}
            onClick={checkedElementFunction}
          />
          <span
            className={
              checkedElementArr?.includes(prod) ? "task-completed" : ""
            }
          >
            {prod}
          </span>
        </td>
        <td key={prod}>{action}</td>
      </tr>
    </>
  );
};

export default Product;
