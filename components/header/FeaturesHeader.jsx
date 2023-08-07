"use client"
import { useEffect, useState } from "react";
import FeaturesMenu from "./FeaturesMenu";
import Link from "next/link";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const logoSource = scrolling ? '/images/purchase/purchase_logo.png' : '/images/purchase/purchase_white.png';


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
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
     
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                // src="/images/purchase/purchase_white.png"
                src={logoSource}
                alt="logo"
                width={220}
                height={50}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            {/* <Link
              href="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link> */}
            <Link
              href="https://kspcs.powerappsportals.com/customer-landing/"
              target="_blank"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
              style={{backgroundColor:"black", color:"white"}}
            >
              Support Portal
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <FeaturesMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
