import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="output">
            <p>{props.usernames[0]}</p>
            <p>{props.usernames[1]}</p>
            <p>HARD-CODED</p>
        </div>
    )
}

export default userOutput