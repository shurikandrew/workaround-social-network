import "./register.scss";
import RegisterForm from "../../components/register-form/RegisterForm.tsx";
import logo from "../../assets/logo-no-background.png";
import {linksArray} from "../../constants/constants.tsx"
import LinkElement from "../../components/link-element/LinkElement.tsx";
import {Link} from "react-router-dom";

type Props = {};
const Register = (props: Props) => {
    return (
        <div className="register">
            <div className="register-card">
                <div className="left">
                    <div className="register-image">
                        <div className={"register-text"}>
                            <h1>
                                <span>Already</span> have an account?
                            </h1>
                            <p>
                                Then why are you still here? Jump to our <span>Login</span> page!
                            </p>
                            <Link to={"/login"}>
                                <button>Login</button>
                            </Link>
                        </div>
                        <img src={logo} alt="Logo" className={"img-logo"}/>
                    </div>
                </div>
                <div className="right">
                    <RegisterForm/>
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

export default Register;