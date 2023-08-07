import Link from "next/link";
import { useState } from "react";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
import Image from 'next/image'

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <ModalVideo
    channel="youtube"
    autoplay
    isOpen={isOpen}
    videoId="OuLl6YTAQjY"
    onClose={() => setOpen(false)}
  />
    <div className="hero-banner-seven p-30" style={{marginTop:"0px"}}>
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container" >
          <div className="row">
            <div className="col-lg-7 col-md-7" data-aos="fade-right">
            
              <h3 className="hero-heading fw-bold tx-dark mt-25 purchasehead" style={{fontSize:"60px"}}>
                Transform your <span style={{color:"#67CBA0"}}> Procurement Process </span>
                with Purchase Requisition App
              </h3>
              <p className="text-md mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
              Simplify purchasing, reduce costs, and improve control with our easy-to-use solution. With our app, customers can easily raise, review, and manage purchase requisitions from a single location, all while on the go.
              </p>
              {/* <HeroBtnGroup /> */}

              <div
                  className="d-sm-flex align-items-center btns"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                    onClick={() => setOpen(true)}
                    role="button"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      borderColor: "black",
                      marginTop: "0px",
                    }}
                  >
                    <i
                      className="bi bi-play"
                      style={{
                        border: "1px solid black",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "32px",
                        paddingLeft: "10px",
                      }}
                    />
                    <div className="ps-3">
                      <span
                        className="d-block fs-15 text-uppercase"
                        style={{ textAlign: "start" }}
                      >
                        Watch
                      </span>
                      <strong
                        className="fs-18 fw-normal tx-dark d-block"
                        style={{ color: "black" }}
                      >
                        Intro Video
                      </strong>
                    </div>
                  </div>
                  <a
                    href="https://appsource.microsoft.com/en-us/marketplace/apps?search=kaispe%20purchase%20requisition&page=1"
                    target="_blank"
                    style={{ marginTop: "-20px", marginRight: "20px" }}
                  >
                    <img
                      src="/images/purchase/download.jpg"
                      alt="icon"
                      style={{
                        width: "150px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>


            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left" >
            <Image
              src="/images/purchase/purchaseMobile.png"
              alt="illustration"
              className="lazy-img "
                width={650}
                height={700}
              style={{marginLeft:"140px", marginTop:"70px"}}
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
    </>
  );
};

export default Hero;
