/* eslint-disable react/prop-types */
import React from 'react';

export default function Panel({ title, children, isActive, handleActive }) {


    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={handleActive} >Show</button>}
        </section>
    )
}
