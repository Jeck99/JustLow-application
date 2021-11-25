import React, { useState, useEffect } from 'react';
import { getAllLawers, getLawerByName } from "../../service/lawers-service.service";
import {CaseCard} from "../../components";
import './home.css';
export default function Home(props) {
    const [lawers, setLawers] = useState([]);
    const [paramInput, setParamInput] = useState("");
    const [sortMethod, setSortMethod] = useState("date");
    const [searchMethod, setSearchMethod] = useState("lawerName");
    useEffect(getLawers, [])

    function getLawers() {
        getAllLawers().then((res) => { setLawers(res) })
    }
    function sortLawersClick() {
        switch (sortMethod) {
            case "lawerName":
                setLawers(() => { return sortLawers("lawerName") });
                console.log();
                break;
            case "rating":
                // setLawers(()=>{return sortLawers("rating")});
                break;
            case "date":
                setLawers(() => { return sortLawers("date") });
                break;
            default:
                break;
        }
    }
    function sortLawers(field) {
        return lawers.sort((a, b) => {
            return a[field].toLowerCase() - b[field].toLowerCase();
        })
    }
    function serchLawersClick(e) {
        setParamInput(e.target.value)
        if(e.target.value.length==0) return getLawers();
        searchMethod == "lawerName" ? getLawerByName(e.target.value).then((res) => { setLawers(res) }) : console.log(getMax());
    }
    function getMax() {
        let maxObject = lawers[0];
        for (const item of lawers) {
            if (item[searchMethod] > maxObject[searchMethod]) maxObject = item;
        }
        return maxObject;
    }
    return (
        <>
            <div id="sorting">
                <button onClick={sortLawersClick}>SORT</button>
                <select id="sort_select" onChange={(e) => { setSortMethod(e.target.value) }}>
                    <option value="lawerName">Name</option>
                    <option value="rating">Rating</option>
                    <option value="date">Added At</option>
                </select>
            </div>
            <div id="serch-div">
                <button onClick={serchLawersClick}>SEARCH</button>
                <select id="sort_select" onChange={(e) => { setSearchMethod(e.target.value) }}>
                    <option value="lawerName">Lawer by Name</option>
                    <option value="rating">Best Lawer</option>
                    <option value="date">Last Lawer Added</option>
                </select>
                <input type="text" onChange={serchLawersClick} />
            </div>
            <div id={"homeDiv"}>
                {lawers ? React.Children.toArray(lawers.map((item) => {
                    return <CaseCard lawerItem={item} />
                })) : ''}
            </div>
        </>
    )
}
