import React from "react";

import { useNavigate, Link } from "react-router-dom";
import Service from "../service/Service";



export default function AddRetailer() {
  let navigate = useNavigate();
  const [Record, setRecord] = React.useState({
    retId: "",
    retName: "",
    retPhoneNo: "",
    retAddress: "",
  });

  const { retName, retPhoneNo, retAddress } = Record;
  const onInputChange = (e) => {
    if (e.target.name === "retId") {
      setRecord({ ...Record, retailer: { prodId: e.target.value } });
    } else {
      setRecord({ ...Record, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(Record);
    await Service.AddRetailer(Record);
    alert("Retailer inserted Successfully");
    navigate("/retailer");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow ">
          <h4 className="text-center m-2">INSERT RETAILER DETAILS</h4>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name"  className="form-label float-start ">
                <b>Retailer Name</b>
              </label>
              <input
                type={"text"}
                id="retName" 
                className="form-control"
                placeholder="Enter Retailer Name"
                name="retName" 
                value={retName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName"  className="form-label float-start ">
                <b>Retailer Phone No</b>
              </label>
              <input
                type={"text"}
                id="retPhoneNo"
                className="form-control"
                placeholder="Enter Retailer phone no"
                name="retPhoneNo"
                value={retPhoneNo}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label float-start ">
                <b>Retailer Address</b>
              </label>
              <input
                type={"text"}
                id="retAddress"
                className="form-control"
                placeholder="Enter retailer address"
                name="retAddress"
                value={retAddress}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" data-testid="login-submit" className="btn btn-success" id="submit">
              Submit
            </button>
            <div data-testid="exist">
            <Link className="btn btn-dark mx-2" to="/addretailer">
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
              </svg>{""}
              Go-Back
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
