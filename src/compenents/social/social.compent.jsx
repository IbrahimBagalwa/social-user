import React from 'react'
import Location from '../contact/contact.component'
import Phone from '../phone/phone.component'
import './social.component.css'
function Social({user}) {
    return (
        <div className="card">
            <div className="card-title">{user.name.first} {user.name.last}</div>
            
            <div className="card-body">
                <Location location={user.location}/>
                <Phone number={user.phone} type='Phone'/>
                <Phone number={user.cell} type='Cell'/>
                <div className="images"><img src={user.picture.medium} alt=""/> </div>
                <div className="gender-txt">{user.gender}</div> 
            </div>
        </div>
    )
}

export default Social
