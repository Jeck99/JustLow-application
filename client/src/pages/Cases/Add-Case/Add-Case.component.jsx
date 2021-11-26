import React, { useState } from 'react';
import { saveCaseToDb } from "../../../service/case-service.service";
import "./Add-case.css";

export default function AddCase() {
    const formDat = {};
    const [step, setStep] = useState(1);
    const [subI, setSubI] = useState(0);
    //* change handler of the form
    const changeHandler = (e) => {
        formDat[e.target.name] = e.target.value;
    };

    //* submit handler of the form 
    const submitHandler = (e) => {
        e.preventDefault();
        saveCaseToDb(formDat)
    };

    const langs = ["עברית", "אמהרית", "אנגלית", "רוסית"];
    const needs = [
        { main: "משפחה", sub: ["גירושים", "ירושה"] },
        { main: "תעסוקה", sub: ["השתלמויות", "פנסיה"] },
        { main: "משפחה", sub: ["גירושים", "ירושה"] },
    ];
    const areas = ["מרכז", "חיפה", "תל-אביב", "דרום"];
    const genders = ["העדפה לגבר", "העדפה לאישה", "לא משנה"];
    // const needs = ["משפחה", "מקרקעין", "תעסוקה", "אזרחי"];

    return (
        <div>
            <form onSubmit={submitHandler}>

                {step === 1 ?
                    <div className="step stepOne">
                        <h1>מה הצרכים שלי?</h1>
                        <div className="needs" style={{ marginBottom: "10px" }}>
                            {needs.map((need, i) =>
                                <button onClick={(e) => {
                                    setSubI(i);
                                    changeHandler(e);
                                }}>{need.main}</button>
                            )}
                        </div>
                        <p>כתבו את הגדרת הנושא בצורה הברורה ביותר, האלוגריתם שלנו מפלטר את מילות המקרה במטרה למצא את החיבור הטוב ביותר
                        </p>
                        <div style={{ display: "flex" }}>
                            <h5>ספר לנו בקצרה:</h5>
                            <textarea type="text"
                                cols="60"
                                rows="5"
                                onChange={changeHandler} name="description" />
                            <br />

                        </div>
                        <button onClick={() => setStep(step + 1)}>הבא</button>
                    </div>
                    : step === 2 ?
                        <div className="step stepTwo">
                            <h1>שאלות הרחבה כדי להבין את גודל האתגר</h1>
                            <ol>
                                <li>כמה גורמים מעורבים?</li>
                                <li>. האם יש מועד לביצוע פעולה (לדוג' מועד להגשת כתב בית דין, מועד פינוי וכד')</li>
                                <li>.
                                    האם יש הליך משפטי
                                    <select
                                        name="legalProcess"
                                        id=""
                                        onChange={changeHandler}
                                    >
                                        <option value={true}>כן</option>
                                        <option value={false}>לא</option>
                                    </select>
                                </li>
                            </ol>

                            <div className="controllers">
                                <button onClick={() => setStep(step + -1)}>הקודם</button>
                                <button onClick={() => setStep(step + 1)}>הבא</button>
                            </div>
                        </div> :
                        <div className="step stepThree">
                            <h1>Step 3</h1>
                            <article style={{ display: "flex" }}>
                                <h3>שפה</h3>
                                <div className="langOptions">
                                    {langs.map((lang, i) =>
                                        <button key={i} onClick={() => {
                                            formDat["lang"] = lang;
                                        }}>{lang}</button>
                                    )}
                                </div>
                            </article>
                            <article style={{ display: "flex" }}>
                                <h3>אזור מגורים</h3>
                                <div className="areaOptions">
                                    {areas.map((area, i) =>
                                        <button key={i} onClick={() => {
                                            formDat["area"] = area;
                                        }}>{area}</button>
                                    )}
                                </div>
                            </article>
                            <article style={{ display: "flex" }}>
                                <h3>העדפה מגדריצ</h3>
                                <div className="areaOptions">
                                    {genders.map((gender, i) =>
                                        <button key={i} onClick={() => {
                                            formDat["gender"] = gender;
                                        }}>{gender}</button>
                                    )}
                                </div>
                            </article>
                            <div>
                                <button onClick={() => setStep(step + -1)}>הקודם</button>
                                <button type="submit">העלה</button>
                            </div>
                        </div>
                }
            </form>
            <div>
            </div>
        </div>
    )
}
