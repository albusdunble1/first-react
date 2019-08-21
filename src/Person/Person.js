import React from 'react'
import './Person.css';

const person = (props) => {
    return (
        <div className="person" onClick={props.click}>
            <h1>{props.name}'s First Ever Component</h1>
            <p>{props.name} is {props.age} years old!</p>
            <p>{props.children}</p>
            {/* two way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person