import "./job.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import Jobtable from "../../components/jobtable/Jobtable"
const Job = () => {
  return (
    <div className="jobhome">
      <Sidebar />
      <div className="jobhomeContainer">
        <Navbar />
       
       
        <div className="jobContainer">
          
          <Jobtable />
          
        </div>
      </div>
    </div>





    
  )
}

export default Job