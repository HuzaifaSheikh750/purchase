import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Happier",
      subtitle: "Customers",
    },
    {
      id: 2,
      title: "30+",
      cardNo: "card-two",
      subtitle: "Insurance Item",
    },
    {
      id: 3,
      title: "Saller Leads",
      cardNo: "card-three",
      subtitle: "Who are listing soon",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 order-md-last">
          <div className=" text-center" style={{backgroundColor:"white"}}>
            <img src="/images/purchase/image_2.png" alt="shape" />
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        {/* <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <Image
              width={520}
              height={732}
              layout="intrinsic"
              src="/images/heading1.png"
              className="lazy-img avatar-img"
              alt="man"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default IntroAbout;
