    import React from 'react'

    import { useNavigate, Link} from "react-router-dom";
    import Service from '../service/Service';
    import { useEffect } from 'react';

    export default function AddProduct() {
      let navigate = useNavigate();
      const [Record, setRecord] = React.useState({
        prodId:"",
        prodName:"",
        sellingPrice:"",
        purchaseRate:"",
        availStock:""
    });

    const {prodId, prodName, sellingPrice, purchaseRate, availStock} = Record;
    const onInputChange =(e) => {
        if(e.target.name === 'prodId'){
        setRecord({...Record,product:{prodId:e.target.value}})
    }
        else{
            setRecord({...Record,[e.target.name]: e.target.value });
        }
    };



            const onSubmit = async(e) => {
                e.preventDefault();
                console.log(Record);
                await Service.AddProd(Record);
                alert("Product inserted Successfully");
                navigate("/product");
            };

        return (
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow ">
                  <h4 className="text-center m-2">INSERT PRODUCT DETAILS</h4>
        
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                      <label htmlFor="Name" role="label" className="form-label float-start ">
                        <b>Product Name</b>
                      </label>
                      <input
                        type={"text"}
                        id="prodName"
                        className="form-control"
                        placeholder="Enter Product Name"
                        name="prodName"
                        value={prodName}
                        onChange={(e) => onInputChange(e)}
                      />
                    
                    </div>
                    <div className="mb-3">
                      <label htmlFor="LastName" role="price" className="form-label float-start ">
                        <b>selling Price</b>
                      </label>
                      <input
                        type={"text"}
                        id="sellingPrice"
                        className="form-control"
                        placeholder="Enter selling price"
                        name="sellingPrice"
                        value={sellingPrice}
                        onChange={(e) => onInputChange(e)}
                      />
                    
                    
                    </div>
                    <div className="mb-3">
                      <label htmlFor="LastName" role="rate" className="form-label float-start ">
                        <b>purchased Rate</b>
                      </label>
                      <input
                        type={"text"}
                        id="purchaseRate"
                        className="form-control"
                        placeholder="Enter purchased rate"
                        name="purchaseRate"
                        value={purchaseRate}
                        onChange={(e) => onInputChange(e)}
                      />
                      <div className="mb-3">
                      <label htmlFor="LastName" role="stock" className="form-label float-start ">
                        <b>Available Stock</b>
                      </label>
                      <input
                        type={"text"}
                        id="availStock"
                        className="form-control"
                        placeholder="Enter available stock"
                        name="availStock"
                        value={availStock}
                        onChange={(e) => onInputChange(e)}
                      />
                    
                    
                    </div>
                    
                    
                    </div>
                    <button type="submit" data-testid="login-submit" className="btn btn-success" id="submit">
                      Submit
                    </button>
                    <div data-testid="exist">
                    <Link className="btn btn-dark mx-2" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
    </svg> Go-Back
                    </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }
        





