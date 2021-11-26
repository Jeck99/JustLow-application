import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { registerUser } from "../../redux/actions/authActions";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const RegisterLawer = (props) => {
    const [org_name, setOrg_name] = useState('');
    const [phone_number, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/home");
        }
    },
        []
    )
    const onOrgNameChange = e => {
        setOrg_name(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const onPassword2Change = e => {
        setPassword2(e.target.value);
    };
    const onPhoneChange = e => {
        setPhone(e.target.value);
    };
    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        e.target.className += " was-validated";
        const newUser = {
            org_name, phone_number, role:1, email, password, password2
        };
        props.registerUser(newUser, props.history);
    };
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="8">
                    <Link to="/" className="btn-flat waves-effect"> Back to home</Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4><b>Register</b> below</h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/">Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <MDBInput label="organiztion name" icon="compony" group type="text" validate error="wrong"
                                    success="right" onChange={onOrgNameChange}
                                    value={org_name}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="phone number" icon="phon" group type="text" validate error="wrong"
                                    success="right" onChange={onPhoneChange}
                                    value={phone_number}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={onEmailChange}
                                    value={email}
                                    error={errors.email}
                                    id="email" />
                                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                                    error="wrong" success="right" />
                                <MDBInput label="Your password" icon="lock" group type="password" validate
                                    onChange={onPasswordChange}
                                    value={password}
                                    error={errors.password}
                                    id="password" />
                                <MDBInput label="Your password" icon="exclamation-triangle" group type="password" validate
                                    onChange={onPassword2Change}
                                    value={password2}
                                    error={errors.password2}
                                    id="password2" />
                            </div>
                            <button>Sign up Organiztion</button>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default withRouter(connect(mapStateToProps, { registerUser })(RegisterLawer));