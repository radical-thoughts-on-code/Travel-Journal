import React from "react"


export default function Travel(props) {
  return (
    <div className="travel">
      <div className="travel__item--container">
        <p className="travel__location">
          <i className="fa-solid fa-location-dot"></i>
          {props.location}
        </p>
        <a
          href={props.googleMapsUrl}
          className="travel__link"
        >
          View on Google Maps
        </a>
        <h2 className="travel__title">{props.title}</h2>
        <strong className="travel__date">{`${props.startDate} - ${props.endDate}`}</strong>
        <p className="travel__text">{props.description}</p>
      </div>
      <div className="travel__img--container">
        <img src={`${props.imageUrl}`} alt="" className="travel__image" />
      </div>
    </div>
  )
}
