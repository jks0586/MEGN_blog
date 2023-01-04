import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Admin from "../../../components/Admin";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import * as Fa from "react-icons/fa";
import parse from "html-react-parser";
import { routeslink } from "../../../config/routeslink";
import { adminlink } from "../../../config/adminlink";
import laxios from '../../../config/laxios';
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import { Breadcrumb, Button } from "react-bootstrap";
const index = () => {
  const router = useRouter();
  const gridRef = useRef();
  
  const [rowData, setRowData] = useState([]);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100vh' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter:true,
    resizable: true,
  }));


   // Example load data from sever
   const onGridReady = useCallback((params) => {
    laxios
        .get(routeslink.user.all)
        .then((response) => {
            // console.log(response.data);
            setRowData(response.data);
        })
        .catch((err) => console.log(err));

        gridRef.current.api.sizeColumnsToFit({
          defaultMinWidth: 100,
          columnLimits: [{ key: 'country', minWidth: 900 }],
        });

  }, []);

   // Example using Grid's API
   const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
}, []);

const handleEdit=(e)=>{
  const actionnode=e.target.parentElement.parentElement;
  console.log(actionnode.dataset.id);
  if(actionnode.dataset.id!==undefined){
    router.push(routeslink.user.edit.replace(":id",actionnode.dataset.id));
  }
}

const handleCreate=(e)=>{
  router.push(adminlink.user.create);
}
const handleDelete= async (e)=>{
  const actionnode=e.target.parentElement.parentElement;
  console.log(actionnode.dataset.id);
  if(actionnode.dataset.id!==undefined){
  laxios
        .delete(routeslink.user.delete.replace(":id",actionnode.dataset.id))
        .then((response) => {
          if(response.status==200){
            swal("Congratulations!", "User has been removed successfully", "success").then((value) => {
              // router.push(adminlink.user.all);
              router.reload(window.location.pathname)
            });;
          }
        })
        .catch((err) => {
           console.log(err);
        }
          );
      }
}


const [columnDefs] = useState([
    { headerName:'Id',field: '_id' },
    { headerName:'User Name',field: 'username' },
    { headerName:'Email',field: 'email' },
    { headerName:'Action',field: '_id',cellRenderer: params => {
      return  (
        <>
        <span onClick={handleEdit} data-id={params.value}><Fa.FaPenAlt></Fa.FaPenAlt></span> | <span  data-id={params.value} onClick={handleDelete}><Fa.FaTrashAlt></Fa.FaTrashAlt></span>
        </>
        );
    } },
    
    
])

	return (
		<Admin>
    <div className="row">
    <div className="col-md-10">
    <Breadcrumb className="ms-3 w-80">
        <Breadcrumb.Item href={adminlink.user.all}>
           Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Users List
        </Breadcrumb.Item>
        
        
    </Breadcrumb>
    </div>
    <div className="col-md-2">
    <Button className="float-start" variant="outline-dark" onClick={handleCreate}>Create</Button>
    </div>
    </div>

    <div style={containerStyle}>
        {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
        <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
                ref={gridRef} // Ref for accessing Grid's API
                rowData={rowData} // Row Data for Rows
                columnDefs={columnDefs} // Column Defs for Columns
                defaultColDef={defaultColDef} // Default Column Properties
                onGridReady={onGridReady}
                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                rowSelection='multiple' // Options - allows click selection of rows
                // onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />
        </div>
    </div>

		</Admin>
	);
};

export default index;
