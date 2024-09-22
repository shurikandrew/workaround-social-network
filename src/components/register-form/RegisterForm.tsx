import "./RegisterForm.scss";

type Props ={}
const RegisterForm = (props: Props) => {
    return (
        <form className={"register-form"}>
            <div className={"register-header"}>Register</div>

            <div className="register-input">
                <input type="text" id={"name-register"}/>
                <label htmlFor="name-register">Username:</label>
            </div>

            <div className="register-input">
                <input type="email" id={"email-register"}/>
                <label htmlFor="email-register">Email:</label>
            </div>

            <div className="register-input">
                <input type="password" id={"pass-register"}/>
                <label htmlFor="pass-register">Password:</label>
            </div>

            <button type={"submit"} className={"register-submit-button"}>Create Account</button>
        </form>
    );
};

export default RegisterForm;