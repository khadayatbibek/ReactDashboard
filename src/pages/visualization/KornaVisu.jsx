import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./korna.scss";
import Visu from "../../components/kronavisu/Visu"


const KornaVisu = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        
       <Navbar />
       
        <div className="listContainer">
        <div id="KronaVisualization"> Your Krona Visualization is opened in another tab
        <Visu />

              
      </div>
         
        </div>
      </div>
    </div>
  );
};

export default KornaVisu;
