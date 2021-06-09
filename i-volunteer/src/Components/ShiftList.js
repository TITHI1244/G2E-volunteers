import React from 'react'

export default function ShiftList({shifts}) {
    return (
        <div>
            <h2>Overview</h2>
            {shifts.length
                ? shifts.map((shift) => (
                      <div>
                          <div>Name: {shift.fullName}</div>
                          <div>User name: {shift.userName}</div>
                          <div>Email: {shift.email}</div>
                          <div>Contact: {shift.contact}</div>
                          <div>Gender: {shift.gender}</div>
                      </div>
                  ))
                : 'No one is working'}
        </div>
    )
}
