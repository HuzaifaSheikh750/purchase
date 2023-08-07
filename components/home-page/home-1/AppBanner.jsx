import Link from "next/link";
import Image from 'next/image'
const AppBanner = () => {
  const features = [
    "Increased Efficiency and Productivity",
    "Improved Visibility and Control",
    "Enhanced Compliance",
    "Cost Savings",
    "Better Decision-Making",
    "Improved Supplier Relationships",

  ];

  // const buttons = [
  // {
  // platform: "Google play",
  //   icon: "images/download.png",
  //   className: "windows-button",
  // },
  // {
  //   platform: "App store",
  //   icon: "images/icon/apple-black.svg",
  //   className: "ios-button",
  // },
  // ];

  return (
    <div className="row align-items-center" style={{ width: "100%" }}>
      <div className="col-lg-5 col-md-12 col-sm-12 wow fadeInRight">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80" style={{width:"740px"}}>
          <img
            src="/images/purchase/purchaseTab.png"
            alt=""
            className="lazy-img main-img ms-auto img6"
            style={{ position: "absolute", left: "-350px", top: "-290%", width: "1000px"}}
            // width={1000}
            // height={650}
          />
        </div>

      </div>
      <div className="col-lg-7 col-md-12 col-sm-12">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
          <div className="sc-title" style={{ fontWeight: "bold", marginBottom: "30px"}}>Benefit</div>  
            <h3 className=" fw-500 tx-dark m0" style={{ fontSize: "40px", fontWeight:"bold" }}>
              Experience the key Benefits of  <span style={{ color: "#32CA8D" }}>KAISPE Purchase Requisition App </span>
            </h3>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Achieve greater control and visibility over purchasing with real-time tracking and approval notifications
          </p>
          <ul className="style-none list-item" >
            {features.map((feature, index) => (
              <li key={index} style={{ fontSize: "17px" }}>{feature}</li>
            ))}
          </ul>

          {/* button */}
          <div className="ms-auto text-center text-lg-start">
            <Link
              href="/contact"
              className="btn-twentyTwo fw-500 tran3s"
              style={{ backgroundColor: "#32CA8D", marginTop: "40px" }}
            >
              Contact Us
            </Link>
          </div>


          {/* End list */}

          {/* <div className="d-sm-flex align-items-center  mt-55 lg-mt-30">
            {buttons.map((button, index) => (
              <a
                href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspteapp-am?tab=Overview"
                target="_blank"
                className={`d-flex align-items-center ${button.className}`}
                key={index}
              >
                <img src={button.icon} alt="" className="lazy-img icon" style={{width:"150px"}}/>
                <div>
                
                  <strong>{button.platform}</strong>
                </div>
              </a>
            ))}
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default AppBanner;
