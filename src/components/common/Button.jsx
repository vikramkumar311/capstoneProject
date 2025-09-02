import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100" onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    )
}

export default Button