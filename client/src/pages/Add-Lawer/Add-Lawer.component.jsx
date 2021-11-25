import React, { useState } from 'react';
import { saveLawerToDb } from "../../service/lawers-service.service";

export default function AddLawer() {
    const [lawerName, setLawerName] = useState("")
    const [image, setLawerImage] = useState("")
    const [synopsis, setLawerSyno] = useState("")
    const [linkToLawer, setLawerLink] = useState("")
    const [rating, setRating] = useState(1)

    function updateLawerName(event) {
        setLawerName(event.target.value)
    }
    function updateLawerImage(event) {
        setLawerImage(event.target.value)
    }
    function updateLawerSyno(event) {
        setLawerSyno(event.target.value)
    }
    function updateLawerLink(event) {
        setLawerLink(event.target.value)
    }
    function updateLawerRating(event) {
        setRating(event.target.value)
    }
    function saveLawer(params) {
        params.preventDefault()
        saveLawerToDb({ lawerName, rating, image, synopsis, linkToLawer })
            .then((res) => { alert(res.message) })
    }
    
    return (
        <div>
            <form onSubmit={saveLawer}>
                <label htmlFor="lawerName">Lawer Name:</label>
                <input onChange={updateLawerName} type="text" />
                <label htmlFor="lawerImage">Lawer image:</label>
                <input onChange={updateLawerImage} type="url" />
                <label htmlFor="lawerSyno">Lawer synopsis:</label>
                <input onChange={updateLawerSyno} type="text" />
                <label htmlFor="lawerLink">Lawer link:</label>
                <input onChange={updateLawerLink} type="url" />
                <label htmlFor="lawerRating">Lawer Rating:</label>
                <input onChange={updateLawerRating} max={10} min={1} type="number" />
                <section>
                    <button type="submit">SAVE</button>
                    <button type="reset">RESET</button>
                </section>
            </form>
        </div>
    )
}