import React from "react";
import locLogo from "./../images/location-logo.png";

export default function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={require(`../images/${props.imageLoc}`)} alt=""></img>
            </div>
            <div className="card-info">
                <div className="first-line">
                    <img
                        src={locLogo}
                        alt="lLogo"
                        className="location-logo"
                    ></img>
                    <span className="country-name">{props.location}</span>
                    <a className="map-link" href={props.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <div className="title-text">{props.title}</div>
                <div className="dates">
                    {props.startDate} - {props.endDate}
                </div>
                <div className="desc">{props.description}</div>
            </div>
        </div>
    );
}
