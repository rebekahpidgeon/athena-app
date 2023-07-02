import React, { useState, useLayoutEffect } from "react";
import axios from 'axios';
const cheerio = require('cheerio');
const topics = require("./geeks.json");

export default function ArticleCard(){

    const [aName, setAName] = useState([]);
    // Hard coded desc for now. Would be fetched from most important/interesting part of the website
    const [aDesc, setADesc] = useState('Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting-edge technology in Software Industry.');
    const [webLink, setWebLink] = useState([]);

    const handleAName = async()=> { // Handle getting the topic of the article card
        try{
            const tag = 'Python'; // Hard coded tag. In the future the tag ID would be passed in once the data is fetched from the user's tags
            const response = await fetch(`http://localhost:8000/tag/getTagName/${tag}`); // would use tag id in the future
            const data = await response.json();
            setAName(data[0].tagName); // Set the article name to the tag name fetched from the database
            setWebLink(topics[data[0].tagName]); // Get the corresponding websites linked to that tag. Would be an array or dictionary of websites in the future
        }
        catch(error) {
            console.error(error);
        }
    }
  
    useLayoutEffect(() => { 
        handleAName(); // Before page loads run the function to get article data
    }, []);

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