import "./jobtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from 'xlsx/xlsx.mjs';
import Button from '@mui/material/Button';

const Jobtable = () => {

  const [jobs, setJob] = useState([]);

  

  useEffect(() => {
    loadJobs();
  }, []);


  // load Jobsdata from json server
  const loadJobs = async () => {
    const result = await axios.get("http://localhost:3003/jobs");
    setJob(result.data.reverse());
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:3003/jobs/${id}`);
    loadJobs();
  };
// lets create columns for Jobs table by rendering cell
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "data_pool_name",
      headerName: "Data_pool_name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellUser">
            
            {params.row.data_pool_name}
          </div>
        );
      },
    },
    {
      field: "samples",
      headerName: "Samples",
      width: 200,
    },
  
    {
      field: "owner",
      headerName: "Owner",
      width: 150,
    },
    {
      field: "marker",
      headerName: "Marker",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/jobs/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteJob(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  const downloadExcel=()=>{
   
    const workSheet=XLSX.utils.json_to_sheet(jobs)
    const workBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook,workSheet,"job")
    //Buffer
    let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
    //Binary string
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    //Download
    XLSX.writeFile(workBook,"JobData.xlsx")


  }


  return (
    
    <div className="jobtable" >
      <div className="jobtableTitle">Jobs
      <div className="download"><Button variant="outlined" startIcon={<DownloadForOfflineIcon/>} onClick={() => { downloadExcel() }}>Download</Button></div>
        <Link to="/jobs/new" className="link">
          Add New Job
        </Link>      
      </div>
      <DataGrid
      
        className="jobgrid"
        rows={jobs}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
   
  );
};

export default Jobtable;
