import "./style/newuser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const NewUser = ({ inputs, title }) => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",    
    email: "",
    phone: "",
    institution: "",
    country: "",
  });

  
  const onInputChange = e => {
    console.log(e)
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history("/users");
  };

  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">  
          
            <form onSubmit={e => onSubmit(e)}> 
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} name={input.name}  onChange={e => onInputChange(e)} />
                </div>
              ))}
              <div className="break"></div>
              
              <button>Register</button>
            </form>
          
        </div>
      </div>
    </div>
  );
};

export default NewUser;
