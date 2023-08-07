const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Learn skills over 120k+",
    subtitle: "Video courses.",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Choose courses taught",
    subtitle: "Real-world experts.",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Learn lifetime access on",
    subtitle: "Mobile and desktop.",
  },
];

const FeatureBlock = () => {
  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-lg-8 col-md-6 col-sm-6">
            <div className="section-title-three text-center">
            <h2 className="title text-white" style={{textAlign:"start", marginTop:"30px", fontSize:"45px"}}>Try out the <span style={{color:"#0077b6", fontWeight:"bold"}}>KAISPE</span> Expense Report management app today</h2>
            </div>
          </div>

          <div className="col-lg-4 col-md-2  col-sm-6">
            <div className="section-title-three text-center" style={{marginTop:"50px"}}>
             <button className="btn btn-primary" style={{textAlign:"center", borderRadius:"20px", width:"50%", height:"70px"}}>Get Started</button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBlock;
