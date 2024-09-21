import "./login.scss";
import LoginForm from "../../components/login-form/LoginForm.tsx";
import logo from "../../assets/logo-no-background.png";

type Props = {};
const Login = (props: Props) => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <div className="login-image">
                        <img src={logo} alt="Logo" className={"img-logo"}/>
                    </div>
                </div>
                <div className="right">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default Login;