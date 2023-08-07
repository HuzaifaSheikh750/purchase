import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu2";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 0) {
  //         setScrolling(true);
  //       } else {
  //         setScrolling(false);
  //       }
  //     };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const logoSource = '/images/logo_black.png';

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${
        navbar ? "fixed" : ""
      }`}
      style={{backgroundColor:"white"}}
    >
      <div className="inner-content position-relative" >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src={logoSource}
                alt="logo"
                width={180}
                height={50}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3" >
            <Link
              href="https://kspcs.powerappsportals.com/customer-landing/"
              target="_blank"
              className="contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block"
              // style={{backgroundColor:"white", color:"black", borderColor:"white" }}
            >
              Support Portal
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
