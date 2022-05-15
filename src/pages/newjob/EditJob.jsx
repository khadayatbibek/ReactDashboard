import "./style/newjob.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate,useParams } from "react-router-dom";



const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [job, setJob] = useState({
    data_pool_name: "",    
    samples: "",
    owner: "",
    marker: "",
    status: "",
  });

  


  const {data_pool_name, samples,owner,marker,status } = job;
  const onInputChange = e => {
    console.log(e)
    setJob({ ...job, [e.target.name]: e.target.value });
  };


  
  
  useEffect(() => {
    loadUser();
  }, []);



  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/jobs/${id}`, job);
    history("/jobs");
  };
  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/jobs/${id}`);
    setJob(result.data);
  };
  
 


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Job</h1>
        </div>
        <div className="bottom">  
          
        <form onSubmit={e => onSubmit(e)}>
        <div class="formInput">
            <label>Status</label>
            <input type="text" placeholder="pending" name="status" value={status} onChange={e => onInputChange(e) } />
            </div>
        <div class="formInput">
            <label>Data Pool name</label>
            <input type="text" placeholder="Lighttrap-IV" name="data_pool_name" value={data_pool_name} onChange={e => onInputChange(e) } />
            </div>
        <div class="formInput">
                <label>#Samples</label>
                <input type="text" placeholder="56" name="samples" value={samples} onChange={e => onInputChange(e) } />
            </div>
        <div class="formInput">
                <label>Owner</label>
                <input type="text" placeholder="Beta user" name="owner" value={owner} onChange={e => onInputChange(e) }/>
                    </div>
        <div class="formInput">
            <label>marker</label>
            <input type="text" placeholder="Animal" name="marker" value={marker} onChange={e => onInputChange(e) } />
            </div>
            <div class="break"></div>
            <button>Register</button></form>
          
        </div>
      </div>
    </div>
  );
};

export default EditUser;
