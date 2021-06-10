import React from 'react'

export default function ShiftList({shifts}) {
    return (
        <section className="shift-overview">
            <h2>Overview</h2>
            {shifts && shifts.length
                ? shifts.map((shift) => (
                    <div className="cards-container">
                        <div className="shift-card">
                            <img src="https://picsum.photos/200" alt="random pic" />
                            <div className="shift-info">
                                <div>Name: <span className="info">{shift.fullName}</span></div>
                                <div>User name: <span className="info">{shift.userName}</span></div>
                                <div>Email: <span className="info">{shift.email}</span></div>
                                <div>Contact: <span className="info">{shift.contact}</span></div>
                                <div>Gender: <span className="info">{shift.gender}</span></div>
                                <div>Start time: <span className="info">{shift.startTime}</span></div>
                                <div>End time: <span className="info">{shift.endTime}</span></div>
                            </div>
                        </div>
                    </div>
                  ))
                : 'No one has registered yet 😟'}
        </section>
    )
}
