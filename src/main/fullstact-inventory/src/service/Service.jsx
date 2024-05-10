import axios from "axios";
import { Component } from "react";

const addProd = "http://localhost:1234/insertProduct";
const updateProd = "http://localhost:1234/updateProduct";
const getAllProd = "http://localhost:1234/getAllProduct";
const deleteProd = "http://localhost:1234/deleteProduct/";
const deleteReq="http://localhost:1234/deleteRequest/";
const deleteRetail="http://localhost:1234/deleteRetailer/";

const addRetailer="http://localhost:1234/insertRetailer";

const getAllRequ="http://localhost:1234/getAllRequest";
const getAllRetail="http://localhost:1234/getAllRetailer";

const addReq="http://localhost:1234/insertRequest";

const autoPopProdId ="http://localhost:1234/AutopopProdIdList";
const autoPopRetId ="http://localhost:1234/AutopopRetIdList";

const autoPopProdName ="http://localhost:1234/AutopopProdNameList";


// const addRequest="http://localhost:1234/insertRequest";


class Service extends Component {

       AddProd = (prod) => {
          return axios.post(addProd, prod);
        };
      
        UpdateProd = (Record) => {
          console.log(Record);
          return axios.put(updateProd, Record);
        };
        GetAllProd = () => {
          return axios.get(getAllProd);
        };
        DeleteProduct = (id) => {
          return axios.delete(deleteProd + id);
        };

        DeleteRequest = (id) => {
          return axios.delete(deleteReq + id);
        };

        
        DeleteRetailer = (id) => {
          return axios.delete(deleteRetail + id);
        };


        AddRetailer = (retail) => {
          return axios.post(addRetailer, retail);
        };


        GetAllRequest = () => {
          return axios.get(getAllRequ);
        };

        GetAllRetail = () => {
          return axios.get(getAllRetail);
        };

        AddRequest = (request) => {
          return axios.post(addReq, request);
        };

        FindAllProdId = () => {
          return axios.get(autoPopProdId);
        };

        FindAllProdName = () => {
          return axios.get(autoPopProdName);
        };

        FindAllRetailId = () => {
          return axios.get(autoPopRetId);
        };

        // AddRequest = (req) => {
        //   return axios.post(addRequest, req);
        // };
}
const service = new Service();
export default service;




