import React from 'react'

export default function ShiftList({shifts}) {
    return (
        <div>
            {shifts.map (shift => shift.fullName)}
        </div>
    )
}
