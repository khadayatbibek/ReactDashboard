import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Usertable from "../../components/usertable/Usertable"
import Jobtable from "../../components/jobtable/Jobtable"


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       
       
        <div className="listContainer">
          
          <Jobtable/>
          <br />
          
          <Usertable />
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;
