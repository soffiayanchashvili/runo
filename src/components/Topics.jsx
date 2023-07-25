import { Link } from "react-router-dom";
import "./module.scss";

function Topics() {
    return(
        <div className="popular-topics">
            <div className="container">
                <h2>Popular topics</h2>
                <ul>
                    <li><Link to ="/">All</Link></li>
                    <li><Link to ="/">Adventure</Link></li>
                    <li><Link to ="/">Travel</Link></li>
                    <li><Link to ="/">Fashion</Link></li>
                    <li><Link to ="/">Technology</Link></li>
                    <li><Link to ="/">Branding</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Topics;