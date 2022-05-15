import "./style/viewjob.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const ViewJob = () => {
  const [job, setJob] = useState({
    data_pool_name: "",    
    samples: "",
    owner: "",
    marker: "",
    status: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const res = await axios.get(`http://localhost:3003/jobs/${id}`);
    setJob(res.data);
    
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton"><Link  to={`/jobs/edit/${job.id}`} > Edit </Link></div>
            <h1 className="title">Job Information</h1>
            <div className="item">
            
              <div className="details">
                <h1 className="itemTitle">{job.data_pool_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Samples:</span>
                  <span className="itemValue">{job.samples}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Owner:</span>
                  <span className="itemValue">{job.owner}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Marker:</span>
                  <span className="itemValue">
                  {job.marker}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{job.status}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default ViewJob;
