import "./LoginForm.scss";

type Props ={}
const LoginForm = (props: Props) => {
    return (
        <form className={"login-form"}>
            <div className={"header"}>Login</div>

            <div className="login-input">
                <input type="email" id={"email-login"}/>
                <label htmlFor="email-login">Email:</label>
            </div>

            <div className="login-input">
                <input type="password" id={"pass-login"}/>
                <label htmlFor="pass-login">Password:</label>
            </div>

            <button type={"submit"} className={"submit-button"}>Log in</button>
        </form>
    );
};

export default LoginForm;