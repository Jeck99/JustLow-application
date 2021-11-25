import React, { useState, useEffect } from 'react';
import { getLawerById } from "../../service/lawers-service.service";

export default function LawerDetails(props) {
    const {lawerId} = props.match.params
    const [lawer, setLawer] = useState({});
    useEffect(getLawer, [])

    function getLawer() {
        getLawerById(lawerId).then((res) => { setLawer(res) })
    }
    return (
        <div>
            <label htmlFor="lawerRating">Lawer id:</label>
            <h4>{lawer._id}</h4>
            <label htmlFor="lawerName">Lawer Name:</label>
            <h4>{lawer.lawerName}</h4>
            <label htmlFor="lawerName">Lawer image:</label>
            <h4>{lawer.image}</h4>
            <label htmlFor="lawerName">Lawer synopsis:</label>
            <h4>{lawer.synopsis}</h4>
            <label htmlFor="lawerName">Lawer link:</label>
            <h4>{lawer.linkToLawer}</h4>
            <label htmlFor="lawerRating">Lawer Rating:</label>
            <h4>{lawer.rating}</h4>
            <label htmlFor="lawerRating">Added At:</label>
            <h4>{lawer.date}</h4>
            <button >back</button>
            <button >next</button>
        </div>
    )
}