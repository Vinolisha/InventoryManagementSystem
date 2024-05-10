import React from "react";

import { useNavigate, Link } from "react-router-dom";
import Service from "../service/Service";
import { useEffect } from "react";

export default function AddRequest() {
  let navigate = useNavigate();
  const [Record, setRecord] = React.useState({
    reqId: "",
    reqQuantity: "",

    retailer: { retId: "", retName: "", retPhoneNo: "", retAddress: "" },

    product: {
      prodId: "",
      prodName: "",
      sellingPrice: "",
      purchaseRate: "",
      availStock: "",
    },
  });

  const [idList, setidList] = React.useState([]);
  const [nameList, setNameList] = React.useState([]);

  useEffect(() => {
    Service.GetAllRetail().then((res) => {
      console.log(res.data);
      setidList(res.data);
    });

    // try {
    //   const res = Service.();
    //   setidList(res.data);
    // } catch (error) {
    //   console.error(error);
    // }

    Service.GetAllProd().then((res) => {
      console.log(res.data);
      setNameList(res.data);
    });

    // try {
    //   const res = Service.GetAllProd();
    //   setNameList(res.data);
    // } catch (error) {
    //   console.error(error);
    // }
  },
   []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Record);
    console.log(Record.product.prodId);
    Service.AddRequest(Record)
      .then((rest) => {
        console.log("saved" + Record + rest);
        alert("Request Send Successfully");
        navigate("/request");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow ">
          <h4 className="text-center m-2">SEND REQUEST DETAILS</h4>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label for="colFormLabelLg" className="form-label float-start ">
                <b>Retailer Name</b>
              </label>
              <select
                required
                type={"text"}
                id="retId"
                role="Retail-name"
                className="form-control"
                name="retName"
                onChange={(e) => {
                  console.log(e.target.value + ": " + e.target.name);

                  setRecord({
                    ...Record,
                    retailer: { retId: e.target.value },
                  });
                }}
              >
                <option value={""}>Select one</option>

                {idList.map((ret) => (
                  <option key={ret.retId} value={ret.retId}>
                    {ret.retName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label 
                for="colFormLabelLg"
                role="Product-name"
                className="form-label float-start "
              >
                <b>Product Name</b>
              </label>
              <select
                required
                type={"text"}
                id="prodId"
                className="form-control"
                name="prodName"
                onChange={(e) => {
                  console.log(e.target.value + ": " + e.target.name);
                  setRecord({
                    ...Record,
                    product: { prodId: e.target.value },
                  });
                }}
              >
                <option value={""}>Select one</option>
                {nameList.map((item) => (
                  <option key={item.prodId} value={item.prodId}>
                    {item.prodName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label float-start ">
                <b>Quantity</b>
              </label>
              <input
                type="text"
                id="reqQuantity"
                role="quantity"
                className="form-control" 
                placeholder="Enter the Quantity"
                name="reqQuantity"
                onChange={(e) =>
                  setRecord({ ...Record, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Send
            </button>
            <div data-testid="exist">
            <Link className="btn btn-dark mx-2" to="/Request">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
              </svg>{" "}
              Go-Back
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
