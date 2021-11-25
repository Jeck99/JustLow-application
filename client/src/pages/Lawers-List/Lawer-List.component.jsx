import React, { useState, useEffect } from 'react';
import {CostumeTable} from "../../components";
import {getAllLawers} from "../../service/lawers-service.service";

export default function LawersList(props) {
    const [lawers, setLawers] = useState([]);
    useEffect(getLawers, [])

    function getLawers() {
        getAllLawers().then((res) => { setLawers(res) })
    }

    const tableColumns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: true,
                sort: false
            },
        },
        {
            name: "lawerName",
            label: "Lawer Name",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "image",
            label: "Image",
            options: {
                sort: true
            },
        },
        {
            name: "synopsis",
            label: "Synopsis",
            options: {
                sort: true
            },
        },
        {
            name: "linkToLawer",
            label: "Link",
            options: {
                sort: true
            },
        },
        {
            name: "rating",
            label: "Rating",
            options: {
                filter: true,
                sort: true
            },
        },
        {
            name: "date",
            label: "Created At",
            options: {
                filter: true,
                sort: true
            },
        },

    ]
    return (
        <div>
            <CostumeTable data={lawers} columns={tableColumns} title={"Lawers Data"} />
        </div>
    )
}
