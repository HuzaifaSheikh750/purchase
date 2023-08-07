import Link from "next/link";
import Image from 'next/image'
const AppBanner2 = () => {
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

            <div
                className="col-lg-12 col-md-9 m-auto text-center fade-up"
                data-aos="fade-down"
                style={{ paddingBottom: "100px" }}
            >
                <div className="sc-title text-uppercase" style={{ fontWeight: "bold", marginBottom: "30px" }}>Features</div>
                <h2 className="tx-dark mb-20" style={{ fontSize: "40px", fontWeight: "bold" }}>Powerful Features for the <br /><span style={{color:"#32CA8D"}}> KAISPE Purchase Requisition App</span></h2>
                <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
                    Streamline the procurement process, reduce costs, and increase efficiency
                </p>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="block-style-seven wow fadeInLeft">
                    <div className="title-style-one">
                        <div className="row">
                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "end", color:"#32CA8D"}}>
                                    Employees can easily create and send requisitions
                                </h3>
                                <p style={{ textAlign: "end", marginTop: "20px", width: "100%" }}>
                                    KAISPE Purchase Requisition App offers an intuitive and user-friendly interface, making it easy for
                                    employees to create purchase requisitions quickly and efficiently.
                                </p>
                            </div>
                            <div className="col-lg-2" style={{ backgroundColor: "#32CA8D", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px", color:"white" }}>1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-style-seven wow fadeInLeft" >
                    <div className="title-style-one" style={{marginTop:"20px"}}>
                        <div className="row">
                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "end" }}>
                                    Easy search for inventory
                                </h3>
                                <p style={{ textAlign: "end", marginTop: "20px", width: "100%" }}>
                                    The app allows employees to select a product from the existing inventory or type in the product name if
                                    the product is not available in the inventory.
                                </p>
                            </div>
                            <div className="col-lg-2" style={{ backgroundColor: "#D5D5D5", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px" }}>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-style-seven wow fadeInLeft">
                    <div className="title-style-one" style={{marginTop:"20px"}} >
                        <div className="row">
                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "end" }}>
                                    Flexible pricing options
                                </h3>
                                <p style={{ textAlign: "end", marginTop: "20px", width: "100%" }}>
                                    KAISPE Purchase Requisition App offers flexible pricing options, making it accessible to organizations
                                    of all sizes and budgets.
                                </p>
                            </div>
                            <div className="col-lg-2" style={{ backgroundColor: "#D5D5D5", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px" }}>3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
                <Image src="/images/purchase/image_4.png" alt="" className="lazy-img main-img ms-auto sec" width={1000} height={800} style={{}} />
            </div>


            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="block-style-seven wow fadeInLeft">
                    <div className="title-style-one" style={{marginTop:"20px"}}>

                        <div className="row">
                            <div className="col-lg-2" style={{ backgroundColor: "#D5D5D5", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px" }}>4</p>
                            </div>

                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "start" }}>
                                Support for both service and inventory items
                                </h3>
                                <p style={{ textAlign: "start", marginTop: "20px", width: "100%" }}>
                                     The app supports both service and inventory items, making it suitable for organizations that need to 
                                     manage different types of procurement requests.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="block-style-seven wow fadeInLeft">
                    <div className="title-style-one"  style={{marginTop:"20px"}}>

                        <div className="row">
                            <div className="col-lg-2" style={{ backgroundColor: "#D5D5D5", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px" }}>5</p>
                            </div>

                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "start" }}>
                                    Available in Tablet and Mobile versions
                                </h3>
                                <p style={{ textAlign: "start", marginTop: "20px", width: "100%" }}>
                                    KAISPE Purchase Requisition mobile App is available in both tablet and mobile versions, enabling
                                    employees to raise requisitions from anywhere at any time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block-style-seven wow fadeInLeft">
                    <div className="title-style-one" style={{marginTop:"20px"}}>

                        <div className="row">
                            <div className="col-lg-2" style={{ backgroundColor: "#D5D5D5", borderRadius: "70%", height: "40px", width: "40px" }} >
                                <p style={{ textAlign: "center", paddingTop: "5px" }}>6</p>
                            </div>

                            <div className="col-lg-10">
                                <h3 className="main-title fw-500 tx-dark m0" style={{ fontSize: "22px", textAlign: "start" }}>
                                    Easily integrated with Microsoft Dynamics 365
                                </h3>
                                <p style={{ textAlign: "start", marginTop: "20px", width: "100%" }}>
                                    The app can be easily integrated with Microsoft Dynamics 365 F&O, Microsoft Dynamics 365 Business
                                    Central, and other ERPs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="ms-auto text-center text-lg-start" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link
                    href="/Features"
                    className="btn-twentyTwo fw-500 tran3s"
                    style={{ backgroundColor: "#32CA8D", marginTop: "40px" }}
                >
                    View All Features
                </Link>
            </div>

        </div>
    );
};

export default AppBanner2;
