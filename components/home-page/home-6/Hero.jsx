import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'
const Hero = () => {


  return (
    <>


      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        {/* <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
        />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
        /> */}

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>What is KAISPE <br /><span style={{ color: "#32CA8D" }}> Purchase Requisition App?</span></h2>

              <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
                Many organizations rely on ERP software to manage their employee purchase requisition processes.
                However, these systems can often be complicated to use and overwhelming for end-users due to their
                extensive feature sets. KAISPE's Purchase Requisition App is designed to simplify this process, offering a
                user-friendly and intuitive cloud-based solution.
              </p>

              {/* <div className="d-inline-flex align-items-center">
                <ul className="d-flex style-none rating"><img src="/images/purchase/app_store.png" width={140} height={43} /></ul>
                <div className="fs-20 ms-4">
                  <img src="/images/purchase/google_play.png" width={140} />
                </div>
              </div> */}
              <div className="bg-wrapper" style={{backgroundColor:"white", marginTop:"-7  0px"}}>
              <Image
                src="/images/purchase/image_2.png"
                alt="media"
                className="lazy-img main-screen w-100 dashboardscreen"
                width={1000}
                height={650}
              />
            </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            {/* <div className="bg-wrapper" style={{backgroundColor:"white", marginTop:"-7  0px"}}>
              <img
                src="/images/purchase/image_10.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
