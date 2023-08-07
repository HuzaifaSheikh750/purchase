import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBtnGroup = () => {
  const options = [
    {
      value: "IOS & Android",
      label: "IOS & Android",
      icon: "/images/icon/icon_22.svg",
    },
    {
      value: "Mac & Windows",
      label: "Mac & Windows",
      icon: "/images/icon/icon_23.svg",
    },
  ];

  const [isOpen, setOpen] = useState(false);  
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="OuLl6YTAQjY"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      />

      <div className="d-sm-flex align-items-center" style={{marginTop:"50px"}}>
        <div
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
          onClick={() => setOpen(true)}
          role="button"    
          style={{cursor:"pointer", color:"black", borderColor:"black", marginTop:"0px",}}
        >
          <i className="bi bi-play" style={{border: "1px solid black", borderRadius:"50%", width:"50px", height:"50px", fontSize:"32px", paddingLeft:"10px"}} />
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase" style={{textAlign:"start"}} >Watch</span>
            <strong className="fs-18 fw-normal tx-dark d-block" style={{color:"black"}}>
              Intro Video
            </strong>
          </div>
        </div>

        {/* <div
          className="dropdown download-btn d-inline-block mb-25 me-4 order-sm-first"
          onClick={toggleDropdown}
        > */}
            <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspprfoapp?tab=Overview" style={{marginTop:"-20px", marginRight:"20px"}}>
         <img src="/images/purchase/download.jpg" alt="icon" style={{width:"150px", height:"50px", marginRight:"20px", borderRadius:"5px"}} />
            </a>

        {/* </div> */}
      </div>
    </>
  );
};

export default HeroBtnGroup;
