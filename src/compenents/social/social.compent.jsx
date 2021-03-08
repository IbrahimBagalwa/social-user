import React from 'react'
import Phone from '../phone/phone.component'
import './social.component.css'
function Social({user}) {
    return (
        <div className="card">
            <div className="card-title">{user.name.first} {user.name.last}</div>
            <Phone number={user.phone} type='Phone'/>
            <Phone number={user.cell} type='Cell'/>
            <div className="card-pict">
                <div className="images"><img src={user.picture.medium} alt=""/> </div>
            </div>
            <div className="gender">
                <div className="gender-txt">{user.gender}</div> 
            </div>
        </div>
    )
}

export default Social
