import "./usertable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from 'xlsx/xlsx.mjs';
import Button from '@mui/material/Button';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Usertable = () => {  
  const [users, setUser] = useState([]);

  

  useEffect(() => {
    loadUsers();
  }, []);

// load Userdata from json server
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    console.log(setUser)
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
// lets create columns for user table by rendering cell
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullname",
      headerName: "FullName",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="cellUser">
            
            {params.row.name}
          </div>
        );
      },
    },
    
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "institution",
      headerName: "Institution",
      width: 110,
    },
    {
      field: "country",
      headerName: "Country",
      width: 200,
    },
    

    
  ];



// lets create buttons and action tab 
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteUser(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  const downloadExcel=()=>{  
    console.log(users)
   
    const workSheet=XLSX.utils.json_to_sheet(users)
    
    const workBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook,workSheet,"user")
    //Buffer
    let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
    //Binary string
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    //Download
    XLSX.writeFile(workBook,"UserData.xlsx")


  }



  return (
    
    <div className="usertable" style={{ fontSize: '10px', width: '100%' }}>
      <div className="usertableTitle"> Users
      <div className="download"><Button variant="outlined" startIcon={<DownloadForOfflineIcon/>} onClick={() => { downloadExcel() }}>Download</Button></div>
        <Link to="/users/new" className="link">
          Register New User
        </Link>      
      </div>
      <DataGrid      
        className="usergrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
   
  );
};

export default Usertable;
