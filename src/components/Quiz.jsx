import React from "react"

export default function Quiz(props){
    return (
        <div className="quiz">
            <img src={`img/${props.filename}`} className="quiz-img"/>
            <p className="quiz-text">{props.text}</p>
            {props.quizState && 
            <button className="btn-west" onClick={props.answer} value="west">West</button>}
            {props.quizState && 
            <button className="btn-east" onClick={props.answer} value="east">East</button>}
            {!props.quizState && 
            <button className="btn-retry" onClick={props.retry}>Next Guess</button>}
        </div>
    )  
}