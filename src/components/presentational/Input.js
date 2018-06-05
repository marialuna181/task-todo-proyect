import React from 'react'

const Input = ({label,type , value, name, handlerOnChange}) => {
    return(
       <div>
            <label>{label}</label>
            <div>
                <input 
                    type={type}
                    value={value}
                    name={name}
                    onChange={handlerOnChange}
                />
            </div>
       </div>
    )
}

export default Input