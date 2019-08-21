import React from 'react'

const userInput = (props) => {
    const style = {
        border: '3px solid lime',
        width: '60%',
        margin: '2rem auto',
        padding: '2rem'
    }

    const istyle = {
        display: 'inline-block',
        margin: '0 1.5rem',
        width: '40%',
        height: '50px',
        textAlign: 'center',
        borderRadius: '30px',
        border: '1px solid lime'
    }

    return(
        <div className="input" style={style}>
            <input type="text" onChange={props.changed1} value={props.usernames[0]} style={istyle}/>
            <input type="text" onChange={props.changed2} value={props.usernames[1]} style={istyle}/>
        </div>
    )
}

export default userInput