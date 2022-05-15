import "./style/newuser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate,useParams } from "react-router-dom";



const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",    
    email: "",
    phone: "",
    institution: "",
    country: "",
  });

  


  const { name, email,phone,institution,country } = user;
  const onInputChange = e => {
    console.log(e)
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  
  
  useEffect(() => {
    loadUser();
  }, []);



  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history("/users");
  };
  

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  
 


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit user</h1>
        </div>
        <div className="bottom">  
          
        <form onSubmit={e => onSubmit(e)}>
        <div class="formInput">
            <label>Full Name</label>
            <input type="text" placeholder="Please enter your Full Name" name="name" value={name} onChange={e => onInputChange(e) } />
                </div>
        <div class="formInput">
            <label>Email</label>
            <input type="email" placeholder="Please enter your Email Address" name="email" value={email} onChange={e => onInputChange(e)} />
            </div>
        <div class="formInput">
            <label>Phone</label>
            <input type="text" placeholder="Please enter your Phone Number" name="phone"  value={phone} onChange={e => onInputChange(e)}/>
            </div>
        <div class="formInput">
            <label>Institution</label>
            <input type="text" placeholder="Please enter your Institution Name" name="institution" value={institution} onChange={e => onInputChange(e)} />
            </div>
            <div class="formInput">
                <label>Country</label>
                <input type="text" placeholder="Please enter your Country" name="country" value={country} onChange={e => onInputChange(e)} />
                </div>
                <div class="break">
                    </div>
                    <button>Register</button>
                    </form>
          
        </div>
      </div>
    </div>
  );
};

export default EditUser;
