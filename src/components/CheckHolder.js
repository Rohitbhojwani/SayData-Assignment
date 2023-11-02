import React from 'react'
import styles from "../stylesheets/CheckHolder.module.css"

function CheckHolder() {

    const data = [
        {
            "Name": "Peng Meeting",
            "FileType": "audio",
            "Duration": "20:",
            "DateCreated": "Tofunmi",
            "LastUpdated": "Table cell"
        },
        {
            "Name": "Naomi Igimoh",
            "FileType": "SML10025",
            "Duration": "25/4/2023",
            "DateCreated": "Shakirat",
            "LastUpdated": "Table cell"
        },
        {
            "Name": "Edu Hermanns",
            "FileType": "SML10025",
            "Duration": "20/4/2023",
            "DateCreated": "Tofunmi",
            "LastUpdated": "Table cell"
        },
        {
            "Name": "Timmy Adubi",
            "FileType": "SML10025",
            "Duration": "20/4/2023",
            "DateCreated": "Tofunmi",
            "LastUpdated": "Table cell"
        },
        {
            "Name": "Alex Oyebade",
            "FileType": "SML10025",
            "Duration": "20/4/2023",
            "DateCreated": "Shakirat",
            "LastUpdated": "Table cell"
        },
        {
            "Name": "Ekene Smart",
            "FileType": "SML10025",
            "Duration": "20/4/2023",
            "DateCreated": "Shakirat",
            "LastUpdated": "Table cell"
        },
    ]

    return (
        <div className={styles.container}>
            <h1>Recent Files</h1>
            <hr />
            <div className={styles.holder}>
                <input type="checkbox" style={{opacity:"0"}} name="" id="" />
                <p>Name</p>
                <p>Type</p>
                <p>Duration</p>
                <p>Date Created</p>
                <p>Last Updated</p>
                <p>Action</p>
            </div>
            {

                data.map(el => {
                    return <>
                        <div className={styles.holder}>
                            <input type="checkbox" name="" id="" />
                            <p>{el.Name}</p>
                            <p>{el.FileType}</p>
                            <p>{el.Duration}</p>
                            <p>{el.DateCreated}</p>
                            <p>{el.LastUpdated}</p>
                            <p></p>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default CheckHolder
