import { Link } from "react-router-dom";
import logo from '../images/Group 4.png';
import '../css/NavBar.css';

const NavBar=()=>{
    return (
        <div id="navbar">
            <div className="innerContent">
                <Link to="/" id="pplogo">
                    <img src={logo} id="logo" alt="logo"/>
                    <p id="company-name">Programming Pathshala</p>
                </Link>
                <div id="tags">
                    <div>
                    <p id="tag-1"><Link to="/">Renaissance</Link></p>
                    </div>
                    <div>
                    <p id="tag-2"><Link to="/">Campus Programs</Link></p>
                    </div>
                    <div>
                    <p id="tag-3"><Link to="/">Hire With Us</Link></p>
                    </div>
                    <div>
                    <p id="tag-4"><Link to="/">Stories</Link></p>
                    </div>
                    <div>
                    <p id="tag-5"><Link to="/">Events</Link></p>
                    </div>
                </div>
                <div id="buttons">
                    <div>
                        <button type="button" id="login"><p id="log-in">Log In</p></button>
                    </div>
                    <div>
                        <button type="button" id="free-trial"><p id="free-trial-text">Start Free Trial</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NavBar;