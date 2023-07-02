import React from "react";
import MediaCard from "./MediaCard";
import ArticleCard from "./ArticleCard";



export default function ForYouPage(){
    return (
        <div className="container-fluid">
        <header className="header-banner">
                <h1 className="header-text"><span className="highlighted-text">Machine Learning</span> applications, along</h1>
            </header>
            <br/>

        <ArticleCard/>
        <br/>
        <MediaCard/>    
        <br/>
        <MediaCard/>
        </div>
    )
}