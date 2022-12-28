import React from 'react'
import Admin from '../../../components/Admin'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";


const names = [
  {
    "title" : "mr",
    "firstname" : "Lawson",
    "lastname" : "Luke",
    "age" : 28,
    "occupation" : "Software Developer",
    "hobby" : "coding"
  },
  {
    "title" : "mr",
    "firstname" : "Michael",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  },
  {
    "title" : "mr",
    "firstname" : "Janet",
    "lastname" : "Jackson",
    "age" : 35,
    "occupation" : "Singer",
    "hobby" : "dancing"
  }
]


const index = () => {
  return (
    <Admin>
      <div>
      <div className="container-fluid py-4">
      <div className="table-responsive p-0 pb-2">
    <table id="table" className="table align-items-center justify-content-center mb-0">
        <thead>
            <tr>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">S/N</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Title</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Name</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Age</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Hobby</th>
            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Occupation</th>
<th></th>
</tr>
        </thead>

        <tbody>
                
        </tbody>
    </table>
        </div>
        </div>
      </div>
    </Admin>
    
  )
}

export default index
