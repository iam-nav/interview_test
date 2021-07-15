import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {useSelector} from "react-redux"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from '../Components/Navbar'
import Button from "../Components/Button"
import { Jumbotron, Container } from 'reactstrap';

const columnDefs= [
    {
      headerName: "Name",
      field: "name",
      width: 150,
      filter: false,
      checkboxSelection: true,
    },
    {
        headerName: "Price",
        field: "price",
        width: 140,
        editable:true
      },
    {
      headerName: "Quantity",
      field: "quantity",
      width: 140,
      editable:true
    },
    {
      headerName: "Total",
      filter: "agNumberColumnFilter",
      type: "totalColumn",
      valueGetter: "data.quantity * data.price",
      editable: false,
      aggFunc: "sum",
      cellClass: "total-col",
    },
  ]

const App = () => {
    const productsAddInCart = useSelector((state) =>state.cartProducts.cartList);
   return (
       <>
        <Navbar />
       <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Products in Cart</h1>
          <div style={{  display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
       <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
       <AgGridReact
        gridOptions={{}}
        rowSelection="multiple"
        columnDefs={columnDefs}
        rowData={productsAddInCart}
        colResizeDefault={"shift"}
        pivotPanelShow="always"
        />
       </div>
       </div>
        </Container>
        <br />
        <div style={{  display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
       <Button text={"Updated Cart"} />
       </div>
      </Jumbotron>
       </>
   );
};

export default App