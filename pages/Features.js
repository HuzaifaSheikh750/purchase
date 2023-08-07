import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/FeaturesHeader";
import Subsribe from "../components/home-page/home-7/Subsribe";
import Link from "next/link";
import Social from "../components/home-page/home-7/Social";
import Service1 from "../components/services/Service1";
import Features from "../components/home-page/home-7/Features4";
import Footer from '../components/footer/Footer'
// import Footers from "./Footers"

const contact = () => {
  return (
    <>
      <Seo pageTitle="Purchase Requisition App | Features" />

      <DefaulHeader />
      {/* <div className="purchasefeature">
      <div className="container " style={{marginTop:"150px"}}>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
              <div className=" text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Application <span>Features.</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0" style={{fontStyle:"italic", fontSize:"20px"}}>
              Streamline the procurement process, reduce costs, and increase efficiency.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* purchasefeature */}
      <div className="fancy-feature-seven pt-200 lg-pt-100 purchasefeature ">
        <div className="container " style={{marginTop:"150px"}}>
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12" style={{marginTop:"-100px"}} data-aos="fade-right">
              <div className=" text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0" style={{color:"white"}}>
                  Our Application <span>Features.</span>
                </h2>
                <p className="text-lg text-center text-lg-start md-pt-30 m0" style={{fontStyle:"italic", fontSize:"20px", color:"white"}}>
                   Streamline the procurement process, reduce costs, and increase efficiency.
              </p>
              </div>
              {/* /.title-style-four */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="container pt-50 lg-pt-10" style={{backgroundColor:"white",  marginTop:"70px", borderRadius:"30px"}}>
          <div className="row gx-xxl-5" style={{paddingTop:"0px"}}>
            <Features />
          </div>
        </div>
        {/* /.container */}
      </div>


      {/* <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                 

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
   
        </div>
      </div> */}

      <div className="footer-style-ten theme-basic-footer zn2 position-relative back" style={{marginTop:"200px"}}>
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/purchase/purchase_white.png" alt="logo" width={220} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#4980FF"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500">Email Address</h5>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500">Contact Number</h5>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                     USA : (+1)-315-791-4472 <br></br>
                     PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* <DefaultFooter /> */}
   
    </>
  );
};

export default contact;
