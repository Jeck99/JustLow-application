import React from "react";
import { RegisterLawer,RegisterOrg } from "../../components";

export default function Register(props) {
    const {role} = props.match.params

    return (
        <>
        {
            role==2?<RegisterLawer/>:<RegisterOrg/>
        }
        </>     
    );
}