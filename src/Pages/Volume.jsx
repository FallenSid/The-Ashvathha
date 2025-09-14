import Navbar from "../components/Navbar";
import "./volume.css";
const Volume = () => {
  return (
    <>
      <Navbar />
      <img id="volbg" src="src/assets/image/volbg.jpg" alt="VolumePage-Background" />
      <div className="container">

        <div className="article">
          Nothing's new
           {/* this is side-bar */}
        </div>

        <div className="vol-link">
          {/* main area where link to volume will be attached */}
          <h1>Volume</h1>
          <hr />  
          <ul>
            <li><a href="#">Volume 1</a></li>
            <li><a href="#">Volume 2</a></li>
            <li><a href="#">Volume 3</a></li>
          </ul>
        </div>

        <div className="section">
          Nothing to See Here
          {/* another sidebar for additional stuffs and promotions */}
        </div> 

      </div>
    </>
  );
};

export default Volume;
