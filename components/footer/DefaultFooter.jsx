import Link from "next/link";
import Footer from "../../components/footer/Footer";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";
import Social from '../../components/home-page/home-7/Social2' 

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/purchase/purchase_logo.png" alt="brand"width={180} style={{marginBottom:"20px"}}/>
                </Link>
               
              </div>
              <p>KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development.</p>
              <Social/>
              
            </div>
            {/* End .col */}

            <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title  fw-500" style={{color:"black"}} >Email Address</h5>
                </div>
                <p className=" opacity-75 fs-18 mt-15 mb-45 lg-mb-10">info@kaispe.com </p>
                <h5 className="footer-title  fw-500" style={{color:"black"}}>Contact Number</h5>
                <p className=" opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                     USA : (+1)-315-791-4472 <br />
                     PAK : (+92)-213-432-6085
                </p>
              
            </div>

           

            <div className="col-xl-4 col-lg-4 mb-30 form-widget">
              <h5 className="footer-title tx-dark fw-500" style={{color:"black"}}>Our Address</h5>
              <p className=" opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
              590 Madison Avenue 21st Floor Manhattan, NY 10022 USA. 
              </p>
              <p className=" opacity-75 fs-18 mt-0 mb-45 lg-mb-10">
              Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.
                </p>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default DefaultFooter;
