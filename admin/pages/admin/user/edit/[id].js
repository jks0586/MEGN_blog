import React from 'react'
import Admin from '../../../../components/Admin'
import Dataform from './../Dataform'
import { Breadcrumb ,Button} from 'react-bootstrap';
import { adminlink } from '../../../../config/adminlink';
import { useRouter } from 'next/router';
const edit = () => {

  const handleManageAll=(e)=>{
    router.push(adminlink.user.all);
  }


  return (
   <Admin>
   <div className="row">
    <div className="col-md-10">
    <Breadcrumb className="ms-3 w-80">
        <Breadcrumb.Item href={adminlink.user.all}>
           Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Create
        </Breadcrumb.Item> 
    </Breadcrumb>
    </div>
    <div className="col-md-2">
    <Button className="float-start" variant="outline-dark" onClick={handleManageAll}>Manage Users</Button>
    </div>
    </div>
    <Dataform/>
   </Admin>
  )
}

export default edit
