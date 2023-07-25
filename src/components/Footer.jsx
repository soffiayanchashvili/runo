import "./module.scss";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import youtubeIcon from "../images/youtube.png";
import pinterestIcon from "../images/pinterest.png";
import behanceIcon from "../images/behance.png";

function Footer() {
    return(
        <footer>
          <div className="container">
            <div className="flex space_around">
                <div className="footer_text">
                    <h4>Contact the Publisher</h4>
                    <a href="#"><p>mike@runo.com</p></a>
                    <p>+944 450 904 505</p>
                </div>
                <div className="footer_text">
                    <h4>explorate</h4>
                    <a href="#"><p>About</p></a>
                    <a href="#"><p>Partners</p></a>
                    <a href="#"><p>Job Opportunities</p></a>
                    <a href="#"><p>Advertise</p></a>
                    <a href="#"><p>Membership</p></a>
                </div>
                <div className="footer_text">
                    <h4>Headquarter</h4>
                    <p>191 Middleville Road, NY 1001, Sydney Australia</p>
                </div>
                <div className="footer_text">
                    <h4>Connections</h4>
                    <>
                     <a href="#"><img src={facebookIcon} alt="facebooklogo" /></a>
                     <a href="#"><img src={twitterIcon} alt="twitterlogo" /></a>
                     <a href="#"><img src={youtubeIcon} alt="youtubelogo" /></a>
                     <a href="#"><img src={pinterestIcon} alt="pinterestlogo" /></a>
                     <a href="#"><img src={behanceIcon} alt="behancelogo" /></a>
                    </>
                </div>
            </div>
           </div> 
           <div className="after_footer">
                <div className="container">
                    <><p>2021 | RUNO Publisher Studio</p></>
                    <><p>Subscribe Now</p></>
                </div>
            </div>  
        </footer>
    )
}
export default Footer;