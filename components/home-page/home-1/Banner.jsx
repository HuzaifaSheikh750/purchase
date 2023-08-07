const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  return (
    <div className="top-banner text-center" style={{ marginTop: "200px" }}>
      <h2 className="tx-dark mb-20">What is KAISPE <br /><span style={{ color: "#09A6F3" }}> Purchase Requisition App?</span></h2>
      <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
        Many organizations rely on ERP software to manage their employee purchase requisition processes.
        However, these systems can often be complicated to use and overwhelming for end-users due to their
        extensive feature sets. KAISPE Purchase Requisition App is designed to simplify this process, offering a
        user-friendly and intuitive cloud-based solution.
      </p>
      <div className="d-inline-flex align-items-center">
        <ul className="d-flex style-none rating"><img src="/images/purchase/app_store.png" width={120} height={40}/></ul>
        <div className="fs-20 ms-4">
         <img src="/images/purchase/google_play.png" width={140}/>
          {/* <span className="tx-dark opacity-25">(30k Reviews)</span> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
