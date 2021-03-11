import React from 'react'

function Location(location) {
    return (
        <div className="Location">
            <p>{location.location.street.number}</p>
            <p>{location.location.street.name}</p>
            <p>{location.location.city}</p>
            <p>{location.location.state}</p>
            <p>{location.location.country}</p>
        </div>
    )
}

export default Location
