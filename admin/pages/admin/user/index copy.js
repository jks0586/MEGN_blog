import React,{useEffect} from "react";
import Admin from "../../../components/Admin";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import * as Fa from 'react-icons/fa';
import parse from 'html-react-parser';
import {routeslink} from '../../../config/routeslink';
// import { parse } from "dotenv";
// const names = [
// 	{
// 		title: "mr",
// 		firstname: "Lawson",
// 		lastname: "Luke",
// 		age: 28,
// 		occupation: "Software Developer",
// 		hobby: "coding",
// 	},
// 	{
// 		title: "mr",
// 		firstname: "Michael",
// 		lastname: "Jackson",
// 		age: 35,
// 		occupation: "Singer",
// 		hobby: "dancing",
// 	},
// 	{
// 		title: "mr",
// 		firstname: "Janet",
// 		lastname: "Jackson",
// 		age: 35,
// 		occupation: "Singer",
// 		hobby: "dancing",
// 	},
// ];


const index = () => {

  const editRow=(e)=>{
alert('jjj');
  }
  useEffect(() => {
// console.log(routlink.admin.all);
    if (!$.fn.DataTable.isDataTable("#tableadmin")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#tableadmin").DataTable({
            "bDestroy": true,
            ajax:routeslink.baseurl+routeslink.admin.all,
            pagingType: "full_numbers",
            pageLength: 20,
            searchDelay: 500,
            processing: true,
            paging: true,
            select: {
              style: "single",
            },
            columns: [
                { data: '_id' },
                { data: 'username' },
                { data: 'email' },
                { data: 'createdAt' },
                { 
                  data: null ,
                  render: function ( data, type, row ) {
                    
                    return (
                      <>
                      <a class="edit" href="#" onClick={(e)=>editRow(data._id)} data-id="'+data._id+'">edit</a> | <a href="#" class="delete" data-id="'+data._id+'">delete</a>
                      </>
                      );
                }
              }
            ],
            buttons: [
              {
                extend: "pageLength",
                className: "text-dark btn btn-secondary bg-secondary",
              },
              {
                extend: "copy",
                className: "text-dark btn btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "text-dark btn btn-secondary bg-secondary",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "text-dark btn btn-secondary bg-secondary",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
          });
        }, 1000);
      });
    }
  }, [])
	return (
		<Admin>
			<div>
				<div className="container-fluid py-4">
					<div className="table-responsive p-0 pb-2">
						<table
							id="tableadmin"
							className="table align-items-center justify-content-center mb-0">
							<thead>
								<tr>
                <th className="text-uppercase text-dark  text-sm font-weight-bolder opacity-7 ps-2">
										_id
									</th>
									<th className="text-uppercase text-dark  text-sm font-weight-bolder opacity-7 ps-2">
										User Name
									</th>
									<th className="text-uppercase text-dark  text-sm font-weight-bolder opacity-7 ps-2">
										Email
									</th>
									<th className="text-uppercase text-dark  text-sm font-weight-bolder opacity-7 ps-2">
										Created At
									</th>
									<th className="text-uppercase text-dark  text-sm font-weight-bolder opacity-7 ps-2">
										Action
									</th>
								</tr>
							</thead>

							<tbody>
             
              </tbody>
						</table>
					</div>
				</div>
			</div>
		</Admin>
	);
};

export default index;
