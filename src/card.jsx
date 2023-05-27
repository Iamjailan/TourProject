import React from "react";

export default function Card(props){
    return (
        <div className="cards">
            <div className="card">
            <div className="card--img">
            <img src={props.img} />
            </div>
                <div className="card--details">
                    <div className="card--country">
                        <img src="../public/image/svg.svg" className="card--svg"/>
                        <h3 id="card--country">{props.country}</h3>
                    </div>
                    <h1>{props.location}</h1>
                    <h4 id="card--date">{props.date}</h4>
                    <p id="card--text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}