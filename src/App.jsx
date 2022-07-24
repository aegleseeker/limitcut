import React from "react"
import Quiz from "./components/Quiz.jsx"
import Footer from "./components/Footer.jsx"
import quizData from "./quizData.js"
import "./index.css"

export default function App(){
    const initIndex = Math.floor(Math.random() * quizData.length)
    const [image, setImage] = React.useState(quizData[initIndex].filename)
    const [direction, setDirection] = React.useState(quizData[initIndex].direction)
    const [text, setText] = React.useState("Take a guess!")
    const [quizState, setQuizState] = React.useState(true)
    
    function answer(){
        event.target.value === "east" && direction ? 
        setText("Correct!") :
        setText(event.target.value === "west" && !direction ? 
        "Correct!" : "Failure! Raid Wiped!")
        setQuizState(!quizState)
    }
    
    function retry(){
        const randomIndex = Math.floor(Math.random() * quizData.length)
        setImage(quizData[randomIndex].filename)
        setDirection(quizData[randomIndex].direction)
        setText("Take a guess!")
        setQuizState(!quizState)
    }
      
    return (
        <div className="container"> 
            <Quiz 
                text={text}
                filename={image}
                direction={direction}
                answer={answer}
                retry={retry}
                quizState={quizState}
            />
            <Footer />
        </div> 
    )
}