import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { useRouter } from 'next/router';
import React, { useEffect,useCallback, useMemo, useRef, useState } from 'react'
import { Breadcrumb, Button } from 'react-bootstrap';
import Admin from '../../../components/Admin'
import { adminlink } from '../../../config/adminlink';
import laxios from '../../../config/laxios';
import { routeslink } from '../../../config/routeslink';
import * as Fa from "react-icons/fa";
import swal from 'sweetalert';
import libphonenumber from 'google-libphonenumber';
import Image from 'next/image';
const index = () => {

  const router = useRouter();
  const gridRef = useRef();

  const [rowData, setRowData] = useState([]);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100vh' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  // useEffect(() => {
  //   const utilsphone=libphonenumber.PhoneNumberUtil.getInstance();
  //   const number = utilsphone.parseAndKeepRawInput('202-456-1414', 'US');
  //   console.log(number);
  //   console.log(number.getCountryCode());
  //   console.log(number.getNationalNumber());
  //   console.log(number.getExtension());
  //   console.log(number.getCountryCodeSource());
  //   console.log(number.getItalianLeadingZero());
  // }, [libphonenumber])
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter:true,
    resizable: true,
  }));

  // Example load data from sever
  const onGridReady = useCallback((params) => {
    laxios
        .get(routeslink.post.all)
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
      router.push(routeslink.post.edit.replace(":id",actionnode.dataset.id));
    }
  }

  const handleCreate=(e)=>{
    router.push(adminlink.post.create);
  }
  const handleDelete= async (e)=>{
    const actionnode=e.target.parentElement.parentElement;
    console.log(actionnode.dataset.id);
    if(actionnode.dataset.id!==undefined){
    laxios
          .delete(routeslink.post.delete.replace(":id",actionnode.dataset.id))
          .then((response) => {
            if(response.status==200){
              swal("Congratulations!", "Post has been removed successfully", "success").then((value) => {
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
    { headerName:'Name',field: 'name' },
    { headerName:'Description',field: 'description' },
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
        <Breadcrumb.Item href={adminlink.post.all}>
           Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Post List
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
    
  )
}

export default index
