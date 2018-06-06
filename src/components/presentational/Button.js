import React from 'react'

const Button = ({handlerEvent, value}) => (
    <button style={button} onClick={handlerEvent} >{value}</button>
)

const button = {
    width: '130px',
    height: '30px',
    borderRadius: 5,
    fontSize:'16px',
    background: '#337ab7',
    padding: '6px 12px',
    border: '1px solid transparent',
    color : '#FFF',
    float: 'right',
    cursor: 'pointer'
}

export default Button