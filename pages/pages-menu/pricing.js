import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
// import PricingTable from "../../components/pricing/Pricing";
import Link from "next/link";
// import IncludedPlan from "../../components/home-page/home-2/IncludedPlan";
import PriceTable from "../../components/home-page/home-2/Pricing";
// import PriceTable from "../../components/pricing/Pricing";
import Footer from '../../components/footer/Footer'
const Pricing = () => {
  return (
    <>
      <Seo pageTitle="Purchase Requisition App | Pricing" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-8 m-auto text-center"
              data-aos="fade-right"
            >
              <div className="title-style-five mb-45 md-mb-10" >
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Our Pricing
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Choose The Best Package As Per Your Requirements
                </h2>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
       <div className="wrapper pricing-table-area-four m-auto pt-80 lg-pt-30" style={{paddingLeft:"100px", paddingRight:"100px"}}>
            <div className="row">
              <PriceTable />
            </div>
          </div>
      {/* /.pricing-section-three */}

      {/*
        =====================================================
            Fancy Short Banner Sixteen
        =====================================================
        */}
      <div
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
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      contact us    
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      {/* <DefaultFooter /> */}
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
    </>
  );
};

export default Pricing;
