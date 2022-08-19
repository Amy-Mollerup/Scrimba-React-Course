import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--content">
                <div className="card--location-info">
                    <img src="./images/location-icon.png" />
                    <h3 className="card--location">{props.location.toUpperCase()}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <div className="card--description">
                    <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}