import React from "react";
import "./report.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BarChartIcon from '@mui/icons-material/BarChart';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { FiMoreVertical } from "react-icons/fi";



const Report = () => {
 



  return (
    <div>
      <div className="userhome">
        <Sidebar />
        <div className="userhomeContainer">
          <Navbar />

          

          <div className="userContainer">
              <div className="container">
             
              <h2>Example Table</h2>
              <h1>Raw Data (FastQ)</h1>
            <ul class="responsive-table">
              <li class="table-header">
                <div class="col col-1">Status</div>
                <div class="col col-2">Data Pool Name</div>
                <div class="col col-3">Upload date</div>
                <div class="col col-4">#Samples</div>
                <div class="col col-5">Owner</div>
                <div class="col col-6">Marker</div>
                <div class="col col-7">Primer</div>
                <div class="col col-8">Metadata</div>
                <div class="col col-9" style={{color:"white"}}>Menu</div>
              </li>
              <li class="table-row">
                <div class="col col-1" data-label="Status">
                  <EqualizerIcon className="icons" color="secondary"/>
                </div>
                <div class="col col-2" data-label="Data Pool Name">
                  pollen
                </div>
                <div class="col col-3" data-label="Upload date">
                2021-06-15
                </div>
                <div class="col col-4" data-label="Samples">
                  50
                </div>
                <div class="col col-5" data-label="Owner">
                beta user
                </div>
                <div class="col col-6" data-label="Marker">
                  FungalItS2
                </div>
                <div class="col col-7" data-label="Primer">
                  <DoneIcon className=" icons"/>
                </div>
                <div class="col col-8" data-label="Metadata">
                <CircularProgress  size="18px" variant="determinate" color="inherit" value={65} />
                </div>
                <div class="col col-9"  className="icons" data-label="menu">
                <FiMoreVertical />
                </div>
              </li>
              <li class="table-row">
                <div class="col col-1" data-label="Job Id">
                <BarChartIcon className="icons" color="success"/>
                </div>
                <div class="col col-2" data-label="Data Pool Name">
                  pollen
                </div>
                <div class="col col-3" data-label="Upload date">
                2021-06-15
                </div>
                <div class="col col-4" data-label="Samples">
                  50
                </div>
                <div class="col col-5" data-label="Owner">
                beta user
                </div>
                <div class="col col-6" data-label="Marker">
                  FungalItS2
                </div>
                <div class="col col-7" data-label="Payment Status">
                <CloseIcon className=" icons"/>
                </div>
                <div class="col col-8" data-label="Payment Status">
                <CircularProgress  size="18px" variant="determinate" color="inherit" value={85} />
                </div>
                <div class="col col-9"  className="icons" data-label="menu">
                <FiMoreVertical />
                </div>
              </li>
              <li class="table-row">
                <div class="col col-1" data-label="Job Id">
                <BarChartIcon className="icons"  color="success"/>
                </div>
                <div class="col col-2" data-label="Data Pool Name">
                  pollen
                </div>
                <div class="col col-3" data-label="Upload date">
                2021-06-15
                </div>
                <div class="col col-4" data-label="Samples">
                  50
                </div>
                <div class="col col-5" data-label="Owner">
                beta user
                </div>
                <div class="col col-6" data-label="Marker">
                  FungalItS2
                </div>
                <div class="col col-7" data-label="Payment Status">
                <DoneIcon className=" icons"/>
                </div>
                <div class="col col-8" data-label="Payment Status">
                <CircularProgress  size="18px" variant="determinate" color="inherit" value={75} />
                </div>
                <div class="col col-9"  className="icons" data-label="menu">
                <FiMoreVertical />
                </div>
              </li>
              
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
