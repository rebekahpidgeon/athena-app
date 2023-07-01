import React from "react";
import MediaCard from "./MediaCard";



export default function ForYouPage(){
    return (
        <div className="container-fluid">
        <header className="header-banner">
                <h1 className="header-text">Updates</h1>
            </header>
        <MediaCard/>
        <br/>
        <MediaCard/>
        <br/>
        <MediaCard/>
        </div>
    )
}