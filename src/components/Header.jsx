import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import youtubeIcon from "../images/youtube.png";
import pinterestIcon from "../images/pinterest.png";
import behanceIcon from "../images/behance.png";
import searchIcon from "../images/Search Icon.png";
import "./module.scss";
function Header() {
  return (
    <div className="firstpage">
      <header>
        <p className="logo-name">RUNO</p>
        <nav>
          <ul className="navigation">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Articles</li></a>
            <a href="#"><li>Contact Us</li></a>
          </ul>
          <div className="navIcons">
            <a href="#"><img src={facebookIcon} alt="facebooklogo" /></a>
            <a href="#"><img src={twitterIcon} alt="twitterlogo" /></a>
            <a href="#"><img src={youtubeIcon} alt="youtubelogo" /></a>
            <a href="#"><img src={pinterestIcon} alt="pinterestlogo" /></a>
            <a href="#"><img src={behanceIcon} alt="behancelogo" /></a>
            <a href="#"><img src={searchIcon} alt="searchicon" /></a>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="head_text">
          <p className="Category">ADVENTURE</p>
          <h1>Richird Norton photorealistic rendering as real photos</h1>
          <div className="flex">
            <p className="date head_p">08.08.2021</p>
            <span></span>
            <p className="head_p">Progressively incentivize cooperative systems through technically soundfunctionalities. The credibly productivate seamless data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
