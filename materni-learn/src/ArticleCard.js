import React, { useState, useEffect } from "react";
import axios from 'axios';
const cheerio = require('cheerio');
const topics = require("./geeks.json");

export default function ArticleCard(){

    const [aName, setAName] = useState('');
    const [aDesc, setADesc] = useState('');
    const [tag, setTag] = useState('');
    const [webLink, setWebLink] = useState('');

    const handleJSON= (event) => {
        setTag('Python')
        setWebLink(topics[tag]);
        setAName('Python')
    }

    useEffect(() => {
        handleJSON();
    });

    // const handleAName = (event) => {
    //     axios.get(`http://localhost:8000/tag/getTagName/${tagName}`)
    //     .then((response) => {
    //         console.log(tag.tagName);
    //         setTag(tag.tagName);
    //         setAName(tag.tagName);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    //     .finally(() => {
    //         console.log(topics);
    //         setWebLink(console[tag]);
    //         axios.get(webLink)
    //         .then((response) => {
    //             const parser = cheerio.load(response.data);
    //             const headers = parser('h2');
    //             headers.each((index, header) => {
    //                 if(parser(header).text() == "What is Python?"){
    //                     setADesc(parser(header).text());
    //                 }
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     });
    // }

    // useEffect(() => {
    //     handleAName();
    // });

    return (
        <div >
            <div className="screen-background">
            <div className="card card-background">
            <div className="card-body row">
                    <div className="col-3">
                    </div>
                
                    <div className="col-9">
                        <h6 className="card-title">
                        {aName}
                        </h6>
                        <p className="card-text">{aDesc}</p>
                        <p className="card-link"><a href = {webLink}>What is Python?</a></p>
                </div>

            </div>
            
        </div>
        </div>
        </div>
    )
}