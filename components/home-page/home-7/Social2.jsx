const Social = () => {
    const socialList = [
      { platform: "facebook-f", url: "https://www.facebook.com/Kaispeco/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" },
      { platform: "twitter", url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fkaispe_%3Flang%3Den" },
      { platform: "linkedin", url: "https://pk.linkedin.com/company/kaispe" },
      { platform: "youtube", url: "https://www.youtube.com/@kaispe" },
    ];
  
    return (
      <ul className="d-flex justify-content-center social-icon style-none" style={{gap:"22px", marginLeft:"-300px", marginTop:"20px"}}>
        {socialList.map((social) => (
          <li key={social.platform}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.platform}`} />
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Social;
    