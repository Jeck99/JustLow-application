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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [firm, setFirm] = useState('');
    const [gender, setGender] = useState(false);
    const [expertise, setExpertise] = useState('');
    const [numberOfFiles, setNumberOfFiles] = useState(0);
    const [seniorty, setSeniorty] = useState(0);
    const [langs, setLanguage] = useState([]);
    const [area, setArea] = useState('');
    const [capability, setCapability] = useState(0);
    const [nonWorkingPeriod, setNonWorkingPeriod] = useState([]);
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
    const onFirstNameChange = e => {
        setFirstName(e.target.value);
    };
    const onLastNameChange = e => {
        setLastName(e.target.value);
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
    const onGenderChange = e => {
        setGender(e.target.value);
    };
    const onFirmChange = e => {
        setFirm(e.target.value);
    };
    const onExpertiseChange = e => {
        setExpertise(e.target.value);
    };
    const onNumberOfFilesChange = e => {
        setNumberOfFiles(e.target.value);
    };
    const onSeniortyChange = e => {
        setSeniorty(e.target.value);
    };
    const onLanguageChange = e => {
        setLanguage(e.target.value);
    };
    const onAreaChange = e => {
        setArea(e.target.value);
    };
    const onCapabilityChange = e => {
        setCapability(e.target.value);
    };
    const onNonWorkingPeriodChange = e => {
        setNonWorkingPeriod(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        e.target.className += " was-validated";
        const newUser = {
            fullName:`${firstName} ${lastName}`, phoneNumber, firm,
            expertise, gender, numberOfFiles, seniorty,
            langs, area, email, capability, nonWorkingPeriod,
            password, password2
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
                                <MDBInput label="first name" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onFirstNameChange}
                                    value={firstName}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="last name" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onLastNameChange}
                                    value={lastName}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="phone number" icon="phon" group type="text" validate error="wrong"
                                    success="right" onChange={onPhoneChange}
                                    value={phoneNumber}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="firm" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onFirmChange}
                                    value={firm}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="gender" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onGenderChange}
                                    value={gender}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="expertise" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onExpertiseChange}
                                    value={expertise}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="number Of Files" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onNumberOfFilesChange}
                                    value={numberOfFiles}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="seniorty" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onSeniortyChange}
                                    value={seniorty}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="langs" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onLanguageChange}
                                    value={langs}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="capability" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onCapabilityChange}
                                    value={capability}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="area" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onAreaChange}
                                    value={area}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="nonWorkingPeriod" icon="user" group type="text" validate error="wrong"
                                    success="right" onChange={onNonWorkingPeriodChange}
                                    value={nonWorkingPeriod}
                                    error={errors.name}
                                    id="name"
                                    require />
                                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
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
                            <button>Sign up</button>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default withRouter(connect(mapStateToProps, { registerUser })(RegisterLawer));
// export default  RegisterLawer;