import React from 'react'
import Card from './Card'

export default function ShiftList({shifts}) {
    console.log(shifts)
    return (
        <section className="shift-overview">
            <h2>Registered shifts Overview</h2>
            {shifts.length === 0 
                ? <div className="card-null">No one has registered yet 😟</div> 
                : <div className="cards-container">
                    {shifts && shifts.length &&
                        shifts.map((shift) => (
                            <Card shift={shift} />
                        ))
                    }
                </div>}    
        </section>
    )
}
