import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "About us", href: "/about-v1" },
        { label: "Careers", href: "#" },
        { label: "Features", href: "#" },
        { label: "Blog", href: "/blog-v2." },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Health Insurance Plans", href: "/service-details" },
        { label: "Car Insurance", href: "/service-details" },
        { label: "Investment", href: "/service-details" },
        { label: "Mediclaim Policy", href: "/service-details" },
        { label: "Others", href: "/service-details" },
        { label: "Health Insurance", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGDff4yOwbgfgAAAYmNFA2owTVsAAUzedhQbSpdfjJVhcD8f38PqljaFht7kzo9D1EMN4bpSJBd3avn6-uhB6CRBRvmwcTIqf09oH03R5YCmPKBh54qmWTnuFjiwoqlOtelTos=&original_referer=&sessionRedirect=https%3A%2F%2Fpk.linkedin.com%2Fcompany%2Fkaispe ",
    },
    {
      iconClass: "fab fa-youtube",
      link: "https://www.youtube.com/@kaispe",
    },
    {
      iconClass: "fab fa-twitter",
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fkaispe_%3Flang%3Den",
    },
  
    {
      iconClass: "fab fa-facebook-f",
      link: "https://www.facebook.com/Kaispeco/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0",
    },
  ];

  return (
    <>
      {/* {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))} */}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
        590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.<br/><br/>
        Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.
        </p>
        
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
