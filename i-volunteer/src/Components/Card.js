import React from 'react'

export default function Card({shift}) {
    console.log(shift)
    return (
        <div className="shift-card">
            <img src="https://picsum.photos/200" alt="random pic" />
            <div className="shift-info">
                <div>Name: <span className="info">{shift.fullName}</span></div>
                <div>User name: <span className="info">{shift.userName}</span></div>
                <div>Email: <span className="info">{shift.email}</span></div>
                <div>Contact: <span className="info">{shift.contact}</span></div>
                {shift.gender ? <div>Gender: <span className="info">{shift.gender}</span></div> : <div />}
                {shift.startTime ? <div>Start time: <span className="info">{shift.startTime}</span></div> : <div />}
                {shift.endTime ? <div>End time: <span className="info">{shift.endTime}</span></div> : <div />} 
                {shift.additional ? <div>Additional query: <span className="info">{shift.additional}</span></div> : <div />}
                {shift.skills ? <ul>{shift.skills.map((skill, index) => <li key={skill + index}>{skill}</li>)}</ul> : <div />}
            </div>
        </div>
    )
}
