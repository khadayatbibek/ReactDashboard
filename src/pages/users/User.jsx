import "./user.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import Usertable from "../../components/usertable/Usertable"
const User = () => {
  return (
    <div className="userhome">
      <Sidebar />
      <div className="userhomeContainer">
        <Navbar />
       
       
        <div className="userContainer">
          
          <Usertable />
          
        </div>
      </div>
    </div>





    
  )
}

export default User