import React, { useState, useEffect } from 'react';
import { getLawerById ,putLawer} from "../../service/lawers-service.service";

export default function EditLawer(props) {
    const { lawerId } = props.match.params
    const [lawer, setLawer] = useState({});
    useEffect(getLawer, [])

    const [lawerName, setLawerName] = useState(lawer.lawerName)
    const [image, setLawerImage] = useState(lawer.image)
    const [synopsis, setLawerSyno] = useState(lawer.synopsis)
    const [linkToLawer, setLawerLink] = useState(lawer.linkToLawer)
    const [rating, setRating] = useState(lawer.rating)

    function getLawer() {
        getLawerById(lawerId).then((res) => { setLawer(res) })
    }
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
    function updateLawer(event) {
        console.log(lawer);
        event.preventDefault()
        // putLawer({ lawerName, rating, image, synopsis, linkToLawer })
        //     .then((res) => { alert(res.message) })
    }
    return (
        <div>
            <form onSubmit={updateLawer}>
                <label htmlFor="lawerName">Lawer Name:</label>
                <input onChange={updateLawerName} type="text" value={lawer.lawerName||''}/>
                <label htmlFor="lawerImage">Lawer image:</label>
                <input onChange={updateLawerImage}  value={lawer.image||''}/>
                <label htmlFor="lawerSyno">Lawer synopsis:</label>
                <input onChange={updateLawerSyno} type="text" value={lawer.synopsis||''}/>
                <label htmlFor="lawerLink">Lawer link:</label>
                <input onChange={updateLawerLink} type="url" value={lawer.linkToLawer||''}/>
                <label htmlFor="lawerRating">Lawer Rating:</label>
                <input onChange={updateLawerRating} max={10} min={1} type="number" value={lawer.rating||''}/>
                <section>
                    <button type="submit">UPDATE</button>
                    <button type="reset">RESET</button>
                </section>
            </form>
        </div>
    )
}