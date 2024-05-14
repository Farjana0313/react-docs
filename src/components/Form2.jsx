import React, { useState } from 'react'

export default function Form2() {
    const [inputs, setInputs] = useState([{
        id: 1,
        label: 'input'
    }])
    const handleAddInput =()=>{
        setInputs([
            ...inputs,
            {
                id: inputs.length + 1,
                label: 'input'
            }
        ])
    }
    return (
        <div>
            {inputs.map((input) => (
                <div key={input.id} style={{marginBottom:"10px"}} >
                    <input type="text" placeholder={input.label} />
                </div>
            ))}

            <div style={{ marginTop: "20px" }} >
                <button onClick={handleAddInput} >Add Input</button>
            </div>
        </div>
    )
}
