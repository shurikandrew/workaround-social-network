import "./login.scss";
import LoginForm from "../../components/login-form/LoginForm.tsx";
import logo from "../../assets/logo-no-background.png";
import {linksArray} from "../../constants/constants.tsx"
import LinkElement from "../../components/link-element/LinkElement.tsx";
import {Link} from "react-router-dom";

type Props = {};
const Login = (props: Props) => {
    return (
        <div className="login">
            <div className="login-card">
                <div className="left">
                    <div className="login-image">
                        <div className={"register-text"}>
                            <h1>
                                Don't have an <span>account</span> yet?
                            </h1>
                            <p>
                                Do not Hesitate! Create for yourself brand-new account <span>Now</span>
                            </p>
                            <Link to={"/register"}>
                                <button>Register</button>
                            </Link>
                        </div>
                        <img src={logo} alt="Logo" className={"img-logo"}/>
                    </div>
                </div>
                <div className="right">
                    <LoginForm/>
                    <div className={"divider"}>
                        <hr/>
                        OR
                        <hr/>
                    </div>
                    <div className={"links"}>
                        {linksArray.map(
                            (link) => (
                                <LinkElement {...link} key={link.text}/>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;