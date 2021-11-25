import React from 'react';
import { saveCaseToDb } from "../../../service/case-service.service";

export default function AddCase() {
    const formDat = {};

    //* chan    ge handler of the form
    const changeHandler = (e) => {
        formDat[e.target.name] = e.target.value;
    };

    //* submit handler of the form 
    const submitHandler = (e) => {
        e.preventDefault();
        saveCaseToDb(formDat)
    };

    return (
        <div>
            <h1>Add case component</h1>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} name="title" />
                <input type="text" onChange={changeHandler} name="description" />
                {/* <input type="text" onChange={changeHandler} name="title"/>
                <input type="text" onChange={changeHandler} name="title"/>
                <input type="text" onChange={changeHandler} name="title"/> */}
                <button type="submit">העלה</button>
            </form>
            <div>
                {/* {} */}
            </div>
        </div>
    )
}
