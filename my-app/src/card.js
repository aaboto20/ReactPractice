import React from "react"
import KZaferes from "./kzaferes.png"
import Star from "./star.png"

export default function Card() {
    return (
        <div className="card">
        <img src={KZaferes} className="card--img"/>
        
            <div className="card--stats">
                <img src={Star} className="star--img" />
                <span>5.0</span>
                <span>(6) * </span>
                <span>US</span>
            </div> 
            <p>Life lessons with Katie Zefarese</p>
            <p>From $136</p>
            </div>   
    )
}