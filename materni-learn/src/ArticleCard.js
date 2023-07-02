import React, { useState, useLayoutEffect } from "react";
import axios from 'axios';
import pausebutton from './pausebutton.svg'
import sound1 from './sound1.svg'
import sound2 from './sound2.svg'
import sound3 from './sound3.svg'
import sound4 from './sound4.svg'
import sound5 from './sound5.svg'
import articlelogo from './article-logo.png'
const cheerio = require('cheerio');
const topics = require("./geeks.json");


export default function ArticleCard(){

    const [aName, setAName] = useState([]);
    // Hard coded desc for now. Would be fetched from most important/interesting part of the website
    const [aDesc, setADesc] = useState('Machine Learning applications, along with all cutting-edge technology in Software Industry.');
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
                    <img className="" src={articlelogo} width={60} height={60}/>
                    </div>
                
                    <div className="col-9">
                        <h6 className="card-title">
                        {aName}
                        </h6>
                        <p className="card-text">{aDesc}</p>
                        <p className="card-link"><a href = {webLink}>Read more ... </a></p>
                </div>

            </div>
            <div className="sound-wave">
                <img className="" src={sound1} width={40} height={40}/>
                <img className="" src={sound2} width={40} height={40}/>
                <img className="" src={sound3} width={40} height={40}/>
                <img className="" src={sound4} width={40} height={40}/>
                <img className="" src={sound5} width={40} height={40}/>
                
                <img className="pause-button col-3" src={pausebutton} width={40} height={40}/>
            </div>
            
        </div>
        </div>
        </div>
    )
}