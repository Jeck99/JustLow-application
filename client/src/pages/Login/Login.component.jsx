import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { withRouter } from 'react-router';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/home");
        }
    })
    const changeHandler = e => {
        setUser({ [e.target.name]: e.target.value });
      };
    const onEmailChange = e => {
        setEmail(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const onRoleChange = e => {
        setRole(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        const userData = {
            email,
            password,
            role
        };
        props.loginUser(userData, props.history);
    };
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="8">
                    <Link to="/" className="btn-flat waves-effect">
                        Back to home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4><b>Login</b> below</h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account?
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" 
                                onChange={onEmailChange}
                                value={email}
                                error={errors.email}
                                id="email" />

                        </div>
                        <div className="input-field col s12">
                            <MDBInput label="Type your password" icon="lock" group type="password" validate
                                onChange={onPasswordChange}
                                value={password}
                                error={errors.password}
                                id="password" />
                        </div>
                        <div className="input-field col s12">
                            התחבר כ:
                            <select onChange={onPasswordChange}  value={password}>
                                <option value="1">ארגון</option>
                                <option value="2">עורך דין</option>
                                </select>
                        </div>
                        <button> Login</button>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default withRouter(connect(mapStateToProps, { loginUser })(Login));