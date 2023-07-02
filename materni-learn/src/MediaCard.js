import React from "react";
import spotifylogo from './spotifylogo.svg'
import pausebutton from './pausebutton.svg'
import sound1 from './sound1.svg'
import sound2 from './sound2.svg'
import sound3 from './sound3.svg'
import sound4 from './sound4.svg'
import sound5 from './sound5.svg'

export default function MediaCard(){
    return (
        <div >
            <div className="screen-background">
            <div className="card card-background">
            <div className="card-body row">
                    <div className="col-3">
                    <img src={spotifylogo} width={40} height={40}/>
                    </div>
                
                    <div className="col-9">
                        <h6 className="card-title">
                        All you need to know about Machine Learning
                        </h6>
                        <p className="card-text">How disruptive is Machine Learning, in this episode, we look at what the new changes mean</p>
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