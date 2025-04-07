import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ( props ) => {
const [input,setInput] = useState("");
const [recentPrompt,setRecentPrompt] = useState("");
const [prevPrompts,setPrevPrompts] = useState([]);
const [showResult, setShowResult] = useState(false);
const[loading,setloading] = useState(false);
const [resultData, setResultData] = useState("");

const onSent = async (prompt) => {
    setResultData("")
    setloading(true)
    setShowResult(true)
    setRecentPrompt(input)
 const response = await run(input)
 setResultData(response)
 setloading(false)
 setInput("")
}


const contextValue ={
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    

}
return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)
}

export default  ContextProvider