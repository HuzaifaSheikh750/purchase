import Image from "next/image";
import { useState } from "react";
import React from "react";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
const Hero1 = () => {
  const [isOpen, setOpen] = useState(false);
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <>
           {/* <img src="/images/Header.png" alt="hero" className="img-fluid" /> */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="M9CNNbq7AHY"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      />
           
    <div className="hero-banner-ten position-relative zn2" style={{marginTop:"100px"}}>

      <div className="container" style={{marginBottom:"0px", marginTop:"60px"}}   onClick={() => setOpen(true)} role="button">
       
        <div className="row">
          <div className="col-xl-6 col-lg-6  col-md-6 text-center" data-aos="fade-up" style={{marginLeft:"-20px"}}>
            <h3 className="hero-heading fw-500 tx-dark" style={{fontSize:"60px", textAlign:"start", color:"white"}} >
            Keep Your <span style={{color:"#09A6F3"}}> Expenses  </span>Organized
            </h3>
            <p style={{textAlign:"start", marginTop:"40px",  color:"white"}}>KAISPE Expense Report app is a software application that helps businesses manage and track their travel and other expenses more efficiently. <br /> It is designed to simplify the process of capturing, submitting, and approving
               expense reports by automating many of the manual tasks involved in expense management.</p>
          
               <HeroBtnGroup />
          </div>
          <div className="col-lg-6 col-md-6  text-center" data-aos="fade-up">
           <img src="/images/hero.png" alt="hero" className="img-fluid" style={{marginTop:"-150px", marginLeft:"50px"}} />
          </div>
         
        </div>
       
      </div>
      {/* End .container */}

      {/* <Image
        width={487}
        height={649}
        src="/images/Header.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      /> */}
    </div>
    </>
  );
};

export default Hero1;
