import React from 'react'

const person = (props) => {
    return (
        <div>
            <h1>{props.name}'s First Ever Component</h1>
            <p>{props.name} is {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person