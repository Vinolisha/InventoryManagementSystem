import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {FaTrashAlt,FaEye,FaEdit} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Service from "../service/Service";

export default function Request() {
  let navigate = useNavigate();

  const [Record, setRecord] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadRecord();
  }, []);

  const loadRecord = async () => {
    console.log("hii");
    await Service.GetAllRequest().then((res) => setRecord(res.data)).catch((err) => alert(err));
  };


  return (
    <div className="container">
      <div className="col-4">
        <div className="col-sm-30 mb-4 mt-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              role="searchbox"
              placeholder="Enter the name to search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
        </div>
        <Link className="btn btn-dark m-2" to="/addrequest" id="addRequest">
        Add Request <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
</svg></b>
      </Link>

      </div>
      <div className="">
        
        <table class="table table-transparent table-striped shadow ">
          <thead>
            <tr>
            <th scope="col"> Request Id</th>
              <th scope="col">Quantity</th>
              <th scope="col">Retaile Name</th>
              <th scope="col">Retailer No</th>
              <th scope="col">Retailer Address</th>
              <th scope="col">Product Name</th>
              
              <th scope="col">Purchase Rate</th>
              <th scope="col">Available Stock</th>
              <th scope="col">Action</th>
             
             
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>

          <tbody className="text-center">
            {Record.filter((st) =>
            st.reqQuantity.toLowerCase().includes(search))
            .map((request, index) => (
              <tr>
                <th scope="row" key={index}>
                  {request.reqId}
                </th>

                <td>{request.reqQuantity}</td>
               
                <td>{request.retailer ? request.retailer.retName : ""}</td>
                <td>{request.retailer ? request.retailer.retPhoneNo : ""}</td>
                <td>{request.retailer ? request.retailer.retAddress : ""}</td>
                
                <td>{request.product ? request.product.prodName : ""}</td>
                
                <td>{request.product ? request.product.purchaseRate : ""}</td>
                <td>{request.product ? request.product.availStock : ""}</td>

                <td className="">
                    <Link
                      className="btn btn-dark mx-2"
                      to={`/updatedep/${request.reqId}`}
                    >
                      <FaEdit />
                    </Link>
                  
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <Link className="btn btn-light m-2" to="/" id="add">
          
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg> Back</Link>
      </div>
    </div>
  );
}
