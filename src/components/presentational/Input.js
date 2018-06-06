import React from 'react'

const Input = ({label,type , value, name, handlerOnChange}) => {
    return(
       <div style={container}>
            <label style={buscador}>{label}</label>
            <div>
                <input 
                    style={input}
                    type={type}
                    value={value}
                    name={name}
                    onChange={handlerOnChange}
                />
            </div>
       </div>
    )
}


const container = {
    fontFamily : ['Arial Narrow', 'Arial', 'sans-serif'],
    margin: '10px',
    border: '1px solid #6c757d',
    borderRadius: '10px',
    padding: '10px',
    width: '30%'
}

const buscador = {
    fontSize: 24,
    fontWidth:'bold'
}

const input = {
    width : '100%',
    height: '28px',
}


export default Input