import Link from "next/link";
import Image from 'next/image'
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
// import DefaulHeader from "../../components/home-page/home-6/Header";
import Header2 from "../../components/header/Header2";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import AppBanner2 from "../../components/home-page/home-1/AppBanner2";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import Blog from "../../components/home-page/home-1/Blog";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-2/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose"; 
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import IntroAction from "../../components/home-page/home-4/IntroAction";
import IntroVideo from "../../components/home-page/home-4/IntroVideo";
import Counter from "../../components/home-page/home-4/Counter";
import LogoGroup from "../../components/home-page/home-7/LogoGroup";
import Main from "../../components/home-page/home-6/Hero";
import Partners from "../../components/home-page/home-6/Partners";

const Insurance = () => {
  return (
    <>
      <Seo pageTitle="Purchase Requisition App" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      
      <Header2 />  
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}

      <Hero />

       {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}

      <Main/>


      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}

     <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
    </div>

    <div
        className="  mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row  ">
              <div className="col-xl-12 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-12"  style={{display:"grid", placeItems:"center", justifyContent:"center"}}>
                    <div className="text-wrapper text-center text-lg-start md-pb-30" style={{position:"relative"}}>
                      <h3 className="main-title fw-500  m0" style={{fontSize:"40px", textAlign:"center"}}>
                        <img src="/images/purchase/inverted_2.png" alt="icon"/>
                      KAISPE purchase requisition app is functional and compatible with all devices, including iOS, tablet, and Android
                      <img src="/images/purchase/inverted_1.png" style={{alignItems:"end", position:"absolute", left:"85%"}} alt="icon"/>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner2 />
        </div>
    </div>


  
      {/* /.fancy-feature-thirtyEight */}

   
      <div className="fancy-feature-fifteen  mt-140 lg-mt-70">
        <img
          src="/images/shape/shape_76.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="container">
          {/* <IntroAction /> */}
          <IntroVideo />
          {/* <Counter /> */}
        </div>
      </div>



      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      {/* fancy-short-banner-thirteen */}
     


      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
  
      {/* /.blog-section-three */}


      {/* <div className="partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "orange" }}>
                  Our Partners
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Trusted Partners.
                </h2>
              </div>
             
              <p className="fs-20 pt-30 pe-xxl-5">
              KAISPE always believe in building strategic business relationship with partners around the world. Together with 
              our partners, we can provide the solutions our customers are looking for to grow their business and capture the 
              market.
              </p>
            </div>
          </div>
        </div>
      

        <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
          <LogoGroup />
        </div>
        <img
          src="/images/shape/shape_49.svg"
          alt="logo"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_50.svg"
          alt="logo"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_51.svg"
          alt="logo"
          className="lazy-img shapes shape-three"
        />
      </div> */}

<div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Customer Stories</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                href="https://www.kaispe.com/resources/blogs/"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
                target="_blank"
              >
                Go to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div
        className="  mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container quote">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row  ">
              <div className="col-xl-102 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-12"  style={{display:"grid", placeItems:"center", justifyContent:"center"}}>
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h3 className="main-title fw-500 text-white m0" style={{fontSize:"40px", textAlign:"center"}}>
                      Try out the KAISPE Purchase Requisition App today!
                      </h3>
                    </div>
                    <Link      
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                      style={{marginTop:"30px", backgroundColor:"black", borderRadius:"10px"}}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="partner-section-one position-relative mt-225 lg-mt-100 mb-200">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div
                className="title-style-three text-center mb-100 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Our partners</div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Trusted Partners.
                </h2>
                <p className="fs-20 pt-30 pe-xxl-5">
              KAISPE always believe in building strategic business relationship with partners around the world. Together with 
              our partners, we can provide the solutions our customers are looking for to grow their business and capture the 
              market.
              </p>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-12 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

          {/* <img
            src="/images/shape/shape_38.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_39.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          /> */}
      </div>

      <div
        className=" pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 microsoftButton"
        data-aos="fade-up"
      >
        <div className="container ">
            <div className="row">
                <div className="col-lg-12 row align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <h2 style={{textAlign:"center"}}>Get it from Microsoft AppSource</h2>
                  <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspteapp-am?tab=Overview" target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  {/* <img src="/images/Microsoft_button.png" alt="shape" className="lazy-img icon img-fluid" style={{width:"200px", height:"55px", marginTop:"20px"}}/> */}
                  
                  <div className="btn-twentyTwo fw-500 tran3s" style={{width:"250px", height:"70px", marginTop:"20px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"black "}}>
                    <Image src="/images/Microsoft_button.png" width={150} height={35}/>
                  </div>
                  </a>
                </div>                                              
              </div>
        </div>
      </div>
    
      {/*
			=====================================================
				Footer
			=====================================================
			*/}

      {/* add images */}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative back">
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
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
