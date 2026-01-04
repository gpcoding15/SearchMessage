import {  useState } from "react"

const SearchMessage = () => {
    const  [userInput, setUserInput] = useState("")
    let message = ""

    if(userInput === "") {
        message = "Start typing"
    }
    if(userInput.length < 3 && userInput.length> 0) {
        message = "Too short"
    }
    if(userInput.length >= 3) {
        message="Searching..."
    }

    return (
        <div>
            <input type="text" size="20" value={userInput} onChange={(e)=> setUserInput(e.target.value)}/>
            <p>{message}</p>
        </div>
    )
}

export default SearchMessage