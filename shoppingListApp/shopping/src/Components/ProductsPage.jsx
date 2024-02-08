import React, { useRef } from "react";

const ProductsPage = ({ id, prod, action, isProductDeleted, completed }) => {
  const checkbox = useRef(null);

  function toggleTodo(id) {
    // console.log("The check status " + checkbox.current.checked);
    if (checkbox.current.checked) {
      const checkedElement = document.getElementById(id);
      document.body.style.textDecoration = "line-through";
      checkedElement.style.textDecoration = "line-through";
    }
  }

  const handleChange = (event) => {
    this.setState({ boxAll: event.target.checked }, () => {
      console.log("This returned true or false", this.state.boxAll);
    });
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
            <td key={id}>
              <input
                type="checkbox"
                style={{ marginRight: "20px" }}
                onChange={(e) => {
                  console.log("The id after clicking he checkbox: " + id);
                  //   toggleTodo(id);
                  return id;
                }}
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
