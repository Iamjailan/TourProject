import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import data from "./data";

export default function App(){
    const card = data.map(item =>{
        return(
         <Card 
        key={item.id}
        {...item}
        // img={item.img}
        // country={item.country}
        // location={item.location}
        // date={item.date}
        // text={item.text}
         />   
        )
    })
    return (
        <div>
        <Navbar />
        <div className="card--list">
           {card}
        </div>
        </div>
    )
}